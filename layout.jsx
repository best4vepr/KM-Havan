/* Гавань — website UI kit · shared helpers + header/hero/footer.
   Exports to window for index.html to compose. */

const DS = window.DesignSystem_0f1a06;

// Lucide icon helper
function Icon({ icon, size = 20, stroke = 2, style }) {
  let d = window.lucide && lucide.icons[icon];
  if (!d) return null;
  if (d[0] === 'svg' && Array.isArray(d[2])) d = d[2];
  return React.createElement('svg', {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round', style,
  }, d.map((c, i) => React.createElement(c[0], { ...c[1], key: i })));
}

const NAV = [
  ['Про містечко', 'about'],
  ['Схема', 'plots'],
  ['Інфраструктура', 'infra'],
  ['Галерея', 'gallery'],
  ['Контакти', 'contact'],
];

function SiteHeader({ onNav, solid }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  React.useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menu]);
  const goAndClose = (id) => { setMenu(false); setTimeout(() => onNav(id), 180); };
  React.useEffect(() => {
    const el = document.querySelector('[data-scroll]') || window;
    const onScroll = () => setScrolled((el.scrollTop || window.scrollY) > 24);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);
  const dark = !solid && !scrolled;
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: dark ? 'transparent' : 'rgba(11,24,23,0.82)',
      backdropFilter: dark ? 'none' : 'saturate(180%) blur(12px)',
      borderBottom: dark ? '1px solid transparent' : '1px solid rgba(255,255,255,0.08)',
      transition: 'all var(--dur-base) var(--ease-soft)',
    }}>
      <div style={{
        maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '0 var(--gutter)',
        height: 96, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      }} className="hdr">
        <a onClick={() => onNav('top')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <img src="assets/logo-wordmark-light.svg"
            alt="Гавань" className="hdr-logo" style={{ height: 74 }} />
        </a>
        <nav className="hdr-nav" style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          {NAV.map(([label, id]) => (
            <a key={id} onClick={() => onNav(id)} style={{
              cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', fontWeight: 500,
              color: 'var(--cream-50)', letterSpacing: '0.01em',
            }}>{label}</a>
          ))}
        </nav>
        <div className="hdr-right" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button className="burger" aria-label="Меню" onClick={() => setMenu(true)}
            style={{ display: 'none', alignItems: 'center', justifyContent: 'center', width: 44, height: 44,
              background: 'transparent', border: '1px solid rgba(255,255,255,0.35)', color: 'var(--cream-50)', cursor: 'pointer' }}>
            <Icon icon="Menu" size={22} />
          </button>
          <a className="hdr-phone" href={'tel:+' + cms('contacts.phoneRaw', '380954556671')} style={{
            fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.9375rem',
            color: 'var(--cream-50)', whiteSpace: 'nowrap',
          }}>{cms('contacts.phone', '+38 095 455 66 71')}</a>
          <DS.Button variant="accent" size="sm" onClick={() => onNav('new-quarter')}
            style={{ transition: 'box-shadow var(--dur-base) var(--ease-out)' }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'inset 0 64px 0 var(--accent-strong)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = ''; }}>
            Новий квартал
          </DS.Button>
        </div>
      </div>
      {menu && (
        <div onClick={() => setMenu(false)} style={{ position: 'fixed', inset: 0, zIndex: 90, background: 'rgba(5,13,12,0.72)', backdropFilter: 'blur(3px)' }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, width: 'min(84vw, 320px)',
            background: 'var(--teal-900)', padding: '22px 22px 28px', display: 'flex', flexDirection: 'column', gap: 22,
            boxShadow: '-20px 0 60px rgba(0,0,0,0.45)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
              <img src="assets/logo-wordmark-light.svg" alt="Гавань" style={{ height: 42 }} />
              <button aria-label="Закрити" onClick={() => setMenu(false)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, background: 'transparent', border: '1px solid rgba(255,255,255,0.28)', color: 'var(--cream-50)', cursor: 'pointer' }}>
                <Icon icon="X" size={20} />
              </button>
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {NAV.map(([label, id]) => (
                <button key={id} onClick={() => goAndClose(id)} style={{
                  textAlign: 'left', background: 'transparent', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', fontWeight: 600, color: 'var(--cream-50)',
                  padding: '15px 4px', borderBottom: '1px solid rgba(255,255,255,0.1)',
                }}>{label}</button>
              ))}
            </nav>
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href={'tel:+' + cms('contacts.phoneRaw', '380954556671')} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--sand-300)', fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', fontWeight: 700, textDecoration: 'none' }}>
                <Icon icon="Phone" size={18} /> {cms('contacts.phone', '+38 095 455 66 71')}
              </a>
              <DS.Button variant="accent" size="md" fullWidth onClick={() => goAndClose('new-quarter')}>Новий квартал</DS.Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ onNav }) {
  return (
    <section data-screen-label="Hero" style={{ position: 'relative', marginTop: -96, paddingTop: 96, color: 'var(--cream-50)', overflow: 'hidden', minHeight: dz('heroHeight', 88) + 'vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0,
        background: `url(${cms('hero.photo', 'assets/photos/hero-desna.jpg')}) center ${dz('heroFocus', 32)}%/cover no-repeat` }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background:
        `radial-gradient(ellipse 70% 75% at 50% 48%, transparent 28%, rgba(7,17,15,${dz('heroVignette',55)/100}) 70%, rgba(5,13,12,${Math.min(0.97,dz('heroVignette',55)/100+0.37)}) 100%)` }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background:
        `linear-gradient(90deg, rgba(5,13,12,${dz('heroSideShade',78)/100}) 0%, rgba(5,13,12,${dz('heroSideShade',78)/200}) 32%, transparent 58%)` }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: `rgba(5,13,12,${Math.max(0, dz('heroOverlay', 62) - 62) / 100})` }} />
      <div style={{
        position: 'relative', zIndex: 2, maxWidth: 'var(--container-wide)', margin: '0 auto',
        padding: 'clamp(4rem,8vw,7rem) var(--gutter) clamp(5rem,9vw,8rem)',
        display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center',
      }} className="hero-wrap">
        <div className="hero-in" style={{ maxWidth: 640 }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.8125rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--sand-300)', display: 'inline-flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 28, height: 1.5, background: 'currentColor', opacity: 0.7 }} />
            {cms('hero.eyebrow', 'Котеджне містечко Гавань')}
          </span>
          <h1 style={{ fontSize: 'clamp(2.75rem, 5.2vw, 4.5rem)', color: 'var(--cream-50)', margin: '20px 0 0', lineHeight: 1.04 }}>
            {cms('hero.title', 'Ваш власний берег')} <span style={{ fontStyle: 'italic', color: 'var(--sand-300)' }}>{cms('hero.titleAccent', 'Десни')}</span>
          </h1>
          <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--text-on-dark-mut)', margin: '24px 0 0', maxWidth: 520 }}>
            {cms('hero.subtitle', 'Сучасне котеджне містечко на березі річки Десна')}
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
            <DS.Button variant="accent" size="lg" iconRight={<Icon icon="ArrowRight" size={18} />} onClick={() => onNav('plots')}
              style={{ transition: 'box-shadow var(--dur-base) var(--ease-out)' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'inset 0 72px 0 var(--accent-strong)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = ''; }}>
              {cms('hero.cta1', 'Обрати ділянку')}
            </DS.Button>
            <DS.Button variant="secondary" size="lg" onClick={() => onNav('gallery')}
              style={{ color: 'var(--cream-50)', borderColor: 'rgba(255,255,255,0.4)', transition: 'box-shadow var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'inset 0 -64px 0 var(--accent)'; e.currentTarget.style.color = 'var(--ink-900)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.color = 'var(--cream-50)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.transform = ''; }}>
              {cms('hero.cta2', 'Містечко з висоти')}
            </DS.Button>
          </div>
          <div className="hero-stats" style={{ display: 'flex', gap: 40, marginTop: 48 }}>
            {cmsList('hero.stats', [
              { value: 'На воді', label: 'ділянки першої лінії' },
              { value: 'Власний', label: 'пляж · набережна · спуск човнів' },
              { value: '24/7', label: 'охорона та відеонагляд' },
            ]).map(({ value: v, label: l }, si) => (
              <div key={si}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', lineHeight: 1, color: 'var(--cream-50)' }}>
                  {v}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-on-dark-mut)', marginTop: 8, maxWidth: 150 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter({ onNav }) {
  return (
    <footer style={{ background: 'var(--ink-900)', color: 'var(--cream-50)' }}>
      <div style={{
        maxWidth: 'var(--container-wide)', margin: '0 auto', padding: 'var(--sp-9) var(--gutter) var(--sp-6)',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 40,
      }} className="foot-grid">
        <div>
          <img src="assets/logo-wordmark-light.svg" alt="Гавань" style={{ height: 64 }} />
          <p style={{ color: 'rgba(251,248,242,0.6)', fontSize: '0.9375rem', marginTop: 16, maxWidth: 320 }}>
            Сучасне котеджне містечко на мальовничому березі Десни. Продаж ділянок з власним виходом до води.
          </p>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.8125rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sand-300)', marginBottom: 14 }}>Розділи</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {NAV.map(([label, id]) => (
              <a key={id} onClick={() => onNav(id)} style={{ cursor: 'pointer', color: 'rgba(251,248,242,0.78)', fontSize: '0.9375rem' }}>{label}</a>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.8125rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sand-300)', marginBottom: 14 }}>Контакти</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, color: 'rgba(251,248,242,0.78)', fontSize: '0.9375rem' }}>
            <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><Icon icon="Phone" size={16} /> {cms('contacts.phone', '+38 095 455 66 71')}</span>
            <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><Icon icon="MapPin" size={16} /> {cms('contacts.address', 'Київська обл., Вишгородський р-н, с. Новосілки, 14 км від Києва')}</span>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '20px var(--gutter)', display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'space-between', color: 'rgba(251,248,242,0.45)', fontSize: '0.8125rem' }}>
          <span>© 2026 Гавань. Всі права захищені.</span>
          <span>Котеджне містечко на Десні</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Icon, SiteHeader, Hero, SiteFooter, NAV });
