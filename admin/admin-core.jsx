/* Гавань — адмін-панель · дані за замовчуванням + сховище + поля */

const DSA = window.DesignSystem_0f1a06;
const LS_KEY = 'havan_site_content_v1';

function AIcon({ icon, size = 18, stroke = 2 }) {
  let d = window.lucide && lucide.icons[icon];
  if (!d) return null;
  if (d[0] === 'svg' && Array.isArray(d[2])) d = d[2];
  return React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' },
    d.map((c, i) => React.createElement(c[0], { ...c[1], key: i })));
}

const P = '../assets/photos/';
const DEFAULTS = {
  hero: {
    eyebrow: 'Котеджне містечко Гавань',
    title: 'Ваш власний берег',
    titleAccent: 'Десни',
    subtitle: 'Сучасне котеджне містечко на березі річки Десна',
    cta1: 'Обрати ділянку',
    cta2: 'Містечко з висоти',
    stats: [
      { value: 'На воді', label: 'ділянки першої лінії' },
      { value: 'Власний', label: 'пляж · набережна · спуск човнів' },
      { value: '24/7', label: 'охорона та відеонагляд' },
    ],
    photo: P + 'hero-desna.jpg',
  },
  amenities: {
    eyebrow: 'Чому Гавань',
    title: 'Все для життя біля води',
    lead: 'Ми створили містечко, де природа, приватність і комфорт поєднані на березі річки.',
    items: [
      { title: 'Дім біля води', text: 'Приватний берег на кожній ділянці першої лінії.', photo: P + 'amenity-1.jpg' },
      { title: 'Свій човен на ділянці', text: 'Паркуйте човен біля свого подвір’я.', photo: P + 'amenity-2.jpg' },
      { title: 'Власний пляж', text: 'Доглянутий піщаний пляж лише для мешканців містечка.', photo: P + 'amenity-3.jpg' },
      { title: 'Дитячий майданчик', text: 'Безпечний простір для ігор та відпочинку дітей.', photo: P + 'amenity-4.jpg' },
      { title: 'Футбольне поле', text: 'Власне поле для гри та активного дозвілля мешканців.', photo: P + 'amenity-5.jpg' },
      { title: 'Волейбольне поле', text: 'Майданчик для волейболу просто неба біля води.', photo: P + 'amenity-6.jpg' },
    ],
  },
  newQuarter: {
    eyebrow: 'Новий квартал',
    title: 'Ми відкрили новий квартал на продаж',
    lead: 'Ділянки з власним виходом на затоку Десни. Перша лінія води, простір і приватність — нова черга вже доступна для бронювання.',
    cta: 'Дізнатися більше',
    realCount: 3,
    photos: [
      { src: P + 'nq-1.jpg', cap: 'Реальні фото нового кварталу' },
      { src: P + 'nq-2.jpg', cap: 'Реальні фото нового кварталу' },
      { src: P + 'nq-3.jpg', cap: 'Реальні фото нового кварталу' },
      { src: P + 'nq-4.jpg', cap: 'Візуалізація нового кварталу' },
      { src: P + 'nq-5.jpg', cap: 'Візуалізація нового кварталу' },
      { src: P + 'nq-6.jpg', cap: 'Візуалізація нового кварталу' },
      { src: P + 'nq-7.jpg', cap: 'Візуалізація нового кварталу' },
      { src: P + 'nq-8.jpg', cap: 'Візуалізація нового кварталу' },
      { src: P + 'nq-9.jpg', cap: 'Візуалізація нового кварталу' },
    ],
  },
  schemes: {
    eyebrow: 'Генплан містечка',
    title: 'Схема ділянок',
    lead: 'Актуальна схема котеджного містечка.',
    items: [
      { cap: 'Розташування на карті', src: '../website/assets/havan-satellite-2.jpg' },
      { cap: 'Детальна схема ділянок', src: '../website/assets/havan-genplan-2.jpg' },
    ],
  },
  infrastructure: {
    eyebrow: 'Інфраструктура та сервіс',
    title: 'Містечко, яке про вас піклується',
    lead: 'Власна служба експлуатації цілий рік підтримує комфорт і безпеку на території.',
    items: [
      { icon: 'Cable', title: 'Готові комунікації', text: 'Електрика, газ та оптоволокно до ділянки.' },
      { icon: 'Route', title: 'Асфальтовані вулиці', text: 'Зручний під’їзд у будь-яку погоду.' },
      { icon: 'ShieldCheck', title: 'В’їзд по перепустках', text: 'Закрита територія лише для мешканців і гостей.' },
      { icon: 'Lightbulb', title: 'Освітлення вулиць', text: 'Затишне вечірнє освітлення всіх вулиць.' },
      { icon: 'Wrench', title: 'Обслуговування території', text: 'Чищення доріг від снігу та регулярний вивіз сміття.' },
      { icon: 'Video', title: 'Відеонагляд', text: 'Цілодобове відеоспостереження по всій території.' },
    ],
  },
  gallery: {
    eyebrow: 'Галерея',
    title: 'Погляньте на містечко з висоти',
    lead: 'Реальні аерофото Гавані — річка, ділянки та благоустрій території.',
    photos: [
      { src: P + 'g-01.jpg', cap: 'Панорама річки та ділянок' },
      { src: P + 'g-02.jpg', cap: 'Котеджі на березі водойми' },
      { src: P + 'g-03.jpg', cap: 'Сучасна забудова біля води' },
      { src: P + 'g-04.jpg', cap: 'Вид на канал і набережну' },
      { src: P + 'g-06.jpg', cap: 'Ділянки вздовж каналу' },
      { src: P + 'g-07.jpg', cap: 'Містечко з висоти' },
    ],
  },
  contacts: {
    eyebrow: 'Контакти',
    title: 'Відділ продажу',
    phone: '+38 095 455 66 71',
    phoneRaw: '380954556671',
    hours: 'Щодня з 9:00 до 20:00',
    address: 'Київська обл., Вишгородський р-н, с. Новосілки, 14 км від Києва',
    googleRoute: 'https://goo.gl/maps/Y7xNNyrsHFgYdYFZA',
    wazeRoute: 'https://waze.com/ul/hu8vxz0t11',
    whatsapp: 'https://wa.me/380954556671',
    telegram: 'tg://resolve?domain=@best_4_vepr',
    viber: 'viber://chat?number=%2B380954556671',
    instagram: 'https://www.instagram.com/friends.town.mr/',
    tiktok: 'https://www.tiktok.com/@friends.town.mr',
    officePhotos: [P + 'sales-office.jpg', P + 'sales-office-2.jpg'],
  },
  design: {
    heroOverlay: 62,
    heroVignette: 55,
    heroSideShade: 78,
    heroHeight: 88,
    heroFocus: 32,
    amenityCardHeight: 340,
    amenityPerView: 3,
    nqAspect: '21/9',
    nqThumbW: 92,
    galleryHeight: 460,
    galleryThumbW: 104,
    schemeHeight: 520,
    schemeZoom: 4.5,
    officeHeight: 420,
    sectionSpacing: 100,
    contentWidth: 1200,
    cardRadius: 0,
    captionShade: 58,
  },
  files: [
    { name: 'Генплан (супутник)', path: '../website/assets/havan-satellite-2.jpg' },
    { name: 'Детальна схема ділянок', path: '../website/assets/havan-genplan-2.jpg' },
    { name: 'Схема PDF', path: '../website/assets/havan-scheme.pdf' },
  ],
};

