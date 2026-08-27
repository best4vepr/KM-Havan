/* Гавань — адмін-панель · редактори секцій */

function Panel({ title, desc, children }) {
  return (
    <div style={{ background: '#fff', border: '1px solid var(--ink-100)', borderRadius: 14, padding: 24, marginBottom: 20 }}>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--ink-900)', margin: 0 }}>{title}</h3>
      {desc && <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--ink-500)', margin: '6px 0 18px' }}>{desc}</p>}
      {!desc && <div style={{ height: 18 }} />}
      {children}
    </div>
  );
}

function Row({ children, cols = 2 }) {
  return <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 16 }}>{children}</div>;
}

/* ── Головна ── */
function HeroEditor({ c, up }) {
  const h = c.hero;
  const setStat = (i, k, v) => { const s = [...h.stats]; s[i] = { ...s[i], [k]: v }; up('hero', { ...h, stats: s }); };
  return (
    <React.Fragment>
      <Panel title="Головний екран" desc="Заголовок, підзаголовок і фонове фото.">
        <TextField label="Надзаголовок" value={h.eyebrow} onChange={(v) => up('hero', { ...h, eyebrow: v })} />
        <Row>
          <TextField label="Заголовок" value={h.title} onChange={(v) => up('hero', { ...h, title: v })} />
          <TextField label="Виділене слово (курсив, золотисте)" value={h.titleAccent} onChange={(v) => up('hero', { ...h, titleAccent: v })} />
        </Row>
        <TextField label="Підзаголовок" value={h.subtitle} multiline rows={2} onChange={(v) => up('hero', { ...h, subtitle: v })} />
        <Row>
          <TextField label="Кнопка 1" value={h.cta1} onChange={(v) => up('hero', { ...h, cta1: v })} />
          <TextField label="Кнопка 2" value={h.cta2} onChange={(v) => up('hero', { ...h, cta2: v })} />
        </Row>
        <ImageField label="Фонове фото" src={h.photo} height={200} onChange={(v) => up('hero', { ...h, photo: v })} />
      </Panel>
      <Panel title="Показники на головній" desc="Три короткі акценти під підзаголовком.">
        {h.stats.map((s, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr auto', gap: 12, alignItems: 'start' }}>
            <TextField label={`Значення ${i + 1}`} value={s.value} onChange={(v) => setStat(i, 'value', v)} />
            <TextField label={`Опис ${i + 1}`} value={s.label} onChange={(v) => setStat(i, 'label', v)} />
            <div style={{ display: 'flex', gap: 6, paddingTop: 26 }}>
              <MiniBtn onClick={() => { const st = [...h.stats]; if (i > 0) { [st[i - 1], st[i]] = [st[i], st[i - 1]]; up('hero', { ...h, stats: st }); } }} icon="ArrowUp" title="Вище" />
              <MiniBtn onClick={() => { const st = [...h.stats]; if (i < st.length - 1) { [st[i + 1], st[i]] = [st[i], st[i + 1]]; up('hero', { ...h, stats: st }); } }} icon="ArrowDown" title="Нижче" />
              <MiniBtn onClick={() => up('hero', { ...h, stats: h.stats.filter((_, x) => x !== i) })} icon="Trash2" title="Видалити" danger />
            </div>
          </div>
        ))}
        <button onClick={() => up('hero', { ...h, stats: [...h.stats, { value: '', label: '' }] })} style={ghostBtn}>
          <AIcon icon="Plus" size={16} /> Додати показник
        </button>
      </Panel>
    </React.Fragment>
  );
}

