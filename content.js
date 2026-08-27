/* Гавань — місток між адмін-панеллю та сайтом.

   Джерела контенту (у порядку пріоритету):
     1. content.json  — ОПУБЛІКОВАНИЙ контент, спільний для всіх пристроїв
     2. localStorage  — локальні правки цього браузера (чернетка адмінки)
   Якщо ключа немає — беруться початкові значення з коду сторінки.

   Саме через content.json зміни бачать телефони й інші відвідувачі:
   localStorage існує лише в тому браузері, де ви натиснули «Зберегти». */

(function () {
  const LS_KEY = 'havan_site_content_v1';
  let saved = {};
  let local = {};
  try { local = JSON.parse(localStorage.getItem(LS_KEY) || '{}') || {}; } catch (e) { local = {}; }
  saved = local;

  const fixPath = (p) => {
    if (typeof p !== 'string' || !p) return p;
    if (p.startsWith('data:') || p.startsWith('http') || p.startsWith('/')) return p;
    // Адмінка живе в /admin/, тому зберігає шляхи як '../assets/...'.
    // Сайт лежить у корені — прибираємо всі провідні '../' та './',
    // інакше браузер шукає файли ВИЩЕ кореня сайту й отримує 404.
    return p.replace(/^(\.\.\/website\/)+/, '').replace(/^(\.\.?\/)+/, '');
  };

  /** Нормалізація шляху для будь-якого коду сторінки. */
  window.cmsPath = fixPath;

  window.cms = function (path, fallback) {
    const parts = String(path).split('.');
    let cur = saved;
    for (const k of parts) {
      if (cur == null || typeof cur !== 'object' || !(k in cur)) return fallback;
      cur = cur[k];
    }
    if (cur === '' || cur == null) return fallback;
    return typeof cur === 'string' ? fixPath(cur) : cur;
  };

  window.cmsList = function (path, fallback) {
    const v = window.cms(path, null);
    if (!Array.isArray(v) || v.length === 0) return fallback;
    return v.map((x) => {
      if (typeof x === 'string') return fixPath(x);
      if (x && typeof x === 'object') {
        const o = { ...x };
        if (typeof o.photo === 'string') o.photo = fixPath(o.photo);
        if (typeof o.src === 'string') o.src = fixPath(o.src);
        if (typeof o.path === 'string') o.path = fixPath(o.path);
        return o;
      }
      return x;
    });
  };

  window.dz = function (key, fallback) {
    const d = saved.design;
    if (!d || d[key] == null || d[key] === '') return fallback;
    const n = Number(d[key]);
    return Number.isNaN(n) ? d[key] : n;
  };
  window.dzs = function (key, fallback) {
    const d = saved.design;
    if (!d || !d[key]) return fallback;
    return d[key];
  };

  window.cmsHasContent = Object.keys(saved).length > 0;

  /* Опублікований content.json завантажуємо СИНХРОННО — до того, як
     виконаються скрипти сторінки. Це критично: частина масивів (переваги,
     галереї) обчислюється одразу при завантаженні файлу, тому асинхронний
     fetch не встигав, і на телефонах показувались старі значення. */
  (function loadPublished() {
    let published = {};
    try {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'content.json?v=' + Date.now(), false); // false = синхронно
      xhr.send(null);
      if (xhr.status >= 200 && xhr.status < 300) published = JSON.parse(xhr.responseText) || {};
    } catch (e) { /* файлу немає або він пошкоджений — беремо значення з коду */ }
    saved = Object.assign({}, published, local);
    if (published.design || local.design) {
      saved.design = Object.assign({}, published.design || {}, local.design || {});
    }
    window.cmsHasContent = Object.keys(saved).length > 0;
    window.__cmsPublished = Object.keys(published).length > 0;
  })();

  // Сумісність: код, який чекає на обіцянку, працює й далі.
  window.__cmsReady = Promise.resolve(saved);

})();