function loadContent() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return JSON.parse(JSON.stringify(DEFAULTS));
    const merged = { ...JSON.parse(JSON.stringify(DEFAULTS)), ...JSON.parse(raw) };
    delete merged._savedAt; delete merged._publishedAt;
    return merged;
  } catch (e) { return JSON.parse(JSON.stringify(DEFAULTS)); }
}

/* ─── поля ─── */
const lbl = { fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--ink-700)', marginBottom: 6, display: 'block' };
const inp = { width: '100%', fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'var(--ink-900)', background: '#fff', border: '1px solid var(--ink-200)', borderRadius: 8, padding: '10px 12px', outline: 'none' };

function SliderField({ label, value, onChange, min = 0, max = 100, step = 1, unit = '', hint }) {
  const v = value == null ? min : value;
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{ ...lbl, display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span>{label}</span>
        <span style={{ color: 'var(--teal-700)', fontWeight: 700 }}>{v}{unit}</span>
      </label>
      <input type="range" min={min} max={max} step={step} value={v}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{ width: '100%', accentColor: 'var(--teal-600)', cursor: 'pointer' }} />
      {hint && <span style={{ fontSize: '0.75rem', color: 'var(--ink-500)', marginTop: 4, display: 'block' }}>{hint}</span>}
    </div>
  );
}