/* ── Вигляд ── */
function DesignEditor({ c, up }) {
  const d = c.design || {};
  const s = (k) => (v) => up('design', { ...d, [k]: v });
  return (
    <React.Fragment>
      <Panel title="Головне фото — затемнення та розмір" desc="Керуйте читабельністю тексту на головному екрані.">
        <SliderField label="Затемнення країв (віньєтка)" value={d.heroVignette} onChange={s('heroVignette')} min={0} max={95} unit="%" />
        <SliderField label="Затемнення зліва (під текст)" value={d.heroSideShade} onChange={s('heroSideShade')} min={0} max={95} unit="%" />
        <SliderField label="Загальне затемнення фото" value={d.heroOverlay} onChange={s('heroOverlay')} min={0} max={95} unit="%" />
        <SliderField label="Висота головного екрана" value={d.heroHeight} onChange={s('heroHeight')} min={50} max={100} unit="% екрана" />
        <SliderField label="Фокус фото (вертикально)" value={d.heroFocus} onChange={s('heroFocus')} min={0} max={100} unit="%" hint="0% — верх фото, 100% — низ" />
      </Panel>
      <Panel title="Розміри блоків і фото">
        <Row>
          <SliderField label="Висота карток переваг" value={d.amenityCardHeight} onChange={s('amenityCardHeight')} min={220} max={520} step={10} unit="px" />
          <SliderField label="Карток у видимій області" value={d.amenityPerView} onChange={s('amenityPerView')} min={1} max={4} unit=" шт" />
        </Row>
        <Row>
          <SliderField label="Висота галереї «з висоти»" value={d.galleryHeight} onChange={s('galleryHeight')} min={280} max={760} step={10} unit="px" />
          <SliderField label="Мініатюри галереї" value={d.galleryThumbW} onChange={s('galleryThumbW')} min={60} max={200} step={4} unit="px" />
        </Row>
        <Row>
          <SliderField label="Висота схем ділянок" value={d.schemeHeight} onChange={s('schemeHeight')} min={300} max={900} step={10} unit="px" />
          <SliderField label="Зум схеми при наведенні" value={d.schemeZoom} onChange={s('schemeZoom')} min={1} max={8} step={0.5} unit="×" />
        </Row>
        <Row>
          <SelectField label="Формат галереї кварталу" value={d.nqAspect} onChange={s('nqAspect')}
            options={[{ value: '21/9', label: 'Широкий 21:9' }, { value: '16/9', label: 'Стандарт 16:9' }, { value: '3/2', label: 'Фото 3:2' }, { value: '4/3', label: 'Класика 4:3' }]} />
          <SliderField label="Мініатюри кварталу" value={d.nqThumbW} onChange={s('nqThumbW')} min={60} max={200} step={4} unit="px" />
        </Row>
        <SliderField label="Висота фото відділу продажу" value={d.officeHeight} onChange={s('officeHeight')} min={280} max={700} step={10} unit="px" />
      </Panel>
      <Panel title="Загальний макет">
        <Row>
          <SliderField label="Відстань між секціями" value={d.sectionSpacing} onChange={s('sectionSpacing')} min={40} max={180} step={4} unit="px" />
          <SliderField label="Ширина контенту" value={d.contentWidth} onChange={s('contentWidth')} min={960} max={1600} step={20} unit="px" />
        </Row>
        <Row>
          <SliderField label="Закруглення кутів" value={d.cardRadius} onChange={s('cardRadius')} min={0} max={28} unit="px" hint="0 — прямокутні форми" />
          <SliderField label="Затемнення плашок на фото" value={d.captionShade} onChange={s('captionShade')} min={0} max={95} unit="%" />
        </Row>
      </Panel>
    </React.Fragment>
  );
}

