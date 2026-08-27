/* Гавань — website UI kit · page sections. Exports to window. */

const DSx = window.DesignSystem_0f1a06;

const PLOTS = [
  { id: 14, title: 'Ділянка №14', status: 'free', line: '1-а лінія', area: '14 соток', price: 'за запитом', features: ['Власний берег', 'Газ + електрика', 'Місце для човна'] },
  { id: 21, title: 'Ділянка №21', status: 'free', line: '1-а лінія', area: '12 соток', price: 'за запитом', features: ['Кутова', 'Оптоволокно', 'Асфальт до межі'] },
  { id: 8, title: 'Ділянка №8', status: 'reserved', line: '1-а лінія', area: '16 соток', price: 'за запитом', features: ['Широкий берег', 'Газ + електрика', 'Пляж поруч'] },
  { id: 30, title: 'Ділянка №30', status: 'free', line: '2-а лінія', area: '10 соток', price: 'за запитом', features: ['Тиха вулиця', 'Всі комунікації', 'Поруч пляж'] },
  { id: 5, title: 'Ділянка №5', status: 'sold', line: '1-а лінія', area: '18 соток', price: 'продано', features: ['Панорама річки', 'Газ + електрика', 'Причал'] },
  { id: 33, title: 'Ділянка №33', status: 'free', line: '2-а лінія', area: '8 соток', price: 'за запитом', features: ['Компактна', 'Оптоволокно', 'Поруч в’їзд'] },
];

const AMENITIES_DEFAULT = [
  ['Waves', 'Дім біля води', 'Приватний берег на кожній ділянці першої лінії.', 'assets/photos/amenity-1.jpg'],
  ['Sailboat', 'Свій човен на ділянці', 'Паркуйте човен біля свого подвір’я.', 'assets/photos/amenity-2.jpg'],
  ['Umbrella', 'Власний пляж', 'Доглянутий піщаний пляж лише для мешканців містечка.', 'assets/photos/amenity-3.jpg'],
  ['Baby', 'Дитячий майданчик', 'Безпечний простір для ігор та відпочинку дітей.', 'assets/photos/amenity-4.jpg'],
  ['Goal', 'Футбольне поле', 'Власне поле для гри та активного дозвілля мешканців.', 'assets/photos/amenity-5.jpg'],
  ['Volleyball', 'Волейбольне поле', 'Майданчик для волейболу просто неба біля води.', 'assets/photos/amenity-6.jpg'],
];
const AMENITIES = (() => {
  const items = cms('amenities.items', null);
  if (!Array.isArray(items) || !items.length) return AMENITIES_DEFAULT;
  const fix = (p) => (typeof p === 'string' && window.cmsPath ? window.cmsPath(p) : p);
  return items.map((it, i) => [
    (AMENITIES_DEFAULT[i] && AMENITIES_DEFAULT[i][0]) || 'Check',
    it.title || '', it.text || '', fix(it.photo) || '',
  ]);
})();

function SectionShell({ id, bg, children, pad }) {
  return (
    <section id={id} data-screen-label={id} style={{ background: bg || 'transparent', padding: pad || (dz('sectionSpacing', 100) + 'px 0') }}>
      <div className="reveal" style={{ maxWidth: dz('contentWidth', 1200), margin: '0 auto', padding: '0 var(--gutter)' }}>{children}</div>
    </section>
  );
}

function Amenities() {
  return (
    <SectionShell id="about">
      <DSx.SectionHeading eyebrow={cms('amenities.eyebrow', 'Чому Гавань')} title={cms('amenities.title', 'Все для життя біля води')}
        lead={cms('amenities.lead', 'Ми створили містечко, де природа, приватність і комфорт поєднані на березі річки.')}
        style={{ marginBottom: 'var(--sp-8)' }} />
      <AmenitiesCarousel />
    </SectionShell>
  );
}

const AMENITY_IMG = AMENITIES.map((a) => a[3]).filter(Boolean);