function SelectField({ label, value, onChange, options = [], hint }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={lbl}>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} style={{ ...inp, cursor: 'pointer' }}>
        {options.map((o) => {
          const val = typeof o === 'string' ? o : o.value;
          const text = typeof o === 'string' ? o : o.label;
          return <option key={val} value={val}>{text}</option>;
        })}
      </select>
      {hint && <span style={{ fontSize: '0.75rem', color: 'var(--ink-500)', marginTop: 4, display: 'block' }}>{hint}</span>}
    </div>
  );
}

function TextField({ label, value, onChange, multiline, rows = 3, hint }) {
  const common = {
    value: value || '', onChange: (e) => onChange(e.target.value), style: inp,
    onFocus: (e) => { e.target.style.borderColor = 'var(--teal-600)'; e.target.style.boxShadow = '0 0 0 3px rgba(44,122,128,0.16)'; },
    onBlur: (e) => { e.target.style.borderColor = 'var(--ink-200)'; e.target.style.boxShadow = 'none'; },
  };
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={lbl}>{label}</label>
      {multiline
        ? <textarea rows={rows} {...common} style={{ ...inp, resize: 'vertical', lineHeight: 1.5 }}></textarea>
        : <input type="text" {...common} />}
      {hint && <span style={{ fontSize: '0.75rem', color: 'var(--ink-500)', marginTop: 4, display: 'block' }}>{hint}</span>}
    </div>
  );
}

function ImageField({ label, src, onChange, onRemove, height = 128 }) {
  const [over, setOver] = React.useState(false);
  const [bad, setBad] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    setBad(false);
    if (!src || src.startsWith('data:')) return;
    const probe = new Image();
    probe.onerror = () => setBad(true);
    probe.src = src;
  }, [src]);
  const shown = src && !bad ? src : null;
  const read = (file) => {
    if (!file || !file.type.startsWith('image')) return;
    const fr = new FileReader();
    fr.onload = () => onChange(fr.result);
    fr.readAsDataURL(file);
  };
  return (
    <div style={{ marginBottom: 16 }}>
      {label && <label style={lbl}>{label}</label>}
      <div
        onDragOver={(e) => { e.preventDefault(); setOver(true); }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => { e.preventDefault(); setOver(false); read(e.dataTransfer.files[0]); }}
        onClick={() => ref.current && ref.current.click()}
        style={{
          position: 'relative', height, borderRadius: 10, cursor: 'pointer', overflow: 'hidden',
          border: over ? '2px dashed var(--teal-600)' : '1px solid var(--ink-200)',
          background: shown ? `url(${shown}) center/cover no-repeat` : 'var(--cream-100)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
        {!shown && (
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: bad ? 'var(--red-600)' : 'var(--ink-500)', display: 'flex', alignItems: 'center', gap: 8, textAlign: 'center', padding: '0 12px' }}>
            <AIcon icon={bad ? 'ImageOff' : 'ImagePlus'} size={18} />
            {bad ? 'Файл не знайдено — перетягніть фото або натисніть' : 'Перетягніть фото або натисніть'}
          </span>
        )}
        {shown && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,59,62,0)', transition: 'background 160ms', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(12,59,62,0.55)'; e.currentTarget.querySelectorAll('span').forEach((s) => s.style.opacity = 1); }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(12,59,62,0)'; e.currentTarget.querySelectorAll('span').forEach((s) => s.style.opacity = 0); }}>
            <span style={{ opacity: 0, transition: 'opacity 160ms', color: '#fff', fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}><AIcon icon="Upload" size={16} /> Замінити</span>
            {onRemove && (
              <span onClick={(e) => { e.stopPropagation(); onRemove(); }}
                style={{ opacity: 0, transition: 'opacity 160ms', color: '#fff', background: 'rgba(178,58,46,0.9)', padding: '6px 10px', borderRadius: 6, fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', fontWeight: 600 }}>Видалити</span>
            )}
          </div>
        )}
        <input ref={ref} type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => read(e.target.files[0])} />
      </div>
    </div>
  );
}

