/* Гавань — публікація content.json напряму в репозиторій GitHub.
   Прибирає ручний крок «завантажити файл → залити на GitHub»:
   адмінка сама робить коміт через GitHub API.

   Токен зберігається лише в цьому браузері (localStorage) і нікуди більше
   не надсилається, крім api.github.com. */

const GH_KEY = 'havan_gh_cfg_v1';

function loadGh() {
  try { return JSON.parse(localStorage.getItem(GH_KEY) || '{}') || {}; }
  catch (e) { return {}; }
}
function saveGh(cfg) {
  try { localStorage.setItem(GH_KEY, JSON.stringify(cfg)); } catch (e) {}
}

function b64utf8(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = '';
  bytes.forEach((b) => { bin += String.fromCharCode(b); });
  return btoa(bin);
}

/** Комітить content.json у репозиторій. Повертає {ok, message}. */
async function ghPublish(cfg, jsonText) {
  const owner = (cfg.owner || '').trim();
  const repo = (cfg.repo || '').trim();
  const branch = (cfg.branch || 'main').trim();
  const path = (cfg.path || 'content.json').trim();
  const token = (cfg.token || '').trim();

  if (!owner || !repo || !token) {
    return { ok: false, message: 'Заповніть логін, назву репозиторію та токен.' };
  }

  const api = `https://api.github.com/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`;
  const headers = {
    Authorization: 'Bearer ' + token,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };

  // 1) дізнаємось sha наявного файлу (якщо він уже є)
  let sha = null;
  try {
    const r = await fetch(`${api}?ref=${encodeURIComponent(branch)}`, { headers });
    if (r.status === 200) { const j = await r.json(); sha = j.sha; }
    else if (r.status === 401) return { ok: false, message: 'Токен недійсний або без прав. Створіть новий із дозволом Contents: Read and write.' };
    else if (r.status === 403) return { ok: false, message: 'GitHub відмовив у доступі (403). Перевірте права токена.' };
    else if (r.status === 404) {
      // або файлу ще немає, або неправильний репозиторій — перевіримо репозиторій
      const rr = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers });
      if (rr.status !== 200) return { ok: false, message: `Репозиторій ${owner}/${repo} не знайдено або токен не має до нього доступу.` };
    }
  } catch (e) {
    return { ok: false, message: 'Немає зв\'язку з GitHub: ' + e.message };
  }

  // 2) коміт
  try {
    const body = {
      message: 'Оновлено контент сайту через адмін-панель',
      content: b64utf8(jsonText),
      branch,
    };
    if (sha) body.sha = sha;

    const r = await fetch(api, { method: 'PUT', headers, body: JSON.stringify(body) });
    if (r.status === 200 || r.status === 201) {
      return { ok: true, message: sha ? 'Опубліковано — файл оновлено.' : 'Опубліковано — файл створено.' };
    }
    let detail = '';
    try { const j = await r.json(); detail = j.message || ''; } catch (e) {}
    if (r.status === 409) return { ok: false, message: 'Конфлікт версій. Натисніть «Опублікувати» ще раз.' };
    if (r.status === 422) return { ok: false, message: 'GitHub відхилив запит: ' + detail + ' (перевірте назву гілки).' };
    return { ok: false, message: `Помилка ${r.status}: ${detail}` };
  } catch (e) {
    return { ok: false, message: 'Не вдалося надіслати: ' + e.message };
  }
}

/** Перевірка налаштувань без записування. */
async function ghCheck(cfg) {
  const owner = (cfg.owner || '').trim(), repo = (cfg.repo || '').trim(), token = (cfg.token || '').trim();
  if (!owner || !repo || !token) return { ok: false, message: 'Заповніть усі поля.' };
  try {
    const r = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: { Authorization: 'Bearer ' + token, Accept: 'application/vnd.github+json' },
    });
    if (r.status === 200) {
      const j = await r.json();
      const can = j.permissions && (j.permissions.push || j.permissions.admin);
      return can
        ? { ok: true, message: `Зв'язок є: ${j.full_name} (гілка за замовчуванням «${j.default_branch}»).` }
        : { ok: false, message: 'Токен бачить репозиторій, але не має права запису. Потрібен дозвіл Contents: Read and write.' };
    }
    if (r.status === 401) return { ok: false, message: 'Токен недійсний.' };
    if (r.status === 404) return { ok: false, message: 'Репозиторій не знайдено (перевірте логін і назву).' };
    return { ok: false, message: 'Помилка ' + r.status };
  } catch (e) { return { ok: false, message: 'Немає зв\'язку: ' + e.message }; }
}

Object.assign(window, { GH_KEY, loadGh, saveGh, ghPublish, ghCheck });