function AmenitiesCarousel() {
  const dzPer = dz('amenityPerView', 3);
  const [vw, setVw] = React.useState(() => (typeof window === 'undefined' ? 1200 : window.innerWidth));
  React.useEffect(() => {
    const onR = () => setVw(window.innerWidth);
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, []);
  const perView = vw < 720 ? 1 : (vw < 1060 ? Math.min(2, dzPer) : dzPer);
  const n = AMENITIES.length;
  const maxI = Math.max(0, n - perView);
  const [i, setI] = React.useState(0);
  React.useEffect(() => { setI((p) => Math.min(p, maxI)); }, [maxI]);
  const go = (d) => setI((p) => Math.min(maxI, Math.max(0, p + d)));
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ overflow: 'hidden' }}>
        <div style={{
          display: 'flex', width: `${(n / perView) * 100}%`,
          transform: `translateX(-${i * (100 / n)}%)`,
          transition: 'transform var(--dur-slow) var(--ease-out)',
        }}>
          {AMENITIES.map(([icon, title, text], idx) => (
            <div key={title} style={{ width: `${100 / n}%`, padding: '0 calc(var(--sp-5) / 2) var(--sp-2)', boxSizing: 'border-box' }}>
              <div style={{ position: 'relative', borderRadius: dz('cardRadius', 0), overflow: 'hidden', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)', height: dz('amenityCardHeight', 340), background: `url(${AMENITY_IMG[idx % AMENITY_IMG.length]}) center/cover no-repeat` }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(7,17,15,0.05) 30%, rgba(7,17,15,0.45) 60%, rgba(5,13,12,0.88) 100%)' }} />
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 'var(--sp-5)' }}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.125rem', color: 'var(--cream-50)', marginBottom: '0.4rem' }}>{title}</div>
                  <div style={{ fontSize: '0.9375rem', color: 'rgba(244,239,230,0.82)', lineHeight: 1.5 }}>{text}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => go(-1)} disabled={i === 0} aria-label="Назад" style={{ ...navBtn('left'), left: -8, opacity: i === 0 ? 0.4 : 1 }}><Icon icon="ChevronLeft" size={22} /></button>
      <button onClick={() => go(1)} disabled={i === maxI} aria-label="Вперед" style={{ ...navBtn('right'), right: -8, opacity: i === maxI ? 0.4 : 1 }}><Icon icon="ChevronRight" size={22} /></button>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 'var(--sp-5)' }}>
        {Array.from({ length: maxI + 1 }).map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} aria-label={`Слайд ${idx + 1}`} style={{
            width: idx === i ? 26 : 9, height: 9, borderRadius: 0, border: 'none', cursor: 'pointer',
            background: idx === i ? 'var(--accent)' : 'var(--border-strong)', transition: 'all var(--dur-base) var(--ease-out)',
          }} />
        ))}
      </div>
    </div>
  );
}

function PhotoCarousel({ images }) {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const n = images.length;
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % n), 4000);
    return () => clearInterval(t);
  }, [paused, n]);
  const go = (d) => setI((p) => (p + d + n) % n);
  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      style={{ position: 'relative', alignSelf: 'stretch', minHeight: 480, borderRadius: dz('cardRadius', 0), overflow: 'hidden', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', background: '#0E2322' }}>
      {images.map((src, idx) => (
        <div key={src} style={{
          position: 'absolute', inset: 0, background: `url(${src}) center/cover no-repeat`,
          opacity: idx === i ? 1 : 0, transition: 'opacity var(--dur-slow) var(--ease-soft)',
        }} />
      ))}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 62%, rgba(7,17,15,0.55))' }} />
      <button onClick={() => go(-1)} aria-label="Назад" style={navBtn('left')}><Icon icon="ChevronLeft" size={22} /></button>
      <button onClick={() => go(1)} aria-label="Вперед" style={navBtn('right')}><Icon icon="ChevronRight" size={22} /></button>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 16, display: 'flex', justifyContent: 'center', gap: 8 }}>
        {images.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} aria-label={`Слайд ${idx + 1}`} style={{
            width: idx === i ? 26 : 9, height: 9, borderRadius: 0, border: 'none', cursor: 'pointer',
            background: idx === i ? 'var(--sand-400)' : 'rgba(255,255,255,0.55)', transition: 'all var(--dur-base) var(--ease-out)',
          }} />
        ))}
      </div>
    </div>
  );
}

function navBtn(side) {
  return {
    position: 'absolute', top: '50%', [side]: 12, transform: 'translateY(-50%)',
    width: 44, height: 44, borderRadius: 0, cursor: 'pointer',
    background: 'rgba(11,24,23,0.5)', border: '1px solid rgba(255,255,255,0.28)', color: '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)',
  };
}

function Plots({ onOpen }) {
  return (
    <SectionShell id="plots" bg="var(--surface-sunken)">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 'var(--sp-7)' }}>
        <DSx.SectionHeading eyebrow={cms('schemes.eyebrow', 'Генплан містечка')} title={cms('schemes.title', 'Схема ділянок')}
          lead={cms('schemes.lead', 'Актуальна схема котеджного містечка.')} />
        <a href="assets/havan-genplan-2.jpg" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
          <DSx.Button variant="secondary" size="md" iconRight={<Icon icon="Maximize2" size={16} />}>
            Відкрити на весь екран
          </DSx.Button>
        </a>
      </div>
      <div className="schemes-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-5)', alignItems: 'stretch' }}>
        {[
          [cms('schemes.items.0.src', 'assets/havan-satellite-2.jpg'), 'Розташування ділянок КМ Гавань на супутниковій карті', cms('schemes.items.0.cap', 'Розташування на карті')],
          [cms('schemes.items.1.src', 'assets/havan-genplan-2.jpg'), 'Детальна схема ділянок КМ Гавань', cms('schemes.items.1.cap', 'Детальна схема ділянок')],
        ].map(([src, alt, cap]) => (
          <SchemeImage key={src} src={src} alt={alt} cap={cap} />
        ))}
      </div>
      <FileDownloads />
    </SectionShell>
  );
}