/* ── Переваги ── */
function AmenitiesEditor({ c, up }) {
  const a = c.amenities;
  const setItem = (i, k, v) => { const it = [...a.items]; it[i] = { ...it[i], [k]: v }; up('amenities', { ...a, items: it }); };
  const del = (i) => up('amenities', { ...a, items: a.items.filter((_, x) => x !== i) });
  const add = () => up('amenities', { ...a, items: [...a.items, { title: 'Нова перевага', text: '', photo: '' }] });
  return (
    <React.Fragment>
      <Panel title="Заголовок секції">
        <TextField label="Надзаголовок" value={a.eyebrow} onChange={(v) => up('amenities', { ...a, eyebrow: v })} />
        <TextField label="Заголовок" value={a.title} onChange={(v) => up('amenities', { ...a, title: v })} />
        <TextField label="Опис" value={a.lead} multiline rows={2} onChange={(v) => up('amenities', { ...a, lead: v })} />
      </Panel>
      {a.items.map((it, i) => (
        <Panel key={i} title={`Картка ${i + 1}: ${it.title || '—'}`}>
          <Row>
            <div>
              <TextField label="Назва" value={it.title} onChange={(v) => setItem(i, 'title', v)} />
              <TextField label="Опис" value={it.text} multiline rows={3} onChange={(v) => setItem(i, 'text', v)} />
              <MiniBtn onClick={() => del(i)} icon="Trash2" title="Видалити картку" danger />
            </div>
            <ImageField label="Фото картки" src={it.photo} height={168} onChange={(v) => setItem(i, 'photo', v)} />
          </Row>
        </Panel>
      ))}
      <button onClick={add} style={ghostBtn}><AIcon icon="Plus" size={16} /> Додати картку</button>
    </React.Fragment>
  );
}

/* ── Новий квартал ── */
function NewQuarterEditor({ c, up }) {
  const n = c.newQuarter;
  return (
    <Panel title="Новий квартал" desc="Текст, кнопка та галерея (перші N фото підписуються як реальні).">
      <TextField label="Надзаголовок" value={n.eyebrow} onChange={(v) => up('newQuarter', { ...n, eyebrow: v })} />
      <TextField label="Заголовок" value={n.title} onChange={(v) => up('newQuarter', { ...n, title: v })} />
      <TextField label="Опис" value={n.lead} multiline rows={3} onChange={(v) => up('newQuarter', { ...n, lead: v })} />
      <TextField label="Кнопка" value={n.cta} onChange={(v) => up('newQuarter', { ...n, cta: v })} />
      <PhotoList label="Галерея кварталу" captions captionPlaceholder="Напр. Реальні фото нового кварталу"
        note="Підпис показується на самому фото та у збільшеному перегляді. Порожній підпис — фото без плашки."
        photos={n.photos} onChange={(p) => up('newQuarter', { ...n, photos: p })} />
    </Panel>
  );
}

