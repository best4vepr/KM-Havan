/* Гавань — публікація змін через сервіс-посередник (Cloudflare Worker).

   Браузер не має доступу до api.github.com, тому адмінка надсилає зміни
   на власний сервіс, а вже він комітить їх у репозиторій.

   Налаштування (адреса сервісу + ключ) зберігаються лише в цьому браузері. */

const GH_KEY = 'havan_gh_cfg_v1';

function loadGh() {
  try { return JSON.parse(localStorage.getItem(GH_KEY) || '{}') || {}; }
  catch (e) { return {}; }
}
function saveGh(cfg) {
  try { localStorage.setItem(GH_KEY, JSON.stringify(cfg)); } catch (e) {}
}

function svcUrl(cfg, suffix) {
  let base = String(cfg.worker || '').trim().replace(/\/+$/, '');
  if (!base) return '';
  if (!/^https?:\/\//i.test(base)) base = 'https://' + base;
  return base + suffix;
}

function friendlyError(err) {
  const m = (err && err.message) || '';
  return 'Не вдалося звʼязатися з сервісом публікації. Перевірте адресу сервісу '
    + '(вона має відкриватися у браузері й показувати "ready": true). Технічна деталь: ' + m;
}

/** Публікує content.json через сервіс. */
async function ghPublish(cfg, content) {
  const url = svcUrl(cfg, '/publish');
  if (!url) return { ok: false, message: 'Не вказано адресу сервісу публікації.' };
  if (!cfg.adminKey) return { ok: false, message: 'Не вказано ключ сервісу.' };

  const obj = typeof content === 'string' ? JSON.parse(content) : content;
  try {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Admin-Key': cfg.adminKey },
      body: JSON.stringify({ content: obj, path: cfg.path || 'content.json' }),
    });
    let j = {};
    try { j = await r.json(); } catch (e) {}
    if (r.ok && j.ok) return { ok: true, message: j.message || 'Опубліковано.' };
    return { ok: false, message: j.message || ('Сервіс відповів ' + r.status) };
  } catch (e) {
    return { ok: false, message: friendlyError(e) };
  }
}

/** Завантажує одне фото у репозиторій. dataUrl — результат FileReader. */
async function ghUploadPhoto(cfg, path, dataUrl) {
  const url = svcUrl(cfg, '/photo');
  if (!url) return { ok: false, message: 'Не вказано адресу сервісу публікації.' };
  try {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Admin-Key': cfg.adminKey },
      body: JSON.stringify({ path, dataUrl }),
    });
    let j = {};
    try { j = await r.json(); } catch (e) {}
    if (r.ok && j.ok) return { ok: true, message: j.message || 'Фото завантажено.' };
    return { ok: false, message: j.message || ('Сервіс відповів ' + r.status) };
  } catch (e) {
    return { ok: false, message: friendlyError(e) };
  }
}

/** Перевірка: чи сервіс живий і налаштований. */
async function ghCheck(cfg) {
  const base = svcUrl(cfg, '');
  if (!base) return { ok: false, message: 'Впишіть адресу сервісу публікації.' };
  try {
    const r = await fetch(base, { cache: 'no-store' });
    if (!r.ok) return { ok: false, message: 'Сервіс відповів ' + r.status + '. Перевірте адресу.' };
    const j = await r.json();
    if (!j.ready) {
      return { ok: false, message: 'Сервіс працює, але не налаштований. Бракує змінних: '
        + (j.missing || []).join(', ') + '. Додайте їх у Cloudflare → Settings → Variables and Secrets.' };
    }
    if (!cfg.adminKey) return { ok: false, message: 'Сервіс готовий. Залишилось вписати ключ сервісу.' };
    return { ok: true, message: `Звʼязок є: ${j.repo}, гілка «${j.branch}». Можна публікувати.` };
  } catch (e) {
    return { ok: false, message: friendlyError(e) };
  }
}

/** Поетапна діагностика. */
async function ghDiagnose(cfg) {
  const steps = [];
  const base = svcUrl(cfg, '');
  if (!base) return { steps, verdict: 'Впишіть адресу сервісу публікації.' };

  let info = null;
  try {
    const r = await fetch(base, { cache: 'no-store' });
    steps.push({ name: 'Сервіс публікації відповідає', ok: r.ok, note: 'статус ' + r.status });
    if (r.ok) info = await r.json();
  } catch (e) {
    steps.push({ name: 'Сервіс публікації відповідає', ok: false, note: e.message });
    return { steps, verdict: 'Сервіс недоступний. Перевірте адресу — вона має відкриватися у браузері. '
      + 'Якщо сторінка не відкривається, сервіс не створено або не опубліковано (Deploy у Cloudflare).' };
  }

  if (info) {
    steps.push({ name: 'Сервіс налаштований (токен, репозиторій)', ok: !!info.ready,
      note: info.ready ? (info.repo || '') : 'бракує: ' + (info.missing || []).join(', ') });
    if (!info.ready) return { steps, verdict: 'Додайте змінні у Cloudflare → Settings → Variables and Secrets: '
      + (info.missing || []).join(', ') + '.' };
  }

  if (!cfg.adminKey) {
    steps.push({ name: 'Ключ сервісу', ok: false, note: 'не вказано' });
    return { steps, verdict: 'Впишіть ключ сервісу — той самий, що ви задали у змінній ADMIN_KEY.' };
  }

  // пробний запит із ключем, але без даних — очікуємо 400, а не 401
  try {
    const r = await fetch(svcUrl(cfg, '/publish'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Admin-Key': cfg.adminKey },
      body: JSON.stringify({}),
    });
    const okKey = r.status !== 401;
    steps.push({ name: 'Ключ сервісу приймається', ok: okKey, note: 'статус ' + r.status });
    return { steps, verdict: okKey
      ? 'Усе гаразд — можна публікувати.'
      : 'Ключ не збігається зі змінною ADMIN_KEY у Cloudflare.' };
  } catch (e) {
    steps.push({ name: 'Ключ сервісу приймається', ok: false, note: e.message });
    return { steps, verdict: friendlyError(e) };
  }
}

Object.assign(window, { GH_KEY, loadGh, saveGh, ghPublish, ghUploadPhoto, ghCheck, ghDiagnose });