function FileDownloads() {
  const files = (cmsList('files', []) || []).filter((f) => f && f.name && (f.data || f.path));
  if (!files.length) return null;
  return (
    <div style={{ marginTop: 'var(--sp-6)', display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-3)' }}>
      {files.map((f, i) => (
        <a key={i} href={f.data || f.path} target="_blank" rel="noopener" download={f.data ? f.name : undefined}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none',
            fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-body)',
            background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', padding: '10px 16px' }}>
          <Icon icon="Download" size={16} /> {f.name}
        </a>
      ))}
    </div>
  );
}

function SchemeImage({ src, alt, cap }) {
  const [zoom, setZoom] = React.useState(false);
  const [pos, setPos] = React.useState({ x: 50, y: 50 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', borderRadius: dz('cardRadius', 0), overflow: 'hidden', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', background: '#fff' }}>
      <a href={src} target="_blank" rel="noopener" title="Відкрити у повному розмірі"
        onMouseEnter={() => setZoom(true)} onMouseLeave={() => setZoom(false)} onMouseMove={onMove}
        style={{ display: 'block', overflow: 'hidden', cursor: 'zoom-in', flex: 1, minHeight: 0 }}>
        <img src={src} alt={alt} style={{
          display: 'block', width: '100%', height: '100%', objectFit: 'cover',
          transform: zoom ? `scale(${dz('schemeZoom', 4.5)})` : 'scale(1)',
          transformOrigin: `${pos.x}% ${pos.y}%`,
          transition: zoom ? 'transform 80ms linear' : 'transform var(--dur-base) var(--ease-out)',
        }} />
      </a>
      <span style={{ display: 'block', padding: '12px 16px', fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--sand-300)', background: `rgba(26,36,34,${Math.max(0.15, dz('captionShade', 58)/100)})` }}>{cap}</span>
    </div>
  );
}

