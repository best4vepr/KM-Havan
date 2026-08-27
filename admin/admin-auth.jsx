/* Гавань — вхід до адмін-панелі.
   УВАГА: це захист рівня «клієнтський» — він приховує панель від випадкових
   відвідувачів, але не є справжньою безпекою (пароль присутній у коді сторінки).
   Для справжнього захисту потрібен сервер із перевіркою пароля. */

const AUTH_KEY = 'havan_admin_session_v1';
// Пароль зберігається як SHA-256 хеш, а не відкритим текстом.
const CREDS = { login: 'HavaN_KM', hash: null };
const PASSWORD_HASH = '1ee39bfd477d5edd21374ba2039a3cf1ffe75bed55f75277fa81515a23bff024';
const SESSION_HOURS = 12;

async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function readSession() {
  try {
    const s = JSON.parse(sessionStorage.getItem(AUTH_KEY) || localStorage.getItem(AUTH_KEY) || 'null');
    if (!s || !s.until || Date.now() > s.until) return null;
    return s;
  } catch (e) { return null; }
}

function writeSession(remember) {
  const s = { ok: true, until: Date.now() + SESSION_HOURS * 3600 * 1000 };
  (remember ? localStorage : sessionStorage).setItem(AUTH_KEY, JSON.stringify(s));
}

function clearSession() {
  sessionStorage.removeItem(AUTH_KEY);
  localStorage.removeItem(AUTH_KEY);
}

function LoginScreen({ onOk }) {
  const [login, setLogin] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [remember, setRemember] = React.useState(false);
  const [err, setErr] = React.useState('');
  const [busy, setBusy] = React.useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true); setErr('');
    const hash = await sha256(pass);
    const stored = (window.HAVAN_ADMIN_PASSWORD_HASH || PASSWORD_HASH).toLowerCase();
    const user = (window.HAVAN_ADMIN_LOGIN || CREDS.login).toLowerCase();
    if (login.trim().toLowerCase() === user && hash === stored) {
      writeSession(remember); onOk();
    } else {
      setErr('Невірний логін або пароль'); setBusy(false);
    }
  };

  const field = {
    width: '100%', fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'var(--ink-900)',
    background: '#fff', border: '1px solid var(--ink-200)', borderRadius: 8, padding: '12px 14px', outline: 'none',
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--teal-900)', padding: 24 }}>
      <form onSubmit={submit} style={{ width: '100%', maxWidth: 380, background: 'var(--cream-50)', borderRadius: 16, padding: 32, boxShadow: '0 30px 80px rgba(0,0,0,0.35)' }}>
        <img src="../assets/logo-wordmark.svg" alt="Гавань" style={{ height: 54, display: 'block', margin: '0 auto 6px' }} />
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--sand-700)', textAlign: 'center', margin: '0 0 26px', fontWeight: 600 }}>
          Адмін-панель
        </p>

        <label style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--ink-700)', display: 'block', marginBottom: 6 }}>Логін</label>
        <input value={login} onChange={(e) => setLogin(e.target.value)} autoFocus autoComplete="username" style={{ ...field, marginBottom: 16 }} />

        <label style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--ink-700)', display: 'block', marginBottom: 6 }}>Пароль</label>
        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} autoComplete="current-password" style={{ ...field, marginBottom: 16 }} />

        <label style={{ display: 'flex', alignItems: 'center', gap: 9, fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--ink-600)', cursor: 'pointer', marginBottom: 20 }}>
          <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} style={{ width: 17, height: 17, accentColor: 'var(--teal-700)' }} />
          Запам'ятати мене
        </label>

        {err && (
          <div style={{ background: 'var(--red-100)', color: 'var(--red-600)', fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 600, padding: '10px 14px', borderRadius: 8, marginBottom: 16 }}>
            {err}
          </div>
        )}

        <button type="submit" disabled={busy} style={{
          width: '100%', cursor: busy ? 'default' : 'pointer', fontFamily: 'var(--font-sans)',
          fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink-900)',
          background: 'var(--sand-500)', border: 'none', borderRadius: 8, padding: '13px 20px', opacity: busy ? 0.6 : 1,
        }}>{busy ? 'Перевірка…' : 'Увійти'}</button>

        <a href="../index.html" style={{ display: 'block', textAlign: 'center', marginTop: 18, fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'var(--ink-500)', textDecoration: 'none' }}>
          ← Повернутися на сайт
        </a>
      </form>
    </div>
  );
}

Object.assign(window, { LoginScreen, readSession, clearSession, sha256, AUTH_KEY });