function PhotoList({ label, photos, onChange, note, captions = false, captionPlaceholder = 'Підпис на фото' }) {
  // Фото може бути рядком (лише шлях) або об'єктом { src, cap }.
  const srcOf = (p) => (typeof p === 'string' ? p : (p && p.src) || '');
  const capOf = (p) => (typeof p === 'string' ? '' : (p && p.cap) || '');
  const setSrc = (i, v) => {
    const n = [...photos];
    n[i] = captions ? { src: v, cap: capOf(photos[i]) } : v;
    onChange(n);
  };
  const setCap = (i, v) => { const n = [...photos]; n[i] = { src: srcOf(photos[i]), cap: v }; onChange(n); };
  const del = (i) => onChange(photos.filter((_, x) => x !== i));
  const move = (i, d) => {
    const j = i + d; if (j < 0 || j >= photos.length) return;
    const n = [...photos]; [n[i], n[j]] = [n[j], n[i]]; onChange(n);
  };
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={lbl}>{label}</label>
      {note && <p style={{ fontSize: '0.75rem', color: 'var(--ink-500)', margin: '0 0 10px' }}>{note}</p>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
        {photos.map((p, i) => (
          <div key={i} style={{ border: '1px solid var(--ink-100)', borderRadius: 10, padding: 8, background: '#fff' }}>
            <ImageField src={srcOf(p)} onChange={(v) => setSrc(i, v)} height={104} />
            {captions && (
              <input type="text" value={capOf(p)} placeholder={captionPlaceholder}
                onChange={(e) => setCap(i, e.target.value)}
                style={{ ...inp, fontSize: '0.8125rem', padding: '8px 10px', marginTop: -8, marginBottom: 8 }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--teal-600)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--ink-200)'; }} />
            )}
            <div style={{ display: 'flex', gap: 6, marginTop: captions ? 0 : -8 }}>
              <MiniBtn onClick={() => move(i, -1)} icon="ArrowLeft" title="Лівіше" />
              <MiniBtn onClick={() => move(i, 1)} icon="ArrowRight" title="Правіше" />
              <MiniBtn onClick={() => del(i)} icon="Trash2" title="Видалити" danger />
              <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--ink-400)', alignSelf: 'center' }}>#{i + 1}</span>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => onChange([...photos, captions ? { src: '', cap: '' } : ''])} style={{ marginTop: 12, ...ghostBtn }}>
        <AIcon icon="Plus" size={16} /> Додати фото
      </button>
    </div>
  );
}

const ghostBtn = {
  display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer',
  fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--teal-700)',
  background: 'var(--teal-50)', border: '1px solid var(--teal-100)', borderRadius: 8, padding: '9px 14px',
};

function MiniBtn({ onClick, icon, title, danger }) {
  return (
    <button onClick={onClick} title={title} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30,
      borderRadius: 6, cursor: 'pointer', border: '1px solid var(--ink-200)', background: '#fff',
      color: danger ? 'var(--red-600)' : 'var(--ink-600)',
    }}><AIcon icon={icon} size={14} /></button>
  );
}

Object.assign(window, { AIcon, DEFAULTS, LS_KEY, loadContent, TextField, ImageField, PhotoList, MiniBtn, ghostBtn, lbl, inp, SliderField, SelectField });