function Infrastructure() {
  const itemsDefault = [
    ['Cable', 'Готові комунікації', 'Електрика, газ та оптоволокно до ділянки.'],
    ['Route', 'Асфальтовані вулиці', 'Зручний під’їзд у будь-яку погоду.'],
    ['ShieldCheck', 'В’їзд по перепустках', 'Закрита територія лише для мешканців і гостей.'],
    ['Lightbulb', 'Освітлення вулиць', 'Затишне вечірнє освітлення всіх вулиць.'],
    ['Video', 'Відеонагляд', 'Цілодобове відеоспостереження по всій території містечка.'],
    ['Sparkles', 'Обслуговування території', 'Чищення доріг від снігу та регулярний вивіз сміття.'],
  ];
  const saved = cms('infrastructure.items', null);
  const items = Array.isArray(saved) && saved.length
    ? saved.map((it) => [it.icon || 'Check', it.title || '', it.text || ''])
    : itemsDefault;
  return (
    <SectionShell id="infra" bg="var(--surface-inverse)">
      <div className="infra-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'var(--sp-9)', alignItems: 'center' }}>
        <div>
          <DSx.SectionHeading tone="light" eyebrow={cms('infrastructure.eyebrow', 'Інфраструктура та сервіс')} title={cms('infrastructure.title', 'Містечко, яке про вас піклується')}
            lead={cms('infrastructure.lead', 'Власна служба експлуатації цілий рік підтримує комфорт і безпеку на території.')} />
          <div style={{ display: 'flex', gap: 36, marginTop: 'var(--sp-7)' }}>
            <DSx.Stat value="100" suffix="%" label="ділянок з комунікаціями" tone="sand" />
            <DSx.Stat value="365" label="днів обслуговування на рік" tone="sand" />
          </div>
        </div>
        <div className="infra-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-5)' }}>
          {items.map(([icon, title, text]) => (
            <div key={title} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--r-lg)', padding: 'var(--sp-5)' }}>
              <span style={{ display: 'inline-flex', width: 44, height: 44, borderRadius: 'var(--r-md)', background: 'rgba(194,154,87,0.16)', color: 'var(--sand-300)', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <Icon icon={icon} size={20} />
              </span>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1rem', color: 'var(--cream-50)' }}>{title}</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-on-dark-mut)', marginTop: 6, lineHeight: 1.5 }}>{text}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

const GALLERY_DEFAULT = [
  ['assets/photos/g-01.jpg', 'Панорама річки та ділянок'],
  ['assets/photos/g-02.jpg', 'Котеджі на березі водойми'],
  ['assets/photos/g-03.jpg', 'Сучасна забудова біля води'],
  ['assets/photos/g-04.jpg', 'Ділянки вздовж каналу'],
  ['assets/photos/g-06.jpg', 'Панорама котеджного містечка'],
  ['assets/photos/g-07.jpg', 'Береги каналу з висоти'],
];
const GALLERY = (() => {
  const p = cmsList('gallery.photos', null);
  if (!p) return GALLERY_DEFAULT;
  return p.map((x, i) => {
    if (typeof x === 'string') return [x, (GALLERY_DEFAULT[i] && GALLERY_DEFAULT[i][1]) || ''];
    return [(x && x.src) || '', (x && x.cap) || ''];
  });
})();

function NewQuarterGallery() {
  const raw = cmsList('newQuarter.photos', null) || [
    'assets/photos/nq-1.jpg',
    'assets/photos/nq-2.jpg',
    'assets/photos/nq-3.jpg',
    'assets/photos/nq-4.jpg',
    'assets/photos/nq-5.jpg',
    'assets/photos/nq-6.jpg',
    'assets/photos/nq-7.jpg',
    'assets/photos/nq-8.jpg',
    'assets/photos/nq-9.jpg',
  ];
  const imgs = raw.map((x) => (typeof x === 'string' ? x : (x && x.src) || ''));
  const caps = raw.map((x) => (typeof x === 'string' ? '' : (x && x.cap) || ''));
  const [i, setI] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const realN = cms('newQuarter.realCount', 3);
  const capOf = (idx) => (caps[idx] || (idx < realN ? 'Реальні фото нового кварталу' : 'Візуалізація нового кварталу'));
  const prev = () => setI((p) => (p - 1 + imgs.length) % imgs.length);
  const next = () => setI((p) => (p + 1) % imgs.length);
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, imgs.length]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
      <div onClick={() => setOpen(true)} style={{
        position: 'relative', height: dz('nqHeight', 460), borderRadius: dz('cardRadius', 0), overflow: 'hidden',
        border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', cursor: 'zoom-in',
      }}>
        {imgs.map((src, idx) => (
          <div key={src} style={{
            position: 'absolute', inset: 0, background: `url(${src}) center/cover no-repeat`,
            opacity: idx === i ? 1 : 0, transition: 'opacity var(--dur-slow) var(--ease-soft)',
          }} />
        ))}
        <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(7,17,15,0.28) 0%, transparent 32%, transparent 62%, rgba(7,17,15,0.55))', pointerEvents: 'none' }} />
        {capOf(i) && (
          <span style={{ position: 'absolute', top: 'var(--sp-5)', left: 'var(--sp-5)', background: 'rgba(7,17,15,0.58)', backdropFilter: 'blur(2px)', padding: '8px 14px', borderRadius: 'var(--r-sm)', color: 'var(--sand-300)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.9375rem', letterSpacing: '0.04em' }}>
            {capOf(i)}
          </span>
        )}
        <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Назад" style={{ ...navBtn('left'), left: 12 }}><Icon icon="ChevronLeft" size={22} /></button>
        <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Вперед" style={{ ...navBtn('right'), right: 12 }}><Icon icon="ChevronRight" size={22} /></button>
      </div>
      <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
        {imgs.map((src, idx) => (
          <button key={src} onClick={() => setI(idx)} aria-label={`Фото ${idx + 1}`} style={{
            border: idx === i ? '2px solid var(--accent)' : '2px solid transparent', padding: 0, cursor: 'pointer',
            width: dz('nqThumbW', 92), height: Math.round(dz('nqThumbW', 92) * 0.63), flex: 'none', borderRadius: 'var(--r-md)', overflow: 'hidden',
            background: `url(${src}) center/cover no-repeat`, opacity: idx === i ? 1 : 0.62,
            transition: 'opacity var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
          }} onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; }} onMouseLeave={(e) => { if (idx !== i) e.currentTarget.style.opacity = 0.62; }} />
        ))}
      </div>
      {open && (
        <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 110, background: 'rgba(12,59,62,0.78)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--sp-6)' }}>
          <div style={{ position: 'absolute', top: 24, right: 24 }}>
            <DSx.IconButton variant="outline" icon={<Icon icon="X" size={20} />} ariaLabel="Закрити" onClick={() => setOpen(false)} />
          </div>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Назад"
            style={{ position: 'absolute', left: 24, background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', width: 52, height: 52, borderRadius: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon icon="ChevronLeft" size={24} />
          </button>
          <figure onClick={(e) => e.stopPropagation()} style={{ margin: 0, maxWidth: '88vw', maxHeight: '84vh' }}>
            <img src={imgs[i]} alt={capOf(i)} style={{ maxWidth: '88vw', maxHeight: '76vh', display: 'block', boxShadow: 'var(--shadow-xl)' }} />
            <figcaption style={{ color: 'var(--cream-50)', textAlign: 'center', marginTop: 14, fontFamily: 'var(--font-sans)', fontSize: '0.9375rem' }}>
              {capOf(i)} · {i + 1} / {imgs.length}
            </figcaption>
          </figure>
          <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Вперед"
            style={{ position: 'absolute', right: 24, background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', width: 52, height: 52, borderRadius: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon icon="ChevronRight" size={24} />
          </button>
        </div>
      )}
    </div>
  );
}

function NewQuarter() {
  return (
    <SectionShell id="new-quarter">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-7)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.8125rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-accent)', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ width: 26, height: 1.5, background: 'currentColor', opacity: 0.6 }} />{cms('newQuarter.eyebrow', 'Новий квартал')}
          </span>
          <h2 className="nq-title" style={{ fontSize: 'clamp(1.4rem, 2.9vw, 2.4rem)', margin: 0, whiteSpace: 'nowrap' }}>{cms('newQuarter.title', 'Ми відкрили новий квартал на продаж')}</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 720 }}>{cms('newQuarter.lead', 'Ділянки з власним виходом на затоку Десни. Перша лінія води, простір і приватність — нова черга вже доступна для бронювання.')}</p>
        </div>
        <NewQuarterGallery />
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a href="#plots" onClick={(e) => { e.preventDefault(); const el = document.getElementById('plots'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60, behavior: 'smooth' }); }} style={{ textDecoration: 'none' }}>
            <DSx.Button variant="accent" size="lg" iconRight={<Icon icon="ArrowRight" size={18} />}
              style={{ transition: 'box-shadow var(--dur-base) var(--ease-out)' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'inset 0 72px 0 var(--accent-strong)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = ''; }}>{cms('newQuarter.cta', 'Дізнатися більше')}</DSx.Button>
          </a>
        </div>
      </div>
    </SectionShell>
  );
}