/* ── Схеми ── */
function SchemesEditor({ c, up }) {
  const s = c.schemes;
  const setItem = (i, k, v) => { const it = [...s.items]; it[i] = { ...it[i], [k]: v }; up('schemes', { ...s, items: it }); };
  return (
    <React.Fragment>
      <Panel title="Заголовок секції">
        <TextField label="Надзаголовок" value={s.eyebrow} onChange={(v) => up('schemes', { ...s, eyebrow: v })} />
        <TextField label="Заголовок" value={s.title} onChange={(v) => up('schemes', { ...s, title: v })} />
        <TextField label="Опис" value={s.lead} multiline rows={2} onChange={(v) => up('schemes', { ...s, lead: v })} />
      </Panel>
      <Panel title="Схеми ділянок" desc="Схеми показуються в ряд. Підпис — на темній плашці.">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
          {s.items.map((it, i) => (
            <div key={i} style={{ border: '1px solid var(--ink-100)', borderRadius: 10, padding: 12 }}>
              <TextField label={`Підпис ${i + 1}`} value={it.cap} onChange={(v) => setItem(i, 'cap', v)} />
              <ImageField label="Зображення схеми" src={it.src} height={170} onChange={(v) => setItem(i, 'src', v)} />
              <div style={{ display: 'flex', gap: 6 }}>
                <MiniBtn onClick={() => { const it2 = [...s.items]; if (i > 0) { [it2[i - 1], it2[i]] = [it2[i], it2[i - 1]]; up('schemes', { ...s, items: it2 }); } }} icon="ArrowLeft" title="Лівіше" />
                <MiniBtn onClick={() => { const it2 = [...s.items]; if (i < it2.length - 1) { [it2[i + 1], it2[i]] = [it2[i], it2[i + 1]]; up('schemes', { ...s, items: it2 }); } }} icon="ArrowRight" title="Правіше" />
                <MiniBtn onClick={() => up('schemes', { ...s, items: s.items.filter((_, x) => x !== i) })} icon="Trash2" title="Видалити" danger />
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => up('schemes', { ...s, items: [...s.items, { cap: 'Нова схема', src: '' }] })} style={{ ...ghostBtn, marginTop: 14 }}>
          <AIcon icon="Plus" size={16} /> Додати схему
        </button>
      </Panel>
    </React.Fragment>
  );
}

/* ── Інфраструктура ── */
function InfraEditor({ c, up }) {
  const f = c.infrastructure;
  const setItem = (i, k, v) => { const it = [...f.items]; it[i] = { ...it[i], [k]: v }; up('infrastructure', { ...f, items: it }); };
  const move = (i, d) => { const j = i + d; if (j < 0 || j >= f.items.length) return; const it = [...f.items]; [it[i], it[j]] = [it[j], it[i]]; up('infrastructure', { ...f, items: it }); };
  const del = (i) => up('infrastructure', { ...f, items: f.items.filter((_, x) => x !== i) });
  return (
    <React.Fragment>
      <Panel title="Заголовок секції">
        <TextField label="Надзаголовок" value={f.eyebrow} onChange={(v) => up('infrastructure', { ...f, eyebrow: v })} />
        <TextField label="Заголовок" value={f.title} onChange={(v) => up('infrastructure', { ...f, title: v })} />
        <TextField label="Опис" value={f.lead} multiline rows={2} onChange={(v) => up('infrastructure', { ...f, lead: v })} />
      </Panel>
      <Panel title="Блоки інфраструктури" desc="Порядок блоків можна змінювати стрілками.">
        {f.items.map((it, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '150px 1fr 1.2fr auto', gap: 12, alignItems: 'start', paddingBottom: 14, marginBottom: 14, borderBottom: '1px solid var(--ink-100)' }}>
            <TextField label="Іконка (Lucide)" value={it.icon} onChange={(v) => setItem(i, 'icon', v)} />
            <TextField label="Назва" value={it.title} onChange={(v) => setItem(i, 'title', v)} />
            <TextField label="Опис" value={it.text} onChange={(v) => setItem(i, 'text', v)} />
            <div style={{ display: 'flex', gap: 6, paddingTop: 26 }}>
              <MiniBtn onClick={() => move(i, -1)} icon="ArrowUp" title="Вище" />
              <MiniBtn onClick={() => move(i, 1)} icon="ArrowDown" title="Нижче" />
              <MiniBtn onClick={() => del(i)} icon="Trash2" title="Видалити" danger />
            </div>
          </div>
        ))}
        <button onClick={() => up('infrastructure', { ...f, items: [...f.items, { icon: 'Check', title: 'Новий блок', text: '' }] })} style={ghostBtn}>
          <AIcon icon="Plus" size={16} /> Додати блок
        </button>
      </Panel>
    </React.Fragment>
  );
}

/* ── Галерея ── */
function GalleryEditor({ c, up }) {
  const g = c.gallery;
  return (
    <Panel title="Галерея «Містечко з висоти»">
      <TextField label="Надзаголовок" value={g.eyebrow} onChange={(v) => up('gallery', { ...g, eyebrow: v })} />
      <TextField label="Заголовок" value={g.title} onChange={(v) => up('gallery', { ...g, title: v })} />
      <TextField label="Опис" value={g.lead} multiline rows={2} onChange={(v) => up('gallery', { ...g, lead: v })} />
      <PhotoList label="Фото галереї" captions captionPlaceholder="Напр. Панорама річки та ділянок"
        note="Підпис показується на фото та у збільшеному перегляді."
        photos={g.photos} onChange={(p) => up('gallery', { ...g, photos: p })} />
    </Panel>
  );
}

