/* Гавань — публікація content.json напряму в репозиторій GitHub.
   Прибирає ручний крок «завантажити файл → залити на GitHub»:
   адмінка сама робить коміт через GitHub API.

   Токен зберігається лише в цьому браузері (localStorage) і нікуди більше
   не надсилається, крім api.github.com. */

function whyFetchFailed(err) {
  let origin = '';
  try { origin = location.origin || ''; } catch (e) {}
  const onPages = /\.github\.io$/i.test((location && location.hostname) || '');
  const isFile = /^file:/i.test(origin);
  if (isFile) {
    return 'Сторінка відкрита як локальний файл, тому браузер блокує запити до GitHub. '
      + 'Відкрийте адмінку за адресою сайту (https://…github.io/…/admin/) — там усе працює.';
  }
  if (!onPages) {
    return 'Запит заблоковано, бо адмінка відкрита не з адреси сайту (зараз: ' + (origin || 'невідомо') + '). '
      + 'Відкрийте адмінку на самому сайті: https://<логін>.github.io/<репозиторій>/admin/ — і повторіть.';
  }
  return 'Запит до GitHub не пройшов (' + (err && err.message ? err.message : 'невідома причина') + '). '
    + 'Найчастіше це блокувальник рекламы або розширення приватності — вимкніть його для цієї сторінки '
    + 'чи спробуйте інший браузер / приватне вікно.';
}

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
    return { ok: false, message: whyFetchFailed(e) };
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
  } catch (e) { return { ok: false, message: whyFetchFailed(e) }; }
}

/** Поетапна перевірка: де саме обривається зв'язок. */
async function ghDiagnose(cfg) {
  const steps = [];
  const push = (name, ok, note) => steps.push({ name, ok, note: note || '' });

  // 1. Інтернет узагалі (простий запит без заголовків — без preflight)
  try {
    const r = await fetch('https://api.github.com/rate_limit', { cache: 'no-store' });
    push('Доступ до api.github.com без токена', r.ok, 'статус ' + r.status);
  } catch (e) {
    push('Доступ до api.github.com без токена', false, e.message);
    return { steps, verdict: 'GitHub недоступний навіть без токена — запити блокує браузер, розширення або мережа. '
      + 'Спробуйте: приватне вікно, вимкнути блокувальник, інший браузер, інша мережа (напр. мобільний інтернет).' };
  }

  // 2. Той самий запит із заголовком Authorization (це вже інший тип запиту — з передперевіркою)
  const token = (cfg.token || '').trim();
  if (!token) { push('Запит із токеном', false, 'токен не введено'); return { steps, verdict: 'Введіть токен.' }; }
  try {
    const r = await fetch('https://api.github.com/rate_limit', {
      cache: 'no-store',
      headers: { Authorization: 'Bearer ' + token, Accept: 'application/vnd.github+json' },
    });
    push('Запит із токеном', r.ok, 'статус ' + r.status);
    if (r.status === 401) return { steps, verdict: 'Токен недійсний або скопійований не повністю. Створіть новий і скопіюйте рядок цілком.' };
  } catch (e) {
    push('Запит із токеном', false, e.message);
    return { steps, verdict: 'Без токена GitHub відповідає, а з токеном — ні. Таке дає розширення приватності, '
      + 'яке ріже заголовок авторизації. Відкрийте приватне вікно з вимкненими розширеннями або інший браузер.' };
  }

  // 3. Доступ саме до репозиторію
  const owner = (cfg.owner || '').trim(), repo = (cfg.repo || '').trim();
  try {
    const r = await fetch('https://api.github.com/repos/' + owner + '/' + repo, {
      cache: 'no-store',
      headers: { Authorization: 'Bearer ' + token, Accept: 'application/vnd.github+json' },
    });
    push('Доступ до ' + owner + '/' + repo, r.ok, 'статус ' + r.status);
    if (r.status === 404) return { steps, verdict: 'Репозиторій не видно цим токеном. У налаштуваннях токена: Repository access → Only select repositories → виберіть ' + repo + '.' };
    if (r.ok) {
      const j = await r.json();
      const can = j.permissions && (j.permissions.push || j.permissions.admin);
      push('Право запису', !!can, can ? 'є' : 'немає');
      return { steps, verdict: can ? 'Усе гаразд — можна публікувати.' : 'Токену не вистачає дозволу Contents: Read and write.' };
    }
  } catch (e) {
    push('Доступ до репозиторію', false, e.message);
  }
  return { steps, verdict: 'Не вдалося завершити перевірку — надішліть цей список.' };
}

Object.assign(window, { ghDiagnose, GH_KEY, loadGh, saveGh, ghPublish, ghCheck });