function Gallery() {
  const [i, setI] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  return (
    <SectionShell id="gallery">
      <DSx.SectionHeading eyebrow={cms('gallery.eyebrow', 'Галерея')} title={cms('gallery.title', 'Погляньте на містечко з висоти')}
        lead={cms('gallery.lead', 'Реальні аерофото Гавані — річка, ділянки та благоустрій території.')}
        style={{ marginBottom: 'var(--sp-7)' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
        <div onClick={() => setOpen(true)} style={{ position: 'relative', height: dz('galleryHeight', 460), borderRadius: dz('cardRadius', 0), overflow: 'hidden', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', cursor: 'zoom-in' }}>
          {GALLERY.map(([src, alt], idx) => (
            <div key={src} style={{
              position: 'absolute', inset: 0, background: `url(${src}) center/cover no-repeat`,
              opacity: idx === i ? 1 : 0, transition: 'opacity var(--dur-slow) var(--ease-soft)',
            }} />
          ))}
          <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 62%, rgba(7,17,15,0.55))', pointerEvents: 'none' }} />
          {GALLERY[i][1] && (
            <span style={{ position: 'absolute', left: 20, bottom: 16, color: 'var(--cream-50)', fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', fontWeight: 600 }}>{GALLERY[i][1]}</span>
          )}
          <button onClick={(e) => { e.stopPropagation(); setI((p) => (p - 1 + GALLERY.length) % GALLERY.length); }} aria-label="Назад" style={{ ...navBtn('left'), left: 12 }}><Icon icon="ChevronLeft" size={22} /></button>
          <button onClick={(e) => { e.stopPropagation(); setI((p) => (p + 1) % GALLERY.length); }} aria-label="Вперед" style={{ ...navBtn('right'), right: 12 }}><Icon icon="ChevronRight" size={22} /></button>
        </div>
        <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
          {GALLERY.map(([src], idx) => (
            <button key={src} onClick={() => setI(idx)} aria-label={`Фото ${idx + 1}`} style={{
              border: idx === i ? '2px solid var(--accent)' : '2px solid transparent', padding: 0, cursor: 'pointer',
              width: dz('galleryThumbW', 104), height: Math.round(dz('galleryThumbW', 104) * 0.63), flex: 'none', borderRadius: 'var(--r-md)', overflow: 'hidden',
              background: `url(${src}) center/cover no-repeat`, opacity: idx === i ? 1 : 0.62,
              transition: 'opacity var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
            }} onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; }} onMouseLeave={(e) => { if (idx !== i) e.currentTarget.style.opacity = 0.62; }} />
          ))}
        </div>
      </div>
      {open && (
        <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 110, background: 'rgba(12,59,62,0.78)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--sp-6)' }}>
          <div style={{ position: 'absolute', top: 24, right: 24 }}>
            <DSx.IconButton variant="outline" icon={<Icon icon="X" size={20} />} ariaLabel="Закрити" onClick={() => setOpen(false)} />
          </div>
          <button onClick={(e) => { e.stopPropagation(); setI((o) => (o + GALLERY.length - 1) % GALLERY.length); }}
            style={{ position: 'absolute', left: 24, background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', width: 52, height: 52, borderRadius: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon icon="ChevronLeft" size={24} />
          </button>
          <figure onClick={(e) => e.stopPropagation()} style={{ margin: 0, maxWidth: '88vw', maxHeight: '84vh' }}>
            <img src={GALLERY[i][0]} alt={GALLERY[i][1]} style={{ maxWidth: '88vw', maxHeight: '78vh', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-xl)', display: 'block' }} />
            <figcaption style={{ color: 'var(--cream-50)', textAlign: 'center', marginTop: 14, fontFamily: 'var(--font-sans)', fontSize: '0.9375rem' }}>{GALLERY[i][1]}</figcaption>
          </figure>
          <button onClick={(e) => { e.stopPropagation(); setI((o) => (o + 1) % GALLERY.length); }}
            style={{ position: 'absolute', right: 24, background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', width: 52, height: 52, borderRadius: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon icon="ChevronRight" size={24} />
          </button>
        </div>
      )}
    </SectionShell>
  );
}

function Messengers() {
  const phone = '380954556671';
  const apps = [
    { name: 'WhatsApp', href: cms('contacts.whatsapp', 'https://wa.me/380954556671'), bg: '#25D366',
      path: 'M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02zM12.04 20.13a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14 0-.31-.02-.47-.02-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z' },
    { name: 'Telegram', href: cms('contacts.telegram', 'tg://resolve?domain=@best_4_vepr'), bg: '#229ED9',
      path: 'M21.94 4.5 18.6 20.2c-.25 1.11-.92 1.39-1.86.86l-5.14-3.79-2.48 2.39c-.27.27-.5.5-1.03.5l.37-5.23 9.52-8.6c.41-.37-.09-.57-.64-.2L5.04 12.9l-5.07-1.58c-1.1-.34-1.12-1.1.23-1.63L20.5 2.93c.92-.34 1.72.2 1.44 1.57z' },
    { name: 'Viber', href: cms('contacts.viber', 'viber://chat?number=%2B380954556671'), bg: '#7360F2',
      path: 'M12.04 2C9.5 2 6.3 2.62 4.6 4.2 3.34 5.38 2.7 7.2 2.63 9.46c-.07 2.26-.16 6.5 3.93 7.65v1.76c0 .64.34.74.6.5l1.35-1.36c2.8.23 5.78-.34 6.12-.45 1.13-.37 1.77-1.55 2-2.66.22-1.14.36-3.27.06-4.94C16.43 4.83 13.94 2.02 12.04 2zm.13 1.43c1.6.02 3.66 2.32 3.93 5.05.25 1.4.13 3.27-.05 4.24-.18.95-.65 1.6-1.34 1.83-.3.1-3.02.62-5.5.4 0 0-1.84 2.22-2.42 2.8-.18.18-.38.16-.38-.2 0-.24.01-3 .01-3-3.46-.96-3.26-4.57-3.2-6.46.05-1.88.57-3.36 1.6-4.32 1.42-1.3 4.2-1.84 6.34-1.84zm.24 1.85a.3.3 0 0 0-.04.6c1.95.15 3.42 1.67 3.5 3.74a.3.3 0 0 0 .6-.02c-.1-2.37-1.8-4.16-4.04-4.32zm-2.86.92a.85.85 0 0 0-.5.1l-.03.02c-.36.2-.68.47-.93.8-.2.26-.3.51-.33.76-.01.14 0 .29.04.43l.02.01c.13.36.3.7.5 1.04.27.5.6.99.95 1.43.5.65 1.06 1.24 1.68 1.77.46.4.95.74 1.48 1.04.3.16.6.3.92.4.02 0 .03.02.05.02.1.04.2.06.3.06.45 0 .92-.34 1.2-.62.18-.18.3-.4.36-.65.06-.32-.1-.6-.36-.77-.3-.2-.62-.39-.93-.56-.32-.18-.6-.1-.83.13l-.46.58c-.1.12-.26.16-.4.1-1.02-.42-1.78-1.18-2.2-2.2-.06-.14-.02-.3.1-.4l.58-.46c.23-.23.3-.5.13-.83-.16-.3-.36-.6-.55-.9-.16-.24-.4-.4-.7-.43zm3.1.5a.3.3 0 0 0-.07.6c.9.2 1.32.63 1.5 1.5a.3.3 0 0 0 .59-.13c-.23-1.1-.86-1.74-1.96-1.97a.3.3 0 0 0-.06 0z' },
    { name: 'Instagram', href: cms('contacts.instagram', 'https://www.instagram.com/friends.town.mr/'), bg: 'radial-gradient(circle at 30% 110%, #FED576 8%, #F47133 30%, #BC3081 60%, #4F5BD5 100%)',
      path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.51.01-4.75.07-1.15.05-1.77.24-2.18.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.41-.35 1.03-.4 2.18-.06 1.24-.07 1.6-.07 4.75s.01 3.51.07 4.75c.05 1.15.24 1.77.4 2.18.22.55.47.94.88 1.35.41.41.8.66 1.35.88.41.16 1.03.35 2.18.4 1.24.06 1.6.07 4.75.07s3.51-.01 4.75-.07c1.15-.05 1.77-.24 2.18-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.41.35-1.03.4-2.18.06-1.24.07-1.6.07-4.75s-.01-3.51-.07-4.75c-.05-1.15-.24-1.77-.4-2.18a3.63 3.63 0 0 0-.88-1.35 3.63 3.63 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.18-.4-1.24-.06-1.6-.07-4.75-.07zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6zm0 8.74a3.44 3.44 0 1 0 0-6.88 3.44 3.44 0 0 0 0 6.88zm6.74-8.94a1.24 1.24 0 1 1-2.48 0 1.24 1.24 0 0 1 2.48 0z' },
    { name: 'TikTok', href: cms('contacts.tiktok', 'https://www.tiktok.com/@friends.town.mr'), bg: '#010101',
      path: 'M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.2v12.86a2.58 2.58 0 0 1-2.58 2.5 2.58 2.58 0 0 1-2.58-2.58 2.58 2.58 0 0 1 3.4-2.45V9.9a5.8 5.8 0 0 0-.82-.06 5.78 5.78 0 1 0 5.78 5.78V8.99a7.45 7.45 0 0 0 4.36 1.4V7.18a4.28 4.28 0 0 1-3.3-1.36z' },
  ];
  return (
    <div style={{ display: 'flex', gap: 12, marginTop: 'var(--sp-2)' }}>
      {apps.map((a) => (
        <a key={a.name} href={a.href} target="_blank" rel="noopener" aria-label={a.name} title={a.name}
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: 'var(--r-md)', background: a.bg, color: '#fff', boxShadow: 'var(--shadow-sm)', transition: 'transform var(--dur-fast) var(--ease-out)' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d={a.path} /></svg>
        </a>
      ))}
    </div>
  );
}

function SalesOfficeGallery() {
  const imgs = cmsList('contacts.officePhotos', null) || ['assets/photos/sales-office.jpg', 'assets/photos/sales-office-2.jpg'];
  const [i, setI] = React.useState(0);
  return (
    <div style={{ position: 'relative', borderRadius: dz('cardRadius', 0), border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', overflow: 'hidden', minHeight: dz('officeHeight', 420) }}>
      {imgs.map((src, idx) => (
        <div key={src} style={{
          position: 'absolute', inset: 0, background: `url(${src}) center/cover no-repeat`,
          opacity: idx === i ? 1 : 0, transition: 'opacity var(--dur-slow) var(--ease-soft)',
        }} />
      ))}
      <button onClick={() => setI((p) => (p - 1 + imgs.length) % imgs.length)} aria-label="Назад" style={{ ...navBtn('left'), left: 12 }}><Icon icon="ChevronLeft" size={22} /></button>
      <button onClick={() => setI((p) => (p + 1) % imgs.length)} aria-label="Вперед" style={{ ...navBtn('right'), right: 12 }}><Icon icon="ChevronRight" size={22} /></button>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 16, display: 'flex', justifyContent: 'center', gap: 8 }}>
        {imgs.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} aria-label={`Фото ${idx + 1}`} style={{
            width: idx === i ? 26 : 9, height: 9, border: 'none', cursor: 'pointer',
            background: idx === i ? 'var(--sand-400)' : 'rgba(255,255,255,0.6)', transition: 'all var(--dur-base) var(--ease-out)',
          }} />
        ))}
      </div>
    </div>
  );
}

function Contact({ onSubmit, submitted }) {
  return (
    <SectionShell id="contact">
      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-9)', alignItems: 'center' }}>
        <div>
          <DSx.SectionHeading eyebrow={cms('contacts.eyebrow', 'Контакти')} title={cms('contacts.title', 'Відділ продажу')} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 'var(--sp-6)' }}>
            {[['Phone', cms('contacts.phone', '+38 095 455 66 71'), 'tel:+' + cms('contacts.phoneRaw', '380954556671')], ['Clock', cms('contacts.hours', 'Щодня з 9:00 до 20:00'), null]].map(([icon, text, href]) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-body)' }}>
                <span style={{ display: 'inline-flex', width: 42, height: 42, borderRadius: 'var(--r-md)', background: 'var(--teal-50)', color: 'var(--teal-700)', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon icon={icon} size={18} />
                </span>
                {href
                  ? <a href={href} style={{ fontWeight: 600, color: 'var(--text-body)' }}>{text}</a>
                  : <span style={{ fontWeight: 600 }}>{text}</span>}
              </div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingLeft: 54 }}>
              {[['Google', cms('contacts.googleRoute', 'https://goo.gl/maps/Y7xNNyrsHFgYdYFZA')], ['Waze', cms('contacts.wazeRoute', 'https://waze.com/ul/hu8vxz0t11')]].map(([label, href]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'var(--text-body)' }}>
                  <span style={{ fontWeight: 600 }}>{label}:</span>
                  <a href={href} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: 'var(--text-link)', fontWeight: 600 }}>
                    маршрут <Icon icon="ArrowRight" size={15} />
                  </a>
                </div>
              ))}
            </div>
            <Messengers />
          </div>
        </div>
        <SalesOfficeGallery />
      </div>
      <div style={{ position: 'relative', marginTop: 'var(--sp-7)', background: 'var(--surface-card)', borderRadius: dz('cardRadius', 0), border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', overflow: 'hidden', minHeight: dz('officeHeight', 420) }}>
        <iframe
          title="Котеджне містечко Гавань на карті"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12859.587854575731!2d30.532166124803577!3d50.58422514208461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d5745bce44c9%3A0xdf4178fad2421a1b!2z0JzQtdC20YDQtdGH0YzQtSwg0J7RgtC00LXQuyDQv9GA0L7QtNCw0LY!5e0!3m2!1suk!2sua!4v1699795128493!5m2!1suk!2sua"
          style={{ display: 'block', width: '100%', height: '100%', minHeight: 420, border: 0 }}
          loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe>
        <a href="https://maps.app.goo.gl/2aum38nH9zyq3h6r5" target="_blank" rel="noopener"
          style={{ position: 'absolute', left: 16, bottom: 16, textDecoration: 'none' }}>
          <DSx.Button variant="primary" size="md" iconRight={<Icon icon="ExternalLink" size={16} />}>
            Відкрити в Google Maps
          </DSx.Button>
        </a>
      </div>
    </SectionShell>
  );
}