/* ── Контакти ── */
function ContactsEditor({ c, up }) {
  const k = c.contacts;
  const s = (key) => (v) => up('contacts', { ...k, [key]: v });
  return (
    <React.Fragment>
      <Panel title="Контакти" desc="Телефон, графік і адреса відділу продажу.">
        <Row>
          <TextField label="Надзаголовок" value={k.eyebrow} onChange={s('eyebrow')} />
          <TextField label="Заголовок" value={k.title} onChange={s('title')} />
        </Row>
        <Row>
          <TextField label="Телефон (як показувати)" value={k.phone} onChange={s('phone')} />
          <TextField label="Телефон для дзвінка" value={k.phoneRaw} hint="Лише цифри, напр. 380954556671" onChange={s('phoneRaw')} />
        </Row>
        <TextField label="Графік роботи" value={k.hours} onChange={s('hours')} />
        <TextField label="Адреса" value={k.address} multiline rows={2} onChange={s('address')} />
      </Panel>
      <Panel title="Маршрути та месенджери">
        <Row>
          <TextField label="Google маршрут" value={k.googleRoute} onChange={s('googleRoute')} />
          <TextField label="Waze маршрут" value={k.wazeRoute} onChange={s('wazeRoute')} />
        </Row>
        <Row>
          <TextField label="WhatsApp" value={k.whatsapp} onChange={s('whatsapp')} />
          <TextField label="Telegram" value={k.telegram} onChange={s('telegram')} />
        </Row>
        <Row>
          <TextField label="Viber" value={k.viber} onChange={s('viber')} />
          <TextField label="Instagram" value={k.instagram} onChange={s('instagram')} />
        </Row>
        <TextField label="TikTok" value={k.tiktok} onChange={s('tiktok')} />
      </Panel>
      <Panel title="Фото відділу продажу">
        <PhotoList label="Фото (перемикаються на сайті)" photos={k.officePhotos} onChange={(p) => up('contacts', { ...k, officePhotos: p })} />
      </Panel>
    </React.Fragment>
  );
}

/* ── Файли ── */
function FilesEditor({ c, up }) {
  const files = c.files || [];
  const ref = React.useRef(null);
  const setItem = (i, key, v) => { const n = [...files]; n[i] = { ...n[i], [key]: v }; up('files', n); };
  const del = (i) => up('files', files.filter((_, x) => x !== i));
  const pick = (fl) => {
    const f = fl && fl[0]; if (!f) return;
    const fr = new FileReader();
    fr.onload = () => up('files', [...files, { name: f.name, path: f.name, data: fr.result, size: f.size }]);
    fr.readAsDataURL(f);
  };
  return (
    <Panel title="Файли сайту" desc="Схеми, PDF та інші документи для завантаження.">
      {files.map((f, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 12, alignItems: 'start', paddingBottom: 12, marginBottom: 12, borderBottom: '1px solid var(--ink-100)' }}>
          <TextField label="Назва" value={f.name} onChange={(v) => setItem(i, 'name', v)} />
          <TextField label="Шлях / файл" value={f.path} onChange={(v) => setItem(i, 'path', v)} hint={f.size ? `${Math.round(f.size / 1024)} КБ (завантажено)` : 'у папці сайту'} />
          <div style={{ display: 'flex', gap: 6, paddingTop: 26 }}>
            {f.data && <a href={f.data} download={f.name}><MiniBtn icon="Download" title="Завантажити" /></a>}
            <MiniBtn onClick={() => del(i)} icon="Trash2" title="Видалити" danger />
          </div>
        </div>
      ))}
      <button onClick={() => ref.current && ref.current.click()} style={ghostBtn}><AIcon icon="Upload" size={16} /> Завантажити файл</button>
      <input ref={ref} type="file" style={{ display: 'none' }} onChange={(e) => pick(e.target.files)} />
    </Panel>
  );
}

Object.assign(window, { Panel, Row, HeroEditor, AmenitiesEditor, NewQuarterEditor, SchemesEditor, InfraEditor, GalleryEditor, ContactsEditor, FilesEditor, DesignEditor });