function ContactForm({ onSubmit }) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [area, setArea] = React.useState('від 8 соток');
  const TELEGRAM = 'tg://resolve?domain=@best_4_vepr';
  const submit = (e) => {
    e.preventDefault();
    const msg = `Нова заявка з сайту «Гавань»%0A%0AІм'я: ${name || '—'}%0AТелефон: ${phone || '—'}%0AЦікавить площа: ${area}`;
    // Copy a ready-to-send message to clipboard (DM pre-fill isn't possible via tg://)
    try {
      const plain = decodeURIComponent(msg.replace(/%0A/g, '\n'));
      if (navigator.clipboard) navigator.clipboard.writeText(plain);
    } catch (err) { /* noop */ }
    window.open(TELEGRAM, '_blank');
    onSubmit();
  };
  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <DSx.Input label="Ваше ім'я" placeholder="Олександр" icon={<Icon icon="User" size={16} />}
        value={name} onChange={(e) => setName(e.target.value)} />
      <DSx.Input label="Телефон" placeholder="+380 __ ___ __ __" icon={<Icon icon="Phone" size={16} />}
        value={phone} onChange={(e) => setPhone(e.target.value)} />
      <DSx.Select label="Цікавить площа" options={['від 8 соток', 'від 12 соток', 'від 15 соток', 'понад 20 соток']}
        value={area} onChange={(e) => setArea(e.target.value)} />
      <DSx.Checkbox label="Згоден на обробку персональних даних" defaultChecked />
      <DSx.Button type="submit" variant="primary" size="lg" fullWidth iconRight={<Icon icon="Send" size={18} />}>
        Надіслати у Telegram
      </DSx.Button>
    </form>
  );
}

function PlotModal({ plot, onClose, onRequest }) {
  if (!plot) return null;
  const waterBg = 'linear-gradient(160deg, #4E979C 0%, #2C7A80 45%, #14565A 100%)';
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(12,59,62,0.55)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: 'var(--surface-card)', borderRadius: dz('cardRadius', 0), overflow: 'hidden', maxWidth: 760, width: '100%', boxShadow: 'var(--shadow-xl)', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ background: waterBg, minHeight: 360, position: 'relative', display: 'flex', alignItems: 'flex-end', padding: 22 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <DSx.Badge tone={plot.status === 'free' ? 'success' : plot.status === 'reserved' ? 'warn' : 'neutral'} styleType="solid">
              {plot.status === 'free' ? 'Вільна' : plot.status === 'reserved' ? 'Заброньована' : 'Продана'}
            </DSx.Badge>
            <DSx.Badge tone="sand" styleType="solid">{plot.line}</DSx.Badge>
          </div>
        </div>
        <div style={{ padding: 'var(--sp-7)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <h3 style={{ fontSize: '1.75rem' }}>{plot.title}</h3>
            <DSx.IconButton variant="ghost" icon={<Icon icon="X" size={18} />} ariaLabel="Закрити" onClick={onClose} />
          </div>
          <p style={{ color: 'var(--text-muted)', marginTop: 6 }}>Площа {plot.area} · {plot.line} води</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {plot.features.map((f) => (
              <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-body)' }}>
                <Icon icon="Check" size={16} style={{ color: 'var(--teal-600)' }} />{f}
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '16px 0', borderTop: '1px solid var(--border-subtle)', marginBottom: 18 }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-faint)' }}>Вартість</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.625rem', color: 'var(--text-strong)' }}>{plot.price}</span>
          </div>
          <DSx.Button variant="accent" size="lg" fullWidth onClick={onRequest} disabled={plot.status === 'sold'}>
            {plot.status === 'sold' ? 'Ділянку продано' : 'Забронювати перегляд'}
          </DSx.Button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Amenities, Plots, NewQuarter, Infrastructure, Gallery, Contact, PlotModal, PLOTS });
