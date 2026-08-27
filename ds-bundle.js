/* @ds-bundle: {"format":4,"namespace":"DesignSystem_0f1a06","components":[{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"FeatureItem","sourcePath":"components/content/FeatureItem.jsx"},{"name":"PlotCard","sourcePath":"components/content/PlotCard.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/content/Card.jsx":"4af500543ff9","components/content/FeatureItem.jsx":"21ce6f94c148","components/content/PlotCard.jsx":"e284b46852d2","components/content/SectionHeading.jsx":"f7ee6f4c116b","components/content/Stat.jsx":"ee2c9a4e1561","components/core/Badge.jsx":"b6225659b933","components/core/Button.jsx":"b2982b417055","components/core/IconButton.jsx":"0e3201e0b18c","components/forms/Checkbox.jsx":"a646058b37ad","components/forms/Input.jsx":"dbf4d391c409","components/forms/Select.jsx":"b7dcffe16f7f","layout.jsx":"81245a28a481","site/layout.jsx":"da2ea23902ec","site/sections.jsx":"1268a1b71e9c","ui_kits/admin/admin-core.jsx":"adc2369e0bf7","ui_kits/admin/admin-sections.jsx":"cb0c2f900084","ui_kits/website/content.js":"d2620b0f060e","ui_kits/website/image-slot.js":"9309434cb09c","ui_kits/website/layout.jsx":"ebc7a29b3b96","ui_kits/website/layout.standalone.jsx":"8f3f60599518","ui_kits/website/sections.jsx":"b89086e5100d","ui_kits/website/sections.standalone.jsx":"cfc8e460ad46"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_0f1a06 = window.DesignSystem_0f1a06 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Card.jsx
try { (() => {
/**
 * Generic surface card. Optional media header (image url or node),
 * soft shadow, hover lift. Use as the base container for content.
 */
function Card({
  children,
  media = null,
  padding = 'var(--sp-5)',
  hover = false,
  style = {},
  onClick
}) {
  const renderMedia = () => {
    if (!media) return null;
    if (typeof media === 'string') {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          height: 200,
          backgroundImage: `url(${media})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }
      });
    }
    return media;
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--r-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    },
    onMouseEnter: hover ? e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    } : undefined,
    onMouseLeave: hover ? e => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    } : undefined
  }, renderMedia(), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureItem.jsx
try { (() => {
/** Icon + title + description feature row/tile. Pass a Lucide icon node. */
function FeatureItem({
  icon,
  title,
  children,
  layout = 'row',
  style = {}
}) {
  const isRow = layout === 'row';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isRow ? 'row' : 'column',
      gap: isRow ? '1rem' : '0.85rem',
      alignItems: isRow ? 'flex-start' : 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 48,
      height: 48,
      borderRadius: 'var(--r-md)',
      background: 'var(--teal-50)',
      color: 'var(--teal-700)',
      border: '1px solid var(--teal-100)'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.3rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '1.0625rem',
      color: 'var(--text-strong)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.9375rem',
      color: 'var(--text-muted)',
      lineHeight: 1.55
    }
  }, children)));
}
Object.assign(__ds_scope, { FeatureItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureItem.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
/** Section heading block: eyebrow + display title + optional lead. align left|center. */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  tone = 'dark',
  style = {}
}) {
  const onDark = tone === 'light';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.85rem',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      maxWidth: 640,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '0.8125rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: onDark ? 'var(--sand-400)' : 'var(--text-accent)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 1.5,
      background: 'currentColor',
      opacity: 0.6
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(2rem, 3.5vw, 3rem)',
      margin: 0,
      color: onDark ? 'var(--cream-50)' : 'var(--text-strong)'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
      color: onDark ? 'var(--text-on-dark-mut)' : 'var(--text-muted)'
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
/** Big-number statistic. Value in Playfair, label below. align: left | center. */
function Stat({
  value,
  label,
  suffix = '',
  tone = 'ink',
  align = 'left',
  style = {}
}) {
  const colors = {
    ink: 'var(--text-strong)',
    teal: 'var(--teal-700)',
    sand: 'var(--sand-700)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.35rem',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      lineHeight: 1,
      fontSize: 'clamp(2.25rem, 4vw, 3rem)',
      color: colors[tone] || colors.ink,
      letterSpacing: '-0.02em'
    }
  }, value, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.55em',
      color: 'var(--text-accent)',
      marginLeft: '0.1em'
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.875rem',
      color: 'var(--text-muted)',
      letterSpacing: '0.02em',
      maxWidth: 220
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/** Status / category badge. Tones map to the semantic palette; styles: soft | solid | outline. */
function Badge({
  children,
  tone = 'teal',
  styleType = 'soft',
  icon = null,
  style = {}
}) {
  const tones = {
    teal: {
      soft: ['var(--teal-50)', 'var(--teal-700)'],
      solid: ['var(--teal-700)', 'var(--cream-50)'],
      outline: ['transparent', 'var(--teal-700)']
    },
    sand: {
      soft: ['var(--sand-100)', 'var(--sand-800)'],
      solid: ['var(--sand-500)', 'var(--ink-900)'],
      outline: ['transparent', 'var(--sand-800)']
    },
    neutral: {
      soft: ['var(--cream-100)', 'var(--ink-700)'],
      solid: ['var(--ink-800)', 'var(--cream-50)'],
      outline: ['transparent', 'var(--ink-700)']
    },
    success: {
      soft: ['var(--green-100)', 'var(--green-600)'],
      solid: ['var(--green-600)', '#fff'],
      outline: ['transparent', 'var(--green-600)']
    },
    warn: {
      soft: ['var(--amber-100)', 'var(--amber-600)'],
      solid: ['var(--amber-600)', '#fff'],
      outline: ['transparent', 'var(--amber-600)']
    },
    danger: {
      soft: ['var(--red-100)', 'var(--red-600)'],
      solid: ['var(--red-600)', '#fff'],
      outline: ['transparent', 'var(--red-600)']
    }
  };
  const [bg, fg] = (tones[tone] || tones.teal)[styleType] || tones.teal.soft;
  const border = styleType === 'outline' ? `1px solid ${fg}` : '1px solid transparent';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.35rem',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '0.75rem',
      letterSpacing: '0.04em',
      lineHeight: 1,
      padding: '0.4rem 0.65rem',
      borderRadius: 'var(--r-pill)',
      background: bg,
      color: fg,
      border,
      whiteSpace: 'nowrap',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/PlotCard.jsx
try { (() => {
/**
 * Plot listing card — the signature Гавань component.
 * Shows media (river-access plot photo), status badge, area, line, price,
 * and a short row of key features.
 */
function PlotCard({
  title = 'Ділянка',
  image = null,
  status = 'free',
  line = '1-а лінія',
  area = '12 соток',
  price = 'за запитом',
  features = [],
  onClick,
  style = {}
}) {
  const statusMap = {
    free: {
      tone: 'success',
      label: 'Вільна'
    },
    reserved: {
      tone: 'warn',
      label: 'Заброньована'
    },
    sold: {
      tone: 'neutral',
      label: 'Продана'
    }
  };
  const st = statusMap[status] || statusMap.free;
  const waterBg = 'linear-gradient(160deg, #4E979C 0%, #2C7A80 45%, #14565A 100%)';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--r-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      cursor: onClick ? 'pointer' : 'default',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 196,
      background: image ? `url(${image}) center/cover` : waterBg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: st.tone,
    styleType: "solid"
  }, st.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      right: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "sand",
    styleType: "solid"
  }, line))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sp-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.85rem',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '1.375rem',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '0.875rem',
      color: 'var(--text-accent)',
      whiteSpace: 'nowrap'
    }
  }, area)), features.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.4rem 0.8rem'
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: '0.8125rem',
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.35rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 999,
      background: 'var(--sand-500)'
    }
  }), f))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: '0.85rem',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.7rem',
      color: 'var(--text-faint)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, "\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      color: 'var(--text-strong)',
      lineHeight: 1.1
    }
  }, price)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.8125rem',
      fontWeight: 600,
      color: 'var(--primary)'
    }
  }, "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435 \u2192"))));
}
Object.assign(__ds_scope, { PlotCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PlotCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Гавань primary button. Variants: primary (teal), accent (brass),
 * secondary (outline), ghost. Sizes: sm | md | lg.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: '0.8125rem',
      padding: '0.5rem 0.95rem',
      gap: '0.4rem',
      height: 36,
      radius: 'var(--r-sm)'
    },
    md: {
      fontSize: '0.9375rem',
      padding: '0.7rem 1.4rem',
      gap: '0.5rem',
      height: 46,
      radius: 'var(--r-md)'
    },
    lg: {
      fontSize: '1.0625rem',
      padding: '0.95rem 1.9rem',
      gap: '0.6rem',
      height: 56,
      radius: 'var(--r-md)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--primary)',
      color: 'var(--primary-contrast)',
      border: '1px solid var(--primary)',
      boxShadow: 'var(--shadow-sm)'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--accent-contrast)',
      border: '1px solid var(--accent)',
      boxShadow: 'var(--shadow-accent)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--primary)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent',
      boxShadow: 'none'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: s.fontSize,
      letterSpacing: '0.01em',
      padding: s.padding,
      minHeight: s.height,
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-soft)',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px) scale(0.99)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = '';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square icon-only button. Variants: solid (teal), accent, soft, ghost, outline. */
function IconButton({
  icon,
  variant = 'soft',
  size = 'md',
  ariaLabel,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 34,
    md: 44,
    lg: 52
  };
  const d = dims[size] || dims.md;
  const variants = {
    solid: {
      background: 'var(--primary)',
      color: 'var(--primary-contrast)',
      border: '1px solid var(--primary)'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--accent-contrast)',
      border: '1px solid var(--accent)'
    },
    soft: {
      background: 'var(--primary-soft)',
      color: 'var(--primary)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.soft;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      borderRadius: 'var(--r-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-soft)',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.93)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = '';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Checkbox with label. Controlled via checked/onChange or uncontrolled. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style = {}
}) {
  const fieldId = id || (label ? `c-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6rem',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.9375rem',
      color: 'var(--text-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: fieldId,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: 22,
      height: 22,
      margin: 0,
      borderRadius: 'var(--r-xs)',
      border: '1.5px solid var(--border-strong)',
      background: 'var(--surface-card)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'inherit',
      transition: 'background var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft)'
    },
    onInput: e => {
      const el = e.currentTarget;
      if (el.checked) {
        el.style.background = 'var(--primary)';
        el.style.borderColor = 'var(--primary)';
        el.style.backgroundImage = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23FBF8F2' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E\")";
        el.style.backgroundRepeat = 'no-repeat';
        el.style.backgroundPosition = 'center';
      } else {
        el.style.background = 'var(--surface-card)';
        el.style.borderColor = 'var(--border-strong)';
        el.style.backgroundImage = 'none';
      }
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text field with label, hint, error and optional leading icon. */
function Input({
  label,
  hint,
  error,
  icon = null,
  id,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? `f-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--red-600)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.8125rem',
      fontWeight: 600,
      color: 'var(--text-body)',
      letterSpacing: '0.01em'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      display: 'inline-flex',
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    style: {
      width: '100%',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.9375rem',
      color: 'var(--text-strong)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--r-md)',
      padding: icon ? '0.75rem 0.95rem 0.75rem 2.5rem' : '0.75rem 0.95rem',
      outline: 'none',
      transition: 'border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--primary)';
      e.target.style.boxShadow = 'var(--ring-focus)';
    },
    onBlur: e => {
      e.target.style.borderColor = borderColor;
      e.target.style.boxShadow = 'none';
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: error ? 'var(--red-600)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Styled native select with label/hint. Options: [{value,label}] or strings. */
function Select({
  label,
  hint,
  options = [],
  id,
  value,
  defaultValue,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? `s-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.8125rem',
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    style: {
      width: '100%',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.9375rem',
      color: 'var(--text-strong)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--r-md)',
      padding: '0.75rem 2.4rem 0.75rem 0.95rem',
      cursor: 'pointer',
      outline: 'none',
      transition: 'border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--primary)';
      e.target.style.boxShadow = 'var(--ring-focus)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--border-default)';
      e.target.style.boxShadow = 'none';
    }
  }, rest), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: '0.7rem'
    }
  }, "\u25BC")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// layout.jsx
try { (() => {
/* Гавань — website UI kit · shared helpers + header/hero/footer.
   Exports to window for index.html to compose. */

const DS = window.DesignSystem_0f1a06;

// Lucide icon helper
function Icon({
  icon,
  size = 20,
  stroke = 2,
  style
}) {
  let d = window.lucide && lucide.icons[icon];
  if (!d) return null;
  if (d[0] === 'svg' && Array.isArray(d[2])) d = d[2];
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style
  }, d.map((c, i) => React.createElement(c[0], {
    ...c[1],
    key: i
  })));
}
const NAV = [['Про містечко', 'about'], ['Схема', 'plots'], ['Інфраструктура', 'infra'], ['Галерея', 'gallery'], ['Контакти', 'contact']];
function SiteHeader({
  onNav,
  solid
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('[data-scroll]') || window;
    const onScroll = () => setScrolled((el.scrollTop || window.scrollY) > 24);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);
  const dark = !solid && !scrolled;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: dark ? 'transparent' : 'rgba(11,24,23,0.82)',
      backdropFilter: dark ? 'none' : 'saturate(180%) blur(12px)',
      borderBottom: dark ? '1px solid transparent' : '1px solid rgba(255,255,255,0.08)',
      transition: 'all var(--dur-base) var(--ease-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('top'),
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-light.svg",
    alt: "\u0413\u0430\u0432\u0430\u043D\u044C",
    style: {
      height: 52
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, NAV.map(([label, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => onNav(id),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.9375rem',
      fontWeight: 500,
      color: 'var(--cream-50)',
      letterSpacing: '0.01em'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+380000000000",
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '0.9375rem',
      color: 'var(--cream-50)',
      whiteSpace: 'nowrap'
    }
  }, "+38095 455 66 71"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "accent",
    size: "sm",
    onClick: () => onNav('contact')
  }, "\u0417\u0430\u043B\u0438\u0448\u0438\u0442\u0438 \u0437\u0430\u044F\u0432\u043A\u0443"))));
}
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero",
    style: {
      position: 'relative',
      marginTop: -76,
      paddingTop: 76,
      color: 'var(--cream-50)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      background: 'url(../../assets/photos/hero-desna.jpg) center 32%/cover no-repeat'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: 'radial-gradient(ellipse 70% 75% at 50% 48%, transparent 28%, rgba(7,17,15,0.55) 70%, rgba(5,13,12,0.92) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: 'linear-gradient(90deg, rgba(5,13,12,0.78) 0%, rgba(5,13,12,0.42) 32%, transparent 58%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: 'clamp(4rem,8vw,7rem) var(--gutter) clamp(5rem,9vw,8rem)',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '0.8125rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--sand-300)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1.5,
      background: 'currentColor',
      opacity: 0.7
    }
  }), "\u041A\u043E\u0442\u0435\u0434\u0436\u043D\u0435 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E \u0413\u0430\u0432\u0430\u043D\u044C"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.75rem, 5.2vw, 4.5rem)',
      color: 'var(--cream-50)',
      margin: '20px 0 0',
      lineHeight: 1.04
    }
  }, "\u0412\u0430\u0448 \u0432\u043B\u0430\u0441\u043D\u0438\u0439 \u0431\u0435\u0440\u0435\u0433 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--sand-300)'
    }
  }, "\u0414\u0435\u0441\u043D\u0438")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.25rem',
      lineHeight: 1.6,
      color: 'var(--text-on-dark-mut)',
      margin: '24px 0 0',
      maxWidth: 520
    }
  }, "\u0421\u0443\u0447\u0430\u0441\u043D\u0435 \u043A\u043E\u0442\u0435\u0434\u0436\u043D\u0435 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E \u043D\u0430 \u0431\u0435\u0440\u0435\u0437\u0456 \u0440\u0456\u0447\u043A\u0438 \u0414\u0435\u0441\u043D\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 36,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      icon: "ArrowRight",
      size: 18
    }),
    onClick: () => onNav('plots')
  }, "\u041E\u0431\u0440\u0430\u0442\u0438 \u0434\u0456\u043B\u044F\u043D\u043A\u0443"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('contact'),
    style: {
      color: 'var(--cream-50)',
      borderColor: 'rgba(255,255,255,0.4)'
    }
  }, "\u0417\u0430\u043C\u043E\u0432\u0438\u0442\u0438 \u0434\u0437\u0432\u0456\u043D\u043E\u043A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: 48
    }
  }, [['На воді', '', 'ділянки першої лінії'], ['Власний', '', 'пляж · набережна · спуск човнів'], ['24/7', '', 'охорона та відеонагляд']].map(([v, s, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2.25rem',
      lineHeight: 1,
      color: 'var(--cream-50)'
    }
  }, v, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1rem',
      color: 'var(--sand-300)',
      marginLeft: 4
    }
  }, s)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.8125rem',
      color: 'var(--text-on-dark-mut)',
      marginTop: 8,
      maxWidth: 150
    }
  }, l)))))));
}
function SiteFooter({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--cream-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: 'var(--sp-9) var(--gutter) var(--sp-6)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-light.svg",
    alt: "\u0413\u0430\u0432\u0430\u043D\u044C",
    style: {
      height: 42
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(251,248,242,0.6)',
      fontSize: '0.9375rem',
      marginTop: 16,
      maxWidth: 320
    }
  }, "\u0421\u0443\u0447\u0430\u0441\u043D\u0435 \u043A\u043E\u0442\u0435\u0434\u0436\u043D\u0435 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E \u043D\u0430 \u043C\u0430\u043B\u044C\u043E\u0432\u043D\u0438\u0447\u043E\u043C\u0443 \u0431\u0435\u0440\u0435\u0437\u0456 \u0414\u0435\u0441\u043D\u0438. \u041F\u0440\u043E\u0434\u0430\u0436 \u0434\u0456\u043B\u044F\u043D\u043E\u043A \u0437 \u0432\u043B\u0430\u0441\u043D\u0438\u043C \u0432\u0438\u0445\u043E\u0434\u043E\u043C \u0434\u043E \u0432\u043E\u0434\u0438.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: '0.8125rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--sand-300)',
      marginBottom: 14
    }
  }, "\u0420\u043E\u0437\u0434\u0456\u043B\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, NAV.map(([label, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => onNav(id),
    style: {
      cursor: 'pointer',
      color: 'rgba(251,248,242,0.78)',
      fontSize: '0.9375rem'
    }
  }, label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: '0.8125rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--sand-300)',
      marginBottom: 14
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      color: 'rgba(251,248,242,0.78)',
      fontSize: '0.9375rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "Phone",
    size: 16
  }), " +380 00 000 00 00"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "Mail",
    size: 16
  }), " hello@havan.ua"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "MapPin",
    size: 16
  }), " \u0427\u0435\u0440\u043D\u0456\u0433\u0456\u0432\u0441\u044C\u043A\u0430 \u043E\u0431\u043B., \u0440. \u0414\u0435\u0441\u043D\u0430")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '20px var(--gutter)',
      display: 'flex',
      justifyContent: 'space-between',
      color: 'rgba(251,248,242,0.45)',
      fontSize: '0.8125rem'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 \u0413\u0430\u0432\u0430\u043D\u044C. \u0412\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u0456."), /*#__PURE__*/React.createElement("span", null, "\u041A\u043E\u0442\u0435\u0434\u0436\u043D\u0435 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E \u043D\u0430 \u0414\u0435\u0441\u043D\u0456"))));
}
Object.assign(window, {
  Icon,
  SiteHeader,
  Hero,
  SiteFooter,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "layout.jsx", error: String((e && e.message) || e) }); }

// site/layout.jsx
try { (() => {
/* Гавань — website UI kit · shared helpers + header/hero/footer.
   Exports to window for index.html to compose. */

const DS = window.DesignSystem_0f1a06;

// Lucide icon helper
function Icon({
  icon,
  size = 20,
  stroke = 2,
  style
}) {
  let d = window.lucide && lucide.icons[icon];
  if (!d) return null;
  if (d[0] === 'svg' && Array.isArray(d[2])) d = d[2];
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style
  }, d.map((c, i) => React.createElement(c[0], {
    ...c[1],
    key: i
  })));
}
const NAV = [['Про містечко', 'about'], ['Схема', 'plots'], ['Інфраструктура', 'infra'], ['Галерея', 'gallery'], ['Контакти', 'contact']];
function SiteHeader({
  onNav,
  solid
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('[data-scroll]') || window;
    const onScroll = () => setScrolled((el.scrollTop || window.scrollY) > 24);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);
  const dark = !solid && !scrolled;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: dark ? 'transparent' : 'rgba(11,24,23,0.82)',
      backdropFilter: dark ? 'none' : 'saturate(180%) blur(12px)',
      borderBottom: dark ? '1px solid transparent' : '1px solid rgba(255,255,255,0.08)',
      transition: 'all var(--dur-base) var(--ease-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 96,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('top'),
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-wordmark-light.svg",
    alt: "\u0413\u0430\u0432\u0430\u043D\u044C",
    style: {
      height: 74
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, NAV.map(([label, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => onNav(id),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.9375rem',
      fontWeight: 500,
      color: 'var(--cream-50)',
      letterSpacing: '0.01em'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+380954556671",
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '0.9375rem',
      color: 'var(--cream-50)',
      whiteSpace: 'nowrap'
    }
  }, "+38 095 455 66 71"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "accent",
    size: "sm",
    onClick: () => onNav('contact')
  }, "\u0417\u0430\u043B\u0438\u0448\u0438\u0442\u0438 \u0437\u0430\u044F\u0432\u043A\u0443"))));
}
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero",
    style: {
      position: 'relative',
      marginTop: -96,
      paddingTop: 96,
      color: 'var(--cream-50)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      background: 'url(assets/photos/hero-desna.jpg) center 32%/cover no-repeat'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: 'radial-gradient(ellipse 70% 75% at 50% 48%, transparent 28%, rgba(7,17,15,0.55) 70%, rgba(5,13,12,0.92) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: 'linear-gradient(90deg, rgba(5,13,12,0.78) 0%, rgba(5,13,12,0.42) 32%, transparent 58%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: 'clamp(4rem,8vw,7rem) var(--gutter) clamp(5rem,9vw,8rem)',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '0.8125rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--sand-300)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1.5,
      background: 'currentColor',
      opacity: 0.7
    }
  }), "\u041A\u043E\u0442\u0435\u0434\u0436\u043D\u0435 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E \u0413\u0430\u0432\u0430\u043D\u044C"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.75rem, 5.2vw, 4.5rem)',
      color: 'var(--cream-50)',
      margin: '20px 0 0',
      lineHeight: 1.04
    }
  }, "\u0412\u0430\u0448 \u0432\u043B\u0430\u0441\u043D\u0438\u0439 \u0431\u0435\u0440\u0435\u0433 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--sand-300)'
    }
  }, "\u0414\u0435\u0441\u043D\u0438")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.25rem',
      lineHeight: 1.6,
      color: 'var(--text-on-dark-mut)',
      margin: '24px 0 0',
      maxWidth: 520
    }
  }, "\u0421\u0443\u0447\u0430\u0441\u043D\u0435 \u043A\u043E\u0442\u0435\u0434\u0436\u043D\u0435 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E \u043D\u0430 \u0431\u0435\u0440\u0435\u0437\u0456 \u0440\u0456\u0447\u043A\u0438 \u0414\u0435\u0441\u043D\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 36,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      icon: "ArrowRight",
      size: 18
    }),
    onClick: () => onNav('plots')
  }, "\u041E\u0431\u0440\u0430\u0442\u0438 \u0434\u0456\u043B\u044F\u043D\u043A\u0443"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('contact'),
    style: {
      color: 'var(--cream-50)',
      borderColor: 'rgba(255,255,255,0.4)'
    }
  }, "\u0417\u0430\u043C\u043E\u0432\u0438\u0442\u0438 \u0434\u0437\u0432\u0456\u043D\u043E\u043A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: 48
    }
  }, [['На воді', '', 'ділянки першої лінії'], ['Власний', '', 'пляж · набережна · спуск човнів'], ['24/7', '', 'охорона та відеонагляд']].map(([v, s, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2.25rem',
      lineHeight: 1,
      color: 'var(--cream-50)'
    }
  }, v, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1rem',
      color: 'var(--sand-300)',
      marginLeft: 4
    }
  }, s)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.8125rem',
      color: 'var(--text-on-dark-mut)',
      marginTop: 8,
      maxWidth: 150
    }
  }, l)))))));
}
function SiteFooter({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--cream-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: 'var(--sp-9) var(--gutter) var(--sp-6)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-wordmark-light.svg",
    alt: "\u0413\u0430\u0432\u0430\u043D\u044C",
    style: {
      height: 64
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(251,248,242,0.6)',
      fontSize: '0.9375rem',
      marginTop: 16,
      maxWidth: 320
    }
  }, "\u0421\u0443\u0447\u0430\u0441\u043D\u0435 \u043A\u043E\u0442\u0435\u0434\u0436\u043D\u0435 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E \u043D\u0430 \u043C\u0430\u043B\u044C\u043E\u0432\u043D\u0438\u0447\u043E\u043C\u0443 \u0431\u0435\u0440\u0435\u0437\u0456 \u0414\u0435\u0441\u043D\u0438. \u041F\u0440\u043E\u0434\u0430\u0436 \u0434\u0456\u043B\u044F\u043D\u043E\u043A \u0437 \u0432\u043B\u0430\u0441\u043D\u0438\u043C \u0432\u0438\u0445\u043E\u0434\u043E\u043C \u0434\u043E \u0432\u043E\u0434\u0438.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: '0.8125rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--sand-300)',
      marginBottom: 14
    }
  }, "\u0420\u043E\u0437\u0434\u0456\u043B\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, NAV.map(([label, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => onNav(id),
    style: {
      cursor: 'pointer',
      color: 'rgba(251,248,242,0.78)',
      fontSize: '0.9375rem'
    }
  }, label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: '0.8125rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--sand-300)',
      marginBottom: 14
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      color: 'rgba(251,248,242,0.78)',
      fontSize: '0.9375rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "Phone",
    size: 16
  }), " +38 095 455 66 71"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "MapPin",
    size: 16
  }), " \u041A\u0438\u0457\u0432\u0441\u044C\u043A\u0430 \u043E\u0431\u043B., \u0412\u0438\u0448\u0433\u043E\u0440\u043E\u0434\u0441\u044C\u043A\u0438\u0439 \u0440-\u043D, \u0441. \u041D\u043E\u0432\u043E\u0441\u0456\u043B\u043A\u0438, 14 \u043A\u043C \u0432\u0456\u0434 \u041A\u0438\u0454\u0432\u0430")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '20px var(--gutter)',
      display: 'flex',
      justifyContent: 'space-between',
      color: 'rgba(251,248,242,0.45)',
      fontSize: '0.8125rem'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 \u0413\u0430\u0432\u0430\u043D\u044C. \u0412\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u0456."), /*#__PURE__*/React.createElement("span", null, "\u041A\u043E\u0442\u0435\u0434\u0436\u043D\u0435 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E \u043D\u0430 \u0414\u0435\u0441\u043D\u0456"))));
}
Object.assign(window, {
  Icon,
  SiteHeader,
  Hero,
  SiteFooter,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/layout.jsx", error: String((e && e.message) || e) }); }

// site/sections.jsx
try { (() => {
/* Гавань — website UI kit · page sections. Exports to window. */

const DSx = window.DesignSystem_0f1a06;
const PLOTS = [{
  id: 14,
  title: 'Ділянка №14',
  status: 'free',
  line: '1-а лінія',
  area: '14 соток',
  price: 'за запитом',
  features: ['Власний берег', 'Газ + електрика', 'Місце для човна']
}, {
  id: 21,
  title: 'Ділянка №21',
  status: 'free',
  line: '1-а лінія',
  area: '12 соток',
  price: 'за запитом',
  features: ['Кутова', 'Оптоволокно', 'Асфальт до межі']
}, {
  id: 8,
  title: 'Ділянка №8',
  status: 'reserved',
  line: '1-а лінія',
  area: '16 соток',
  price: 'за запитом',
  features: ['Широкий берег', 'Газ + електрика', 'Пляж поруч']
}, {
  id: 30,
  title: 'Ділянка №30',
  status: 'free',
  line: '2-а лінія',
  area: '10 соток',
  price: 'за запитом',
  features: ['Тиха вулиця', 'Всі комунікації', 'Поруч пляж']
}, {
  id: 5,
  title: 'Ділянка №5',
  status: 'sold',
  line: '1-а лінія',
  area: '18 соток',
  price: 'продано',
  features: ['Панорама річки', 'Газ + електрика', 'Причал']
}, {
  id: 33,
  title: 'Ділянка №33',
  status: 'free',
  line: '2-а лінія',
  area: '8 соток',
  price: 'за запитом',
  features: ['Компактна', 'Оптоволокно', 'Поруч в’їзд']
}];
const AMENITIES = [['Waves', 'Власний вихід до води', 'Приватний берег на кожній ділянці першої лінії.'], ['Sailboat', 'Свій човен на ділянці', 'Паркуйте човен біля свого подвір’я.'], ['Umbrella', 'Власний пляж', 'Доглянутий піщаний пляж лише для мешканців містечка.'], ['Baby', 'Дитячий майданчик', 'Безпечний простір для ігор та відпочинку дітей.'], ['Goal', 'Футбольне поле', 'Власне поле для гри та активного дозвілля мешканців.'], ['Volleyball', 'Волейбольне поле', 'Майданчик для волейболу просто неба біля води.']];
function SectionShell({
  id,
  bg,
  children,
  pad
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    "data-screen-label": id,
    style: {
      background: bg || 'transparent',
      padding: pad || 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, children));
}
function Amenities() {
  return /*#__PURE__*/React.createElement(SectionShell, {
    id: "about"
  }, /*#__PURE__*/React.createElement(DSx.SectionHeading, {
    eyebrow: "\u0427\u043E\u043C\u0443 \u0413\u0430\u0432\u0430\u043D\u044C",
    title: "\u0412\u0441\u0435 \u0434\u043B\u044F \u0436\u0438\u0442\u0442\u044F \u0431\u0456\u043B\u044F \u0432\u043E\u0434\u0438",
    lead: "\u041C\u0438 \u0441\u0442\u0432\u043E\u0440\u0438\u043B\u0438 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E, \u0434\u0435 \u043F\u0440\u0438\u0440\u043E\u0434\u0430, \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u0456\u0441\u0442\u044C \u0456 \u043A\u043E\u043C\u0444\u043E\u0440\u0442 \u043F\u043E\u0454\u0434\u043D\u0430\u043D\u0456 \u043D\u0430 \u0431\u0435\u0440\u0435\u0437\u0456 \u0440\u0456\u0447\u043A\u0438.",
    style: {
      marginBottom: 'var(--sp-8)'
    }
  }), /*#__PURE__*/React.createElement(AmenitiesCarousel, null));
}
const AMENITY_IMG = ['assets/photos/gallery-1.jpg', 'assets/photos/gallery-6.jpg', 'assets/photos/gallery-2.jpg', 'assets/photos/gallery-3.jpg', 'assets/photos/gallery-5.jpg', 'assets/photos/gallery-1.jpg'];
function AmenitiesCarousel() {
  const perView = 3;
  const n = AMENITIES.length;
  const maxI = Math.max(0, n - perView);
  const [i, setI] = React.useState(0);
  const go = d => setI(p => Math.min(maxI, Math.max(0, p + d)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: `${n / perView * 100}%`,
      transform: `translateX(-${i * (100 / n)}%)`,
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }, AMENITIES.map(([icon, title, text], idx) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      width: `${100 / n}%`,
      padding: '0 calc(var(--sp-5) / 2) var(--sp-2)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--r-xl)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      height: 340,
      background: `url(${AMENITY_IMG[idx % AMENITY_IMG.length]}) center/cover no-repeat`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(7,17,15,0.05) 30%, rgba(7,17,15,0.45) 60%, rgba(5,13,12,0.88) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '1.125rem',
      color: 'var(--cream-50)',
      marginBottom: '0.4rem'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.9375rem',
      color: 'rgba(244,239,230,0.82)',
      lineHeight: 1.5
    }
  }, text))))))), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(-1),
    disabled: i === 0,
    "aria-label": "\u041D\u0430\u0437\u0430\u0434",
    style: {
      ...navBtn('left'),
      left: -8,
      opacity: i === 0 ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronLeft",
    size: 22
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(1),
    disabled: i === maxI,
    "aria-label": "\u0412\u043F\u0435\u0440\u0435\u0434",
    style: {
      ...navBtn('right'),
      right: -8,
      opacity: i === maxI ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronRight",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      marginTop: 'var(--sp-5)'
    }
  }, Array.from({
    length: maxI + 1
  }).map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    onClick: () => setI(idx),
    "aria-label": `Слайд ${idx + 1}`,
    style: {
      width: idx === i ? 26 : 9,
      height: 9,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: idx === i ? 'var(--accent)' : 'var(--border-strong)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }))));
}
function PhotoCarousel({
  images
}) {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const n = images.length;
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI(p => (p + 1) % n), 4000);
    return () => clearInterval(t);
  }, [paused, n]);
  const go = d => setI(p => (p + d + n) % n);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    style: {
      position: 'relative',
      alignSelf: 'stretch',
      minHeight: 480,
      borderRadius: 'var(--r-xl)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)',
      background: '#0E2322'
    }
  }, images.map((src, idx) => /*#__PURE__*/React.createElement("div", {
    key: src,
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${src}) center/cover no-repeat`,
      opacity: idx === i ? 1 : 0,
      transition: 'opacity var(--dur-slow) var(--ease-soft)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, transparent 62%, rgba(7,17,15,0.55))'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(-1),
    "aria-label": "\u041D\u0430\u0437\u0430\u0434",
    style: navBtn('left')
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronLeft",
    size: 22
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(1),
    "aria-label": "\u0412\u043F\u0435\u0440\u0435\u0434",
    style: navBtn('right')
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronRight",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 16,
      display: 'flex',
      justifyContent: 'center',
      gap: 8
    }
  }, images.map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    onClick: () => setI(idx),
    "aria-label": `Слайд ${idx + 1}`,
    style: {
      width: idx === i ? 26 : 9,
      height: 9,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: idx === i ? 'var(--sand-400)' : 'rgba(255,255,255,0.55)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }))));
}
function navBtn(side) {
  return {
    position: 'absolute',
    top: '50%',
    [side]: 12,
    transform: 'translateY(-50%)',
    width: 44,
    height: 44,
    borderRadius: 999,
    cursor: 'pointer',
    background: 'rgba(11,24,23,0.5)',
    border: '1px solid rgba(255,255,255,0.28)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)'
  };
}
function Plots({
  onOpen
}) {
  return /*#__PURE__*/React.createElement(SectionShell, {
    id: "plots",
    bg: "var(--surface-sunken)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement(DSx.SectionHeading, {
    eyebrow: "\u0413\u0435\u043D\u043F\u043B\u0430\u043D \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u0430",
    title: "\u0421\u0445\u0435\u043C\u0430 \u0434\u0456\u043B\u044F\u043D\u043E\u043A",
    lead: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0430 \u0441\u0445\u0435\u043C\u0430 \u043A\u043E\u0442\u0435\u0434\u0436\u043D\u043E\u0433\u043E \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u0430 \u0437 \u0434\u0456\u043B\u044F\u043D\u043A\u0430\u043C\u0438 \u043F\u0435\u0440\u0448\u043E\u0457 \u0442\u0430 \u0434\u0440\u0443\u0433\u043E\u0457 \u043B\u0456\u043D\u0456\u0457 \u0432\u043E\u0434\u0438."
  }), /*#__PURE__*/React.createElement("a", {
    href: "assets/havan-scheme.jpg",
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(DSx.Button, {
    variant: "secondary",
    size: "md",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      icon: "Maximize2",
      size: 16
    })
  }, "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043D\u0430 \u0432\u0435\u0441\u044C \u0435\u043A\u0440\u0430\u043D"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-5)',
      alignItems: 'start'
    }
  }, [['assets/havan-satellite-2.jpg', 'Розташування ділянок КМ Гавань на супутниковій карті', 'Розташування на карті'], ['assets/havan-genplan-2.jpg', 'Детальна схема ділянок КМ Гавань', 'Детальна схема ділянок']].map(([src, alt, cap]) => /*#__PURE__*/React.createElement(SchemeImage, {
    key: src,
    src: src,
    alt: alt,
    cap: cap
  }))));
}
function SchemeImage({
  src,
  alt,
  cap
}) {
  const [zoom, setZoom] = React.useState(false);
  const [pos, setPos] = React.useState({
    x: 50,
    y: 50
  });
  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({
      x: (e.clientX - r.left) / r.width * 100,
      y: (e.clientY - r.top) / r.height * 100
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--r-xl)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: src,
    target: "_blank",
    rel: "noopener",
    title: "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0443 \u043F\u043E\u0432\u043D\u043E\u043C\u0443 \u0440\u043E\u0437\u043C\u0456\u0440\u0456",
    onMouseEnter: () => setZoom(true),
    onMouseLeave: () => setZoom(false),
    onMouseMove: onMove,
    style: {
      display: 'block',
      overflow: 'hidden',
      cursor: 'zoom-in'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      display: 'block',
      width: '100%',
      height: 'auto',
      transform: zoom ? 'scale(4.5)' : 'scale(1)',
      transformOrigin: `${pos.x}% ${pos.y}%`,
      transition: zoom ? 'transform 80ms linear' : 'transform var(--dur-base) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      padding: '12px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.875rem',
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, cap));
}
function Infrastructure() {
  const items = [['Route', 'Асфальтовані вулиці', 'Зручний під’їзд у будь-яку погоду.'], ['ShieldCheck', 'В’їзд по перепустках', 'Закрита територія лише для мешканців і гостей.'], ['Snowflake', 'Чищення доріг', 'Прибирання снігу взимку та утримання вулиць.'], ['Trash2', 'Вивіз сміття', 'Регулярне обслуговування території містечка.'], ['Lightbulb', 'Освітлення вулиць', 'Затишне вечірнє освітлення всіх вулиць.'], ['Cable', 'Готові комунікації', 'Електрика, газ та оптоволокно до ділянки.'], ['Video', 'Відеонагляд', 'Цілодобове відеоспостереження по всій території містечка.']];
  return /*#__PURE__*/React.createElement(SectionShell, {
    id: "infra",
    bg: "var(--surface-inverse)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'var(--sp-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DSx.SectionHeading, {
    tone: "light",
    eyebrow: "\u0406\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0442\u0430 \u0441\u0435\u0440\u0432\u0456\u0441",
    title: "\u041C\u0456\u0441\u0442\u0435\u0447\u043A\u043E, \u044F\u043A\u0435 \u043F\u0440\u043E \u0432\u0430\u0441 \u043F\u0456\u043A\u043B\u0443\u0454\u0442\u044C\u0441\u044F",
    lead: "\u0412\u043B\u0430\u0441\u043D\u0430 \u0441\u043B\u0443\u0436\u0431\u0430 \u0435\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0456\u0457 \u0446\u0456\u043B\u0438\u0439 \u0440\u0456\u043A \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454 \u043A\u043E\u043C\u0444\u043E\u0440\u0442 \u0456 \u0431\u0435\u0437\u043F\u0435\u043A\u0443 \u043D\u0430 \u0442\u0435\u0440\u0438\u0442\u043E\u0440\u0456\u0457."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36,
      marginTop: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement(DSx.Stat, {
    value: "100",
    suffix: "%",
    label: "\u0434\u0456\u043B\u044F\u043D\u043E\u043A \u0437 \u043A\u043E\u043C\u0443\u043D\u0456\u043A\u0430\u0446\u0456\u044F\u043C\u0438",
    tone: "sand"
  }), /*#__PURE__*/React.createElement(DSx.Stat, {
    value: "365",
    label: "\u0434\u043D\u0456\u0432 \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u0440\u0456\u043A",
    tone: "sand"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-5)'
    }
  }, items.map(([icon, title, text]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 'var(--r-lg)',
      padding: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 44,
      height: 44,
      borderRadius: 'var(--r-md)',
      background: 'rgba(194,154,87,0.16)',
      color: 'var(--sand-300)',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '1rem',
      color: 'var(--cream-50)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.875rem',
      color: 'var(--text-on-dark-mut)',
      marginTop: 6,
      lineHeight: 1.5
    }
  }, text))))));
}
const GALLERY = [['assets/photos/gallery-1.jpg', 'Панорама річки та ділянок'], ['assets/photos/gallery-2.jpg', 'Пляж, басейн та глемпінг біля води'], ['assets/photos/gallery-6.jpg', 'Вид на канал і набережну'], ['assets/photos/gallery-3.jpg', 'Вид на водойму та забудову'], ['assets/photos/gallery-5.jpg', 'Ділянки вздовж каналу']];
function Gallery() {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement(SectionShell, {
    id: "gallery"
  }, /*#__PURE__*/React.createElement(DSx.SectionHeading, {
    eyebrow: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F",
    title: "\u041F\u043E\u0433\u043B\u044F\u043D\u044C\u0442\u0435 \u043D\u0430 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E \u0437 \u0432\u0438\u0441\u043E\u0442\u0438",
    lead: "\u0420\u0435\u0430\u043B\u044C\u043D\u0456 \u0430\u0435\u0440\u043E\u0444\u043E\u0442\u043E \u0413\u0430\u0432\u0430\u043D\u0456 \u2014 \u0440\u0456\u0447\u043A\u0430, \u0434\u0456\u043B\u044F\u043D\u043A\u0438 \u0442\u0430 \u0431\u043B\u0430\u0433\u043E\u0443\u0441\u0442\u0440\u0456\u0439 \u0442\u0435\u0440\u0438\u0442\u043E\u0440\u0456\u0457.",
    style: {
      marginBottom: 'var(--sp-7)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gridAutoRows: '210px',
      gap: 'var(--sp-4)'
    }
  }, GALLERY.map(([src, alt], i) => /*#__PURE__*/React.createElement("button", {
    key: src,
    onClick: () => setOpen(i),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--shadow-sm)',
      gridColumn: i === 0 ? 'span 2' : i === GALLERY.length - 1 ? 'span 2' : 'span 1',
      gridRow: i === 0 ? 'span 2' : 'span 1',
      background: `url(${src}) center/cover no-repeat`,
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'scale(1.02)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, transparent 55%, rgba(12,59,62,0.55))'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 14,
      right: 16,
      textAlign: 'left',
      color: 'var(--cream-50)',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.875rem',
      fontWeight: 600
    }
  }, alt)))), open != null && /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(null),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 110,
      background: 'rgba(12,59,62,0.78)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 24,
      right: 24
    }
  }, /*#__PURE__*/React.createElement(DSx.IconButton, {
    variant: "outline",
    icon: /*#__PURE__*/React.createElement(Icon, {
      icon: "X",
      size: 20
    }),
    ariaLabel: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
    onClick: () => setOpen(null)
  })), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setOpen(o => (o + GALLERY.length - 1) % GALLERY.length);
    },
    style: {
      position: 'absolute',
      left: 24,
      background: 'rgba(255,255,255,0.14)',
      border: '1px solid rgba(255,255,255,0.3)',
      color: '#fff',
      width: 52,
      height: 52,
      borderRadius: 999,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronLeft",
    size: 24
  })), /*#__PURE__*/React.createElement("figure", {
    onClick: e => e.stopPropagation(),
    style: {
      margin: 0,
      maxWidth: '88vw',
      maxHeight: '84vh'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: GALLERY[open][0],
    alt: GALLERY[open][1],
    style: {
      maxWidth: '88vw',
      maxHeight: '78vh',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--shadow-xl)',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      color: 'var(--cream-50)',
      textAlign: 'center',
      marginTop: 14,
      fontFamily: 'var(--font-sans)',
      fontSize: '0.9375rem'
    }
  }, GALLERY[open][1])), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setOpen(o => (o + 1) % GALLERY.length);
    },
    style: {
      position: 'absolute',
      right: 24,
      background: 'rgba(255,255,255,0.14)',
      border: '1px solid rgba(255,255,255,0.3)',
      color: '#fff',
      width: 52,
      height: 52,
      borderRadius: 999,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronRight",
    size: 24
  }))));
}
function Messengers() {
  const phone = '380954556671';
  const apps = [{
    name: 'WhatsApp',
    href: 'https://wa.me/380954556671',
    bg: '#25D366',
    path: 'M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02zM12.04 20.13a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14 0-.31-.02-.47-.02-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z'
  }, {
    name: 'Telegram',
    href: 'tg://resolve?domain=@best_4_vepr',
    bg: '#229ED9',
    path: 'M21.94 4.5 18.6 20.2c-.25 1.11-.92 1.39-1.86.86l-5.14-3.79-2.48 2.39c-.27.27-.5.5-1.03.5l.37-5.23 9.52-8.6c.41-.37-.09-.57-.64-.2L5.04 12.9l-5.07-1.58c-1.1-.34-1.12-1.1.23-1.63L20.5 2.93c.92-.34 1.72.2 1.44 1.57z'
  }, {
    name: 'Viber',
    href: 'viber://chat?number=%2B380954556671',
    bg: '#7360F2',
    path: 'M12.04 2C9.5 2 6.3 2.62 4.6 4.2 3.34 5.38 2.7 7.2 2.63 9.46c-.07 2.26-.16 6.5 3.93 7.65v1.76c0 .64.34.74.6.5l1.35-1.36c2.8.23 5.78-.34 6.12-.45 1.13-.37 1.77-1.55 2-2.66.22-1.14.36-3.27.06-4.94C16.43 4.83 13.94 2.02 12.04 2zm.13 1.43c1.6.02 3.66 2.32 3.93 5.05.25 1.4.13 3.27-.05 4.24-.18.95-.65 1.6-1.34 1.83-.3.1-3.02.62-5.5.4 0 0-1.84 2.22-2.42 2.8-.18.18-.38.16-.38-.2 0-.24.01-3 .01-3-3.46-.96-3.26-4.57-3.2-6.46.05-1.88.57-3.36 1.6-4.32 1.42-1.3 4.2-1.84 6.34-1.84zm.24 1.85a.3.3 0 0 0-.04.6c1.95.15 3.42 1.67 3.5 3.74a.3.3 0 0 0 .6-.02c-.1-2.37-1.8-4.16-4.04-4.32zm-2.86.92a.85.85 0 0 0-.5.1l-.03.02c-.36.2-.68.47-.93.8-.2.26-.3.51-.33.76-.01.14 0 .29.04.43l.02.01c.13.36.3.7.5 1.04.27.5.6.99.95 1.43.5.65 1.06 1.24 1.68 1.77.46.4.95.74 1.48 1.04.3.16.6.3.92.4.02 0 .03.02.05.02.1.04.2.06.3.06.45 0 .92-.34 1.2-.62.18-.18.3-.4.36-.65.06-.32-.1-.6-.36-.77-.3-.2-.62-.39-.93-.56-.32-.18-.6-.1-.83.13l-.46.58c-.1.12-.26.16-.4.1-1.02-.42-1.78-1.18-2.2-2.2-.06-.14-.02-.3.1-.4l.58-.46c.23-.23.3-.5.13-.83-.16-.3-.36-.6-.55-.9-.16-.24-.4-.4-.7-.43zm3.1.5a.3.3 0 0 0-.07.6c.9.2 1.32.63 1.5 1.5a.3.3 0 0 0 .59-.13c-.23-1.1-.86-1.74-1.96-1.97a.3.3 0 0 0-.06 0z'
  }, {
    name: 'Instagram',
    href: 'https://www.instagram.com/friends.town.mr/',
    bg: 'radial-gradient(circle at 30% 110%, #FED576 8%, #F47133 30%, #BC3081 60%, #4F5BD5 100%)',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.51.01-4.75.07-1.15.05-1.77.24-2.18.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.41-.35 1.03-.4 2.18-.06 1.24-.07 1.6-.07 4.75s.01 3.51.07 4.75c.05 1.15.24 1.77.4 2.18.22.55.47.94.88 1.35.41.41.8.66 1.35.88.41.16 1.03.35 2.18.4 1.24.06 1.6.07 4.75.07s3.51-.01 4.75-.07c1.15-.05 1.77-.24 2.18-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.41.35-1.03.4-2.18.06-1.24.07-1.6.07-4.75s-.01-3.51-.07-4.75c-.05-1.15-.24-1.77-.4-2.18a3.63 3.63 0 0 0-.88-1.35 3.63 3.63 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.18-.4-1.24-.06-1.6-.07-4.75-.07zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6zm0 8.74a3.44 3.44 0 1 0 0-6.88 3.44 3.44 0 0 0 0 6.88zm6.74-8.94a1.24 1.24 0 1 1-2.48 0 1.24 1.24 0 0 1 2.48 0z'
  }, {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@friends.town.mr',
    bg: '#010101',
    path: 'M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.2v12.86a2.58 2.58 0 0 1-2.58 2.5 2.58 2.58 0 0 1-2.58-2.58 2.58 2.58 0 0 1 3.4-2.45V9.9a5.8 5.8 0 0 0-.82-.06 5.78 5.78 0 1 0 5.78 5.78V8.99a7.45 7.45 0 0 0 4.36 1.4V7.18a4.28 4.28 0 0 1-3.3-1.36z'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 'var(--sp-2)'
    }
  }, apps.map(a => /*#__PURE__*/React.createElement("a", {
    key: a.name,
    href: a.href,
    target: "_blank",
    rel: "noopener",
    "aria-label": a.name,
    title: a.name,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 48,
      height: 48,
      borderRadius: 'var(--r-md)',
      background: a.bg,
      color: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: a.path
  })))));
}
function Contact({
  onSubmit,
  submitted
}) {
  return /*#__PURE__*/React.createElement(SectionShell, {
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DSx.SectionHeading, {
    eyebrow: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",
    title: "\u042F\u043A \u043D\u0430\u0441 \u0437\u043D\u0430\u0439\u0442\u0438",
    lead: "\u0417\u0430\u0432\u0456\u0442\u0430\u0439\u0442\u0435 \u0434\u043E \u043A\u043E\u0442\u0435\u0434\u0436\u043D\u043E\u0433\u043E \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u0430 \u0413\u0430\u0432\u0430\u043D\u044C \u043D\u0430 \u0431\u0435\u0440\u0435\u0437\u0456 \u0414\u0435\u0441\u043D\u0438 \u2014 \u043F\u043E\u0431\u0443\u0434\u0443\u0454\u043C\u043E \u043C\u0430\u0440\u0448\u0440\u0443\u0442 \u0432\u0456\u0434 \u0432\u0430\u0441."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 'var(--sp-6)'
    }
  }, [['Phone', '+38 095 455 66 71'], ['Clock', 'Щодня з 9:00 до 20:00']].map(([icon, text]) => /*#__PURE__*/React.createElement("div", {
    key: text,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 42,
      height: 42,
      borderRadius: 'var(--r-md)',
      background: 'var(--teal-50)',
      color: 'var(--teal-700)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, text))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      paddingLeft: 54
    }
  }, [['Google', 'https://goo.gl/maps/Y7xNNyrsHFgYdYFZA'], ['Waze', 'https://waze.com/ul/hu8vxz0t11']].map(([label, href]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: '0.9375rem',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, label, ":"), /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      color: 'var(--text-link)',
      fontWeight: 600
    }
  }, "\u043C\u0430\u0440\u0448\u0440\u0443\u0442 ", /*#__PURE__*/React.createElement(Icon, {
    icon: "ArrowRight",
    size: 15
  }))))), /*#__PURE__*/React.createElement(Messengers, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      borderRadius: 'var(--r-xl)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)',
      overflow: 'hidden',
      minHeight: 420
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "\u041A\u043E\u0442\u0435\u0434\u0436\u043D\u0435 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E \u0413\u0430\u0432\u0430\u043D\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0456",
    src: "https://www.google.com/maps?q=\u041A\u043E\u0442\u0435\u0434\u0436\u043D\u0435+\u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E+\u0413\u0430\u0432\u0430\u043D\u044C+\u0414\u0435\u0441\u043D\u0430&z=16&output=embed",
    style: {
      display: 'block',
      width: '100%',
      height: '100%',
      minHeight: 420,
      border: 0
    },
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
    allowFullScreen: true
  }), /*#__PURE__*/React.createElement("a", {
    href: "https://maps.app.goo.gl/2aum38nH9zyq3h6r5",
    target: "_blank",
    rel: "noopener",
    style: {
      position: 'absolute',
      left: 16,
      bottom: 16,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(DSx.Button, {
    variant: "primary",
    size: "md",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      icon: "ExternalLink",
      size: 16
    })
  }, "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432 Google Maps")))));
}
function ContactForm({
  onSubmit
}) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [area, setArea] = React.useState('від 8 соток');
  const TELEGRAM = 'tg://resolve?domain=@best_4_vepr';
  const submit = e => {
    e.preventDefault();
    const msg = `Нова заявка з сайту «Гавань»%0A%0AІм'я: ${name || '—'}%0AТелефон: ${phone || '—'}%0AЦікавить площа: ${area}`;
    // Copy a ready-to-send message to clipboard (DM pre-fill isn't possible via tg://)
    try {
      const plain = decodeURIComponent(msg.replace(/%0A/g, '\n'));
      if (navigator.clipboard) navigator.clipboard.writeText(plain);
    } catch (err) {/* noop */}
    window.open(TELEGRAM, '_blank');
    onSubmit();
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DSx.Input, {
    label: "\u0412\u0430\u0448\u0435 \u0456\u043C'\u044F",
    placeholder: "\u041E\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440",
    icon: /*#__PURE__*/React.createElement(Icon, {
      icon: "User",
      size: 16
    }),
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(DSx.Input, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    placeholder: "+380 __ ___ __ __",
    icon: /*#__PURE__*/React.createElement(Icon, {
      icon: "Phone",
      size: 16
    }),
    value: phone,
    onChange: e => setPhone(e.target.value)
  }), /*#__PURE__*/React.createElement(DSx.Select, {
    label: "\u0426\u0456\u043A\u0430\u0432\u0438\u0442\u044C \u043F\u043B\u043E\u0449\u0430",
    options: ['від 8 соток', 'від 12 соток', 'від 15 соток', 'понад 20 соток'],
    value: area,
    onChange: e => setArea(e.target.value)
  }), /*#__PURE__*/React.createElement(DSx.Checkbox, {
    label: "\u0417\u0433\u043E\u0434\u0435\u043D \u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(DSx.Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      icon: "Send",
      size: 18
    })
  }, "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 \u0443 Telegram"));
}
function PlotModal({
  plot,
  onClose,
  onRequest
}) {
  if (!plot) return null;
  const waterBg = 'linear-gradient(160deg, #4E979C 0%, #2C7A80 45%, #14565A 100%)';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(12,59,62,0.55)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--r-xl)',
      overflow: 'hidden',
      maxWidth: 760,
      width: '100%',
      boxShadow: 'var(--shadow-xl)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: waterBg,
      minHeight: 360,
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(DSx.Badge, {
    tone: plot.status === 'free' ? 'success' : plot.status === 'reserved' ? 'warn' : 'neutral',
    styleType: "solid"
  }, plot.status === 'free' ? 'Вільна' : plot.status === 'reserved' ? 'Заброньована' : 'Продана'), /*#__PURE__*/React.createElement(DSx.Badge, {
    tone: "sand",
    styleType: "solid"
  }, plot.line))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.75rem'
    }
  }, plot.title), /*#__PURE__*/React.createElement(DSx.IconButton, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      icon: "X",
      size: 18
    }),
    ariaLabel: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, "\u041F\u043B\u043E\u0449\u0430 ", plot.area, " \xB7 ", plot.line, " \u0432\u043E\u0434\u0438"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '20px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, plot.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "Check",
    size: 16,
    style: {
      color: 'var(--teal-600)'
    }
  }), f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      padding: '16px 0',
      borderTop: '1px solid var(--border-subtle)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--text-faint)'
    }
  }, "\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.625rem',
      color: 'var(--text-strong)'
    }
  }, plot.price)), /*#__PURE__*/React.createElement(DSx.Button, {
    variant: "accent",
    size: "lg",
    fullWidth: true,
    onClick: onRequest,
    disabled: plot.status === 'sold'
  }, plot.status === 'sold' ? 'Ділянку продано' : 'Забронювати перегляд'))));
}
Object.assign(window, {
  Amenities,
  Plots,
  Infrastructure,
  Gallery,
  Contact,
  PlotModal,
  PLOTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/admin-core.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Гавань — адмін-панель · дані за замовчуванням + сховище + поля */

const DSA = window.DesignSystem_0f1a06;
const LS_KEY = 'havan_site_content_v1';
function AIcon({
  icon,
  size = 18,
  stroke = 2
}) {
  let d = window.lucide && lucide.icons[icon];
  if (!d) return null;
  if (d[0] === 'svg' && Array.isArray(d[2])) d = d[2];
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, d.map((c, i) => React.createElement(c[0], {
    ...c[1],
    key: i
  })));
}
const P = '../../assets/photos/';
const DEFAULTS = {
  hero: {
    eyebrow: 'Котеджне містечко Гавань',
    title: 'Ваш власний берег',
    titleAccent: 'Десни',
    subtitle: 'Сучасне котеджне містечко на березі річки Десна',
    cta1: 'Обрати ділянку',
    cta2: 'Містечко з висоти',
    stats: [{
      value: 'На воді',
      label: 'ділянки першої лінії'
    }, {
      value: 'Власний',
      label: 'пляж · набережна · спуск човнів'
    }, {
      value: '24/7',
      label: 'охорона та відеонагляд'
    }],
    photo: P + 'hero-desna.jpg'
  },
  amenities: {
    eyebrow: 'Чому Гавань',
    title: 'Все для життя біля води',
    lead: 'Ми створили містечко, де природа, приватність і комфорт поєднані на березі річки.',
    items: [{
      title: 'Дім біля води',
      text: 'Приватний берег на кожній ділянці першої лінії.',
      photo: P + 'amenity-1.jpg'
    }, {
      title: 'Свій човен на ділянці',
      text: 'Паркуйте човен біля свого подвір’я.',
      photo: P + 'amenity-2.jpg'
    }, {
      title: 'Власний пляж',
      text: 'Доглянутий піщаний пляж лише для мешканців містечка.',
      photo: P + 'amenity-3.jpg'
    }, {
      title: 'Дитячий майданчик',
      text: 'Безпечний простір для ігор та відпочинку дітей.',
      photo: P + 'amenity-4.jpg'
    }, {
      title: 'Футбольне поле',
      text: 'Власне поле для гри та активного дозвілля мешканців.',
      photo: P + 'amenity-5.jpg'
    }, {
      title: 'Волейбольне поле',
      text: 'Майданчик для волейболу просто неба біля води.',
      photo: P + 'amenity-6.jpg'
    }]
  },
  newQuarter: {
    eyebrow: 'Новий квартал',
    title: 'Ми відкрили новий квартал на продаж',
    lead: 'Ділянки з власним виходом на затоку Десни. Перша лінія води, простір і приватність — нова черга вже доступна для бронювання.',
    cta: 'Дізнатися більше',
    realCount: 3,
    photos: [P + 'nq-1.jpg', P + 'nq-2.jpg', P + 'nq-3.jpg', P + 'nq-4.jpg', P + 'nq-5.jpg', P + 'nq-6.jpg', P + 'nq-7.jpg', P + 'nq-8.jpg']
  },
  schemes: {
    eyebrow: 'Генплан містечка',
    title: 'Схема ділянок',
    lead: 'Актуальна схема котеджного містечка.',
    items: [{
      cap: 'Розташування на карті',
      src: '../website/assets/havan-satellite-2.jpg'
    }, {
      cap: 'Детальна схема ділянок',
      src: '../website/assets/havan-genplan-2.jpg'
    }]
  },
  infrastructure: {
    eyebrow: 'Інфраструктура та сервіс',
    title: 'Містечко, яке про вас піклується',
    lead: 'Власна служба експлуатації цілий рік підтримує комфорт і безпеку на території.',
    items: [{
      icon: 'Cable',
      title: 'Готові комунікації',
      text: 'Електрика, газ та оптоволокно до ділянки.'
    }, {
      icon: 'Route',
      title: 'Асфальтовані вулиці',
      text: 'Зручний під’їзд у будь-яку погоду.'
    }, {
      icon: 'ShieldCheck',
      title: 'В’їзд по перепустках',
      text: 'Закрита територія лише для мешканців і гостей.'
    }, {
      icon: 'Lightbulb',
      title: 'Освітлення вулиць',
      text: 'Затишне вечірнє освітлення всіх вулиць.'
    }, {
      icon: 'Wrench',
      title: 'Обслуговування території',
      text: 'Чищення доріг від снігу та регулярний вивіз сміття.'
    }, {
      icon: 'Video',
      title: 'Відеонагляд',
      text: 'Цілодобове відеоспостереження по всій території.'
    }]
  },
  gallery: {
    eyebrow: 'Галерея',
    title: 'Погляньте на містечко з висоти',
    lead: 'Реальні аерофото Гавані — річка, ділянки та благоустрій території.',
    photos: [P + 'g-01.jpg', P + 'g-02.jpg', P + 'g-03.jpg', P + 'g-04.jpg', P + 'g-06.jpg', P + 'g-07.jpg']
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
    officePhotos: [P + 'sales-office.jpg', P + 'sales-office-2.jpg']
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
    captionShade: 58
  },
  files: [{
    name: 'Генплан (супутник)',
    path: '../website/assets/havan-satellite-2.jpg'
  }, {
    name: 'Детальна схема ділянок',
    path: '../website/assets/havan-genplan-2.jpg'
  }, {
    name: 'Схема PDF',
    path: '../website/assets/havan-scheme.pdf'
  }]
};
function loadContent() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return JSON.parse(JSON.stringify(DEFAULTS));
    return {
      ...JSON.parse(JSON.stringify(DEFAULTS)),
      ...JSON.parse(raw)
    };
  } catch (e) {
    return JSON.parse(JSON.stringify(DEFAULTS));
  }
}

/* ─── поля ─── */
const lbl = {
  fontFamily: 'var(--font-sans)',
  fontSize: '0.8125rem',
  fontWeight: 600,
  color: 'var(--ink-700)',
  marginBottom: 6,
  display: 'block'
};
const inp = {
  width: '100%',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.9375rem',
  color: 'var(--ink-900)',
  background: '#fff',
  border: '1px solid var(--ink-200)',
  borderRadius: 8,
  padding: '10px 12px',
  outline: 'none'
};
function SliderField({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  hint
}) {
  const v = value == null ? min : value;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      ...lbl,
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--teal-700)',
      fontWeight: 700
    }
  }, v, unit)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: v,
    onChange: e => onChange(parseFloat(e.target.value)),
    style: {
      width: '100%',
      accentColor: 'var(--teal-600)',
      cursor: 'pointer'
    }
  }), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--ink-500)',
      marginTop: 4,
      display: 'block'
    }
  }, hint));
}
function SelectField({
  label,
  value,
  onChange,
  options = [],
  hint
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: e => onChange(e.target.value),
    style: {
      ...inp,
      cursor: 'pointer'
    }
  }, options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, text);
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--ink-500)',
      marginTop: 4,
      display: 'block'
    }
  }, hint));
}
function TextField({
  label,
  value,
  onChange,
  multiline,
  rows = 3,
  hint
}) {
  const common = {
    value: value || '',
    onChange: e => onChange(e.target.value),
    style: inp,
    onFocus: e => {
      e.target.style.borderColor = 'var(--teal-600)';
      e.target.style.boxShadow = '0 0 0 3px rgba(44,122,128,0.16)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--ink-200)';
      e.target.style.boxShadow = 'none';
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, label), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, common, {
    style: {
      ...inp,
      resize: 'vertical',
      lineHeight: 1.5
    }
  })) : /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, common)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--ink-500)',
      marginTop: 4,
      display: 'block'
    }
  }, hint));
}
function ImageField({
  label,
  src,
  onChange,
  onRemove,
  height = 128
}) {
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
  const read = file => {
    if (!file || !file.type.startsWith('image')) return;
    const fr = new FileReader();
    fr.onload = () => onChange(fr.result);
    fr.readAsDataURL(file);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, label), /*#__PURE__*/React.createElement("div", {
    onDragOver: e => {
      e.preventDefault();
      setOver(true);
    },
    onDragLeave: () => setOver(false),
    onDrop: e => {
      e.preventDefault();
      setOver(false);
      read(e.dataTransfer.files[0]);
    },
    onClick: () => ref.current && ref.current.click(),
    style: {
      position: 'relative',
      height,
      borderRadius: 10,
      cursor: 'pointer',
      overflow: 'hidden',
      border: over ? '2px dashed var(--teal-600)' : '1px solid var(--ink-200)',
      background: shown ? `url(${shown}) center/cover no-repeat` : 'var(--cream-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, !shown && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.8125rem',
      color: bad ? 'var(--red-600)' : 'var(--ink-500)',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      textAlign: 'center',
      padding: '0 12px'
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    icon: bad ? 'ImageOff' : 'ImagePlus',
    size: 18
  }), bad ? 'Файл не знайдено — перетягніть фото або натисніть' : 'Перетягніть фото або натисніть'), shown && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(12,59,62,0)',
      transition: 'background 160ms',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'rgba(12,59,62,0.55)';
      e.currentTarget.querySelectorAll('span').forEach(s => s.style.opacity = 1);
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'rgba(12,59,62,0)';
      e.currentTarget.querySelectorAll('span').forEach(s => s.style.opacity = 0);
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0,
      transition: 'opacity 160ms',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.8125rem',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    icon: "Upload",
    size: 16
  }), " \u0417\u0430\u043C\u0456\u043D\u0438\u0442\u0438"), onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      opacity: 0,
      transition: 'opacity 160ms',
      color: '#fff',
      background: 'rgba(178,58,46,0.9)',
      padding: '6px 10px',
      borderRadius: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: '0.8125rem',
      fontWeight: 600
    }
  }, "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438")), /*#__PURE__*/React.createElement("input", {
    ref: ref,
    type: "file",
    accept: "image/*",
    style: {
      display: 'none'
    },
    onChange: e => read(e.target.files[0])
  })));
}
function PhotoList({
  label,
  photos,
  onChange,
  note
}) {
  const set = (i, v) => {
    const n = [...photos];
    n[i] = v;
    onChange(n);
  };
  const del = i => onChange(photos.filter((_, x) => x !== i));
  const move = (i, d) => {
    const j = i + d;
    if (j < 0 || j >= photos.length) return;
    const n = [...photos];
    [n[i], n[j]] = [n[j], n[i]];
    onChange(n);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, label), note && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--ink-500)',
      margin: '0 0 10px'
    }
  }, note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: 12
    }
  }, photos.map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      border: '1px solid var(--ink-100)',
      borderRadius: 10,
      padding: 8,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(ImageField, {
    src: src,
    onChange: v => set(i, v),
    height: 104
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: -8
    }
  }, /*#__PURE__*/React.createElement(MiniBtn, {
    onClick: () => move(i, -1),
    icon: "ArrowLeft",
    title: "\u041B\u0456\u0432\u0456\u0448\u0435"
  }), /*#__PURE__*/React.createElement(MiniBtn, {
    onClick: () => move(i, 1),
    icon: "ArrowRight",
    title: "\u041F\u0440\u0430\u0432\u0456\u0448\u0435"
  }), /*#__PURE__*/React.createElement(MiniBtn, {
    onClick: () => del(i),
    icon: "Trash2",
    title: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
    danger: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.75rem',
      color: 'var(--ink-400)',
      alignSelf: 'center'
    }
  }, "#", i + 1))))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange([...photos, '']),
    style: {
      marginTop: 12,
      ...ghostBtn
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    icon: "Plus",
    size: 16
  }), " \u0414\u043E\u0434\u0430\u0442\u0438 \u0444\u043E\u0442\u043E"));
}
const ghostBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  cursor: 'pointer',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: 'var(--teal-700)',
  background: 'var(--teal-50)',
  border: '1px solid var(--teal-100)',
  borderRadius: 8,
  padding: '9px 14px'
};
function MiniBtn({
  onClick,
  icon,
  title,
  danger
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: title,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 30,
      height: 30,
      borderRadius: 6,
      cursor: 'pointer',
      border: '1px solid var(--ink-200)',
      background: '#fff',
      color: danger ? 'var(--red-600)' : 'var(--ink-600)'
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    icon: icon,
    size: 14
  }));
}
Object.assign(window, {
  AIcon,
  DEFAULTS,
  LS_KEY,
  loadContent,
  TextField,
  ImageField,
  PhotoList,
  MiniBtn,
  ghostBtn,
  lbl,
  inp,
  SliderField,
  SelectField
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/admin-core.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/admin-sections.jsx
try { (() => {
/* Гавань — адмін-панель · редактори секцій */

function Panel({
  title,
  desc,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--ink-100)',
      borderRadius: 14,
      padding: 24,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.25rem',
      color: 'var(--ink-900)',
      margin: 0
    }
  }, title), desc && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.875rem',
      color: 'var(--ink-500)',
      margin: '6px 0 18px'
    }
  }, desc), !desc && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18
    }
  }), children);
}
function Row({
  children,
  cols = 2
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: 16
    }
  }, children);
}

/* ── Головна ── */
function HeroEditor({
  c,
  up
}) {
  const h = c.hero;
  const setStat = (i, k, v) => {
    const s = [...h.stats];
    s[i] = {
      ...s[i],
      [k]: v
    };
    up('hero', {
      ...h,
      stats: s
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Panel, {
    title: "\u0413\u043E\u043B\u043E\u0432\u043D\u0438\u0439 \u0435\u043A\u0440\u0430\u043D",
    desc: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A, \u043F\u0456\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0456 \u0444\u043E\u043D\u043E\u0432\u0435 \u0444\u043E\u0442\u043E."
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "\u041D\u0430\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    value: h.eyebrow,
    onChange: v => up('hero', {
      ...h,
      eyebrow: v
    })
  }), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(TextField, {
    label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    value: h.title,
    onChange: v => up('hero', {
      ...h,
      title: v
    })
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u0412\u0438\u0434\u0456\u043B\u0435\u043D\u0435 \u0441\u043B\u043E\u0432\u043E (\u043A\u0443\u0440\u0441\u0438\u0432, \u0437\u043E\u043B\u043E\u0442\u0438\u0441\u0442\u0435)",
    value: h.titleAccent,
    onChange: v => up('hero', {
      ...h,
      titleAccent: v
    })
  })), /*#__PURE__*/React.createElement(TextField, {
    label: "\u041F\u0456\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    value: h.subtitle,
    multiline: true,
    rows: 2,
    onChange: v => up('hero', {
      ...h,
      subtitle: v
    })
  }), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(TextField, {
    label: "\u041A\u043D\u043E\u043F\u043A\u0430 1",
    value: h.cta1,
    onChange: v => up('hero', {
      ...h,
      cta1: v
    })
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u041A\u043D\u043E\u043F\u043A\u0430 2",
    value: h.cta2,
    onChange: v => up('hero', {
      ...h,
      cta2: v
    })
  })), /*#__PURE__*/React.createElement(ImageField, {
    label: "\u0424\u043E\u043D\u043E\u0432\u0435 \u0444\u043E\u0442\u043E",
    src: h.photo,
    height: 200,
    onChange: v => up('hero', {
      ...h,
      photo: v
    })
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "\u041F\u043E\u043A\u0430\u0437\u043D\u0438\u043A\u0438 \u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0456\u0439",
    desc: "\u0422\u0440\u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u0456 \u0430\u043A\u0446\u0435\u043D\u0442\u0438 \u043F\u0456\u0434 \u043F\u0456\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C."
  }, h.stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr auto',
      gap: 12,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: `Значення ${i + 1}`,
    value: s.value,
    onChange: v => setStat(i, 'value', v)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: `Опис ${i + 1}`,
    value: s.label,
    onChange: v => setStat(i, 'label', v)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      paddingTop: 26
    }
  }, /*#__PURE__*/React.createElement(MiniBtn, {
    onClick: () => {
      const st = [...h.stats];
      if (i > 0) {
        [st[i - 1], st[i]] = [st[i], st[i - 1]];
        up('hero', {
          ...h,
          stats: st
        });
      }
    },
    icon: "ArrowUp",
    title: "\u0412\u0438\u0449\u0435"
  }), /*#__PURE__*/React.createElement(MiniBtn, {
    onClick: () => {
      const st = [...h.stats];
      if (i < st.length - 1) {
        [st[i + 1], st[i]] = [st[i], st[i + 1]];
        up('hero', {
          ...h,
          stats: st
        });
      }
    },
    icon: "ArrowDown",
    title: "\u041D\u0438\u0436\u0447\u0435"
  }), /*#__PURE__*/React.createElement(MiniBtn, {
    onClick: () => up('hero', {
      ...h,
      stats: h.stats.filter((_, x) => x !== i)
    }),
    icon: "Trash2",
    title: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
    danger: true
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: () => up('hero', {
      ...h,
      stats: [...h.stats, {
        value: '',
        label: ''
      }]
    }),
    style: ghostBtn
  }, /*#__PURE__*/React.createElement(AIcon, {
    icon: "Plus",
    size: 16
  }), " \u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u043E\u043A\u0430\u0437\u043D\u0438\u043A")));
}

/* ── Вигляд ── */
function DesignEditor({
  c,
  up
}) {
  const d = c.design || {};
  const s = k => v => up('design', {
    ...d,
    [k]: v
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Panel, {
    title: "\u0413\u043E\u043B\u043E\u0432\u043D\u0435 \u0444\u043E\u0442\u043E \u2014 \u0437\u0430\u0442\u0435\u043C\u043D\u0435\u043D\u043D\u044F \u0442\u0430 \u0440\u043E\u0437\u043C\u0456\u0440",
    desc: "\u041A\u0435\u0440\u0443\u0439\u0442\u0435 \u0447\u0438\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u0456\u0441\u0442\u044E \u0442\u0435\u043A\u0441\u0442\u0443 \u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u043C\u0443 \u0435\u043A\u0440\u0430\u043D\u0456."
  }, /*#__PURE__*/React.createElement(SliderField, {
    label: "\u0417\u0430\u0442\u0435\u043C\u043D\u0435\u043D\u043D\u044F \u043A\u0440\u0430\u0457\u0432 (\u0432\u0456\u043D\u044C\u0454\u0442\u043A\u0430)",
    value: d.heroVignette,
    onChange: s('heroVignette'),
    min: 0,
    max: 95,
    unit: "%"
  }), /*#__PURE__*/React.createElement(SliderField, {
    label: "\u0417\u0430\u0442\u0435\u043C\u043D\u0435\u043D\u043D\u044F \u0437\u043B\u0456\u0432\u0430 (\u043F\u0456\u0434 \u0442\u0435\u043A\u0441\u0442)",
    value: d.heroSideShade,
    onChange: s('heroSideShade'),
    min: 0,
    max: 95,
    unit: "%"
  }), /*#__PURE__*/React.createElement(SliderField, {
    label: "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0435 \u0437\u0430\u0442\u0435\u043C\u043D\u0435\u043D\u043D\u044F \u0444\u043E\u0442\u043E",
    value: d.heroOverlay,
    onChange: s('heroOverlay'),
    min: 0,
    max: 95,
    unit: "%"
  }), /*#__PURE__*/React.createElement(SliderField, {
    label: "\u0412\u0438\u0441\u043E\u0442\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0433\u043E \u0435\u043A\u0440\u0430\u043D\u0430",
    value: d.heroHeight,
    onChange: s('heroHeight'),
    min: 50,
    max: 100,
    unit: "% \u0435\u043A\u0440\u0430\u043D\u0430"
  }), /*#__PURE__*/React.createElement(SliderField, {
    label: "\u0424\u043E\u043A\u0443\u0441 \u0444\u043E\u0442\u043E (\u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E)",
    value: d.heroFocus,
    onChange: s('heroFocus'),
    min: 0,
    max: 100,
    unit: "%",
    hint: "0% \u2014 \u0432\u0435\u0440\u0445 \u0444\u043E\u0442\u043E, 100% \u2014 \u043D\u0438\u0437"
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "\u0420\u043E\u0437\u043C\u0456\u0440\u0438 \u0431\u043B\u043E\u043A\u0456\u0432 \u0456 \u0444\u043E\u0442\u043E"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(SliderField, {
    label: "\u0412\u0438\u0441\u043E\u0442\u0430 \u043A\u0430\u0440\u0442\u043E\u043A \u043F\u0435\u0440\u0435\u0432\u0430\u0433",
    value: d.amenityCardHeight,
    onChange: s('amenityCardHeight'),
    min: 220,
    max: 520,
    step: 10,
    unit: "px"
  }), /*#__PURE__*/React.createElement(SliderField, {
    label: "\u041A\u0430\u0440\u0442\u043E\u043A \u0443 \u0432\u0438\u0434\u0438\u043C\u0456\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0456",
    value: d.amenityPerView,
    onChange: s('amenityPerView'),
    min: 1,
    max: 4,
    unit: " \u0448\u0442"
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(SliderField, {
    label: "\u0412\u0438\u0441\u043E\u0442\u0430 \u0433\u0430\u043B\u0435\u0440\u0435\u0457 \xAB\u0437 \u0432\u0438\u0441\u043E\u0442\u0438\xBB",
    value: d.galleryHeight,
    onChange: s('galleryHeight'),
    min: 280,
    max: 760,
    step: 10,
    unit: "px"
  }), /*#__PURE__*/React.createElement(SliderField, {
    label: "\u041C\u0456\u043D\u0456\u0430\u0442\u044E\u0440\u0438 \u0433\u0430\u043B\u0435\u0440\u0435\u0457",
    value: d.galleryThumbW,
    onChange: s('galleryThumbW'),
    min: 60,
    max: 200,
    step: 4,
    unit: "px"
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(SliderField, {
    label: "\u0412\u0438\u0441\u043E\u0442\u0430 \u0441\u0445\u0435\u043C \u0434\u0456\u043B\u044F\u043D\u043E\u043A",
    value: d.schemeHeight,
    onChange: s('schemeHeight'),
    min: 300,
    max: 900,
    step: 10,
    unit: "px"
  }), /*#__PURE__*/React.createElement(SliderField, {
    label: "\u0417\u0443\u043C \u0441\u0445\u0435\u043C\u0438 \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u043D\u0456",
    value: d.schemeZoom,
    onChange: s('schemeZoom'),
    min: 1,
    max: 8,
    step: 0.5,
    unit: "\xD7"
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(SelectField, {
    label: "\u0424\u043E\u0440\u043C\u0430\u0442 \u0433\u0430\u043B\u0435\u0440\u0435\u0457 \u043A\u0432\u0430\u0440\u0442\u0430\u043B\u0443",
    value: d.nqAspect,
    onChange: s('nqAspect'),
    options: [{
      value: '21/9',
      label: 'Широкий 21:9'
    }, {
      value: '16/9',
      label: 'Стандарт 16:9'
    }, {
      value: '3/2',
      label: 'Фото 3:2'
    }, {
      value: '4/3',
      label: 'Класика 4:3'
    }]
  }), /*#__PURE__*/React.createElement(SliderField, {
    label: "\u041C\u0456\u043D\u0456\u0430\u0442\u044E\u0440\u0438 \u043A\u0432\u0430\u0440\u0442\u0430\u043B\u0443",
    value: d.nqThumbW,
    onChange: s('nqThumbW'),
    min: 60,
    max: 200,
    step: 4,
    unit: "px"
  })), /*#__PURE__*/React.createElement(SliderField, {
    label: "\u0412\u0438\u0441\u043E\u0442\u0430 \u0444\u043E\u0442\u043E \u0432\u0456\u0434\u0434\u0456\u043B\u0443 \u043F\u0440\u043E\u0434\u0430\u0436\u0443",
    value: d.officeHeight,
    onChange: s('officeHeight'),
    min: 280,
    max: 700,
    step: 10,
    unit: "px"
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u043C\u0430\u043A\u0435\u0442"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(SliderField, {
    label: "\u0412\u0456\u0434\u0441\u0442\u0430\u043D\u044C \u043C\u0456\u0436 \u0441\u0435\u043A\u0446\u0456\u044F\u043C\u0438",
    value: d.sectionSpacing,
    onChange: s('sectionSpacing'),
    min: 40,
    max: 180,
    step: 4,
    unit: "px"
  }), /*#__PURE__*/React.createElement(SliderField, {
    label: "\u0428\u0438\u0440\u0438\u043D\u0430 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443",
    value: d.contentWidth,
    onChange: s('contentWidth'),
    min: 960,
    max: 1600,
    step: 20,
    unit: "px"
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(SliderField, {
    label: "\u0417\u0430\u043A\u0440\u0443\u0433\u043B\u0435\u043D\u043D\u044F \u043A\u0443\u0442\u0456\u0432",
    value: d.cardRadius,
    onChange: s('cardRadius'),
    min: 0,
    max: 28,
    unit: "px",
    hint: "0 \u2014 \u043F\u0440\u044F\u043C\u043E\u043A\u0443\u0442\u043D\u0456 \u0444\u043E\u0440\u043C\u0438"
  }), /*#__PURE__*/React.createElement(SliderField, {
    label: "\u0417\u0430\u0442\u0435\u043C\u043D\u0435\u043D\u043D\u044F \u043F\u043B\u0430\u0448\u043E\u043A \u043D\u0430 \u0444\u043E\u0442\u043E",
    value: d.captionShade,
    onChange: s('captionShade'),
    min: 0,
    max: 95,
    unit: "%"
  }))));
}

/* ── Переваги ── */
function AmenitiesEditor({
  c,
  up
}) {
  const a = c.amenities;
  const setItem = (i, k, v) => {
    const it = [...a.items];
    it[i] = {
      ...it[i],
      [k]: v
    };
    up('amenities', {
      ...a,
      items: it
    });
  };
  const del = i => up('amenities', {
    ...a,
    items: a.items.filter((_, x) => x !== i)
  });
  const add = () => up('amenities', {
    ...a,
    items: [...a.items, {
      title: 'Нова перевага',
      text: '',
      photo: ''
    }]
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Panel, {
    title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u0435\u043A\u0446\u0456\u0457"
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "\u041D\u0430\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    value: a.eyebrow,
    onChange: v => up('amenities', {
      ...a,
      eyebrow: v
    })
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    value: a.title,
    onChange: v => up('amenities', {
      ...a,
      title: v
    })
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u041E\u043F\u0438\u0441",
    value: a.lead,
    multiline: true,
    rows: 2,
    onChange: v => up('amenities', {
      ...a,
      lead: v
    })
  })), a.items.map((it, i) => /*#__PURE__*/React.createElement(Panel, {
    key: i,
    title: `Картка ${i + 1}: ${it.title || '—'}`
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TextField, {
    label: "\u041D\u0430\u0437\u0432\u0430",
    value: it.title,
    onChange: v => setItem(i, 'title', v)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u041E\u043F\u0438\u0441",
    value: it.text,
    multiline: true,
    rows: 3,
    onChange: v => setItem(i, 'text', v)
  }), /*#__PURE__*/React.createElement(MiniBtn, {
    onClick: () => del(i),
    icon: "Trash2",
    title: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043A\u0430\u0440\u0442\u043A\u0443",
    danger: true
  })), /*#__PURE__*/React.createElement(ImageField, {
    label: "\u0424\u043E\u0442\u043E \u043A\u0430\u0440\u0442\u043A\u0438",
    src: it.photo,
    height: 168,
    onChange: v => setItem(i, 'photo', v)
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: add,
    style: ghostBtn
  }, /*#__PURE__*/React.createElement(AIcon, {
    icon: "Plus",
    size: 16
  }), " \u0414\u043E\u0434\u0430\u0442\u0438 \u043A\u0430\u0440\u0442\u043A\u0443"));
}

/* ── Новий квартал ── */
function NewQuarterEditor({
  c,
  up
}) {
  const n = c.newQuarter;
  return /*#__PURE__*/React.createElement(Panel, {
    title: "\u041D\u043E\u0432\u0438\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B",
    desc: "\u0422\u0435\u043A\u0441\u0442, \u043A\u043D\u043E\u043F\u043A\u0430 \u0442\u0430 \u0433\u0430\u043B\u0435\u0440\u0435\u044F (\u043F\u0435\u0440\u0448\u0456 N \u0444\u043E\u0442\u043E \u043F\u0456\u0434\u043F\u0438\u0441\u0443\u044E\u0442\u044C\u0441\u044F \u044F\u043A \u0440\u0435\u0430\u043B\u044C\u043D\u0456)."
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "\u041D\u0430\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    value: n.eyebrow,
    onChange: v => up('newQuarter', {
      ...n,
      eyebrow: v
    })
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    value: n.title,
    onChange: v => up('newQuarter', {
      ...n,
      title: v
    })
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u041E\u043F\u0438\u0441",
    value: n.lead,
    multiline: true,
    rows: 3,
    onChange: v => up('newQuarter', {
      ...n,
      lead: v
    })
  }), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(TextField, {
    label: "\u041A\u043D\u043E\u043F\u043A\u0430",
    value: n.cta,
    onChange: v => up('newQuarter', {
      ...n,
      cta: v
    })
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u0421\u043A\u0456\u043B\u044C\u043A\u0438 \u043F\u0435\u0440\u0448\u0438\u0445 \u0444\u043E\u0442\u043E \u2014 \xAB\u0440\u0435\u0430\u043B\u044C\u043D\u0456\xBB",
    value: String(n.realCount),
    hint: "\u0420\u0435\u0448\u0442\u0430 \u043F\u0456\u0434\u043F\u0438\u0441\u0443\u044E\u0442\u044C\u0441\u044F \u044F\u043A \xAB\u0412\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u043D\u043E\u0432\u043E\u0433\u043E \u043A\u0432\u0430\u0440\u0442\u0430\u043B\u0443\xBB",
    onChange: v => up('newQuarter', {
      ...n,
      realCount: Math.max(0, parseInt(v || '0', 10) || 0)
    })
  })), /*#__PURE__*/React.createElement(PhotoList, {
    label: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u043A\u0432\u0430\u0440\u0442\u0430\u043B\u0443",
    photos: n.photos,
    onChange: p => up('newQuarter', {
      ...n,
      photos: p
    })
  }));
}

/* ── Схеми ── */
function SchemesEditor({
  c,
  up
}) {
  const s = c.schemes;
  const setItem = (i, k, v) => {
    const it = [...s.items];
    it[i] = {
      ...it[i],
      [k]: v
    };
    up('schemes', {
      ...s,
      items: it
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Panel, {
    title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u0435\u043A\u0446\u0456\u0457"
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "\u041D\u0430\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    value: s.eyebrow,
    onChange: v => up('schemes', {
      ...s,
      eyebrow: v
    })
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    value: s.title,
    onChange: v => up('schemes', {
      ...s,
      title: v
    })
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u041E\u043F\u0438\u0441",
    value: s.lead,
    multiline: true,
    rows: 2,
    onChange: v => up('schemes', {
      ...s,
      lead: v
    })
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "\u0421\u0445\u0435\u043C\u0438 \u0434\u0456\u043B\u044F\u043D\u043E\u043A",
    desc: "\u0421\u0445\u0435\u043C\u0438 \u043F\u043E\u043A\u0430\u0437\u0443\u044E\u0442\u044C\u0441\u044F \u0432 \u0440\u044F\u0434. \u041F\u0456\u0434\u043F\u0438\u0441 \u2014 \u043D\u0430 \u0442\u0435\u043C\u043D\u0456\u0439 \u043F\u043B\u0430\u0448\u0446\u0456."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: 16
    }
  }, s.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      border: '1px solid var(--ink-100)',
      borderRadius: 10,
      padding: 12
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: `Підпис ${i + 1}`,
    value: it.cap,
    onChange: v => setItem(i, 'cap', v)
  }), /*#__PURE__*/React.createElement(ImageField, {
    label: "\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0441\u0445\u0435\u043C\u0438",
    src: it.src,
    height: 170,
    onChange: v => setItem(i, 'src', v)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(MiniBtn, {
    onClick: () => {
      const it2 = [...s.items];
      if (i > 0) {
        [it2[i - 1], it2[i]] = [it2[i], it2[i - 1]];
        up('schemes', {
          ...s,
          items: it2
        });
      }
    },
    icon: "ArrowLeft",
    title: "\u041B\u0456\u0432\u0456\u0448\u0435"
  }), /*#__PURE__*/React.createElement(MiniBtn, {
    onClick: () => {
      const it2 = [...s.items];
      if (i < it2.length - 1) {
        [it2[i + 1], it2[i]] = [it2[i], it2[i + 1]];
        up('schemes', {
          ...s,
          items: it2
        });
      }
    },
    icon: "ArrowRight",
    title: "\u041F\u0440\u0430\u0432\u0456\u0448\u0435"
  }), /*#__PURE__*/React.createElement(MiniBtn, {
    onClick: () => up('schemes', {
      ...s,
      items: s.items.filter((_, x) => x !== i)
    }),
    icon: "Trash2",
    title: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
    danger: true
  }))))), /*#__PURE__*/React.createElement("button", {
    onClick: () => up('schemes', {
      ...s,
      items: [...s.items, {
        cap: 'Нова схема',
        src: ''
      }]
    }),
    style: {
      ...ghostBtn,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    icon: "Plus",
    size: 16
  }), " \u0414\u043E\u0434\u0430\u0442\u0438 \u0441\u0445\u0435\u043C\u0443")));
}

/* ── Інфраструктура ── */
function InfraEditor({
  c,
  up
}) {
  const f = c.infrastructure;
  const setItem = (i, k, v) => {
    const it = [...f.items];
    it[i] = {
      ...it[i],
      [k]: v
    };
    up('infrastructure', {
      ...f,
      items: it
    });
  };
  const move = (i, d) => {
    const j = i + d;
    if (j < 0 || j >= f.items.length) return;
    const it = [...f.items];
    [it[i], it[j]] = [it[j], it[i]];
    up('infrastructure', {
      ...f,
      items: it
    });
  };
  const del = i => up('infrastructure', {
    ...f,
    items: f.items.filter((_, x) => x !== i)
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Panel, {
    title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u0435\u043A\u0446\u0456\u0457"
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "\u041D\u0430\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    value: f.eyebrow,
    onChange: v => up('infrastructure', {
      ...f,
      eyebrow: v
    })
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    value: f.title,
    onChange: v => up('infrastructure', {
      ...f,
      title: v
    })
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u041E\u043F\u0438\u0441",
    value: f.lead,
    multiline: true,
    rows: 2,
    onChange: v => up('infrastructure', {
      ...f,
      lead: v
    })
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "\u0411\u043B\u043E\u043A\u0438 \u0456\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438",
    desc: "\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0431\u043B\u043E\u043A\u0456\u0432 \u043C\u043E\u0436\u043D\u0430 \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438 \u0441\u0442\u0440\u0456\u043B\u043A\u0430\u043C\u0438."
  }, f.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '150px 1fr 1.2fr auto',
      gap: 12,
      alignItems: 'start',
      paddingBottom: 14,
      marginBottom: 14,
      borderBottom: '1px solid var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "\u0406\u043A\u043E\u043D\u043A\u0430 (Lucide)",
    value: it.icon,
    onChange: v => setItem(i, 'icon', v)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u041D\u0430\u0437\u0432\u0430",
    value: it.title,
    onChange: v => setItem(i, 'title', v)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u041E\u043F\u0438\u0441",
    value: it.text,
    onChange: v => setItem(i, 'text', v)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      paddingTop: 26
    }
  }, /*#__PURE__*/React.createElement(MiniBtn, {
    onClick: () => move(i, -1),
    icon: "ArrowUp",
    title: "\u0412\u0438\u0449\u0435"
  }), /*#__PURE__*/React.createElement(MiniBtn, {
    onClick: () => move(i, 1),
    icon: "ArrowDown",
    title: "\u041D\u0438\u0436\u0447\u0435"
  }), /*#__PURE__*/React.createElement(MiniBtn, {
    onClick: () => del(i),
    icon: "Trash2",
    title: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
    danger: true
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: () => up('infrastructure', {
      ...f,
      items: [...f.items, {
        icon: 'Check',
        title: 'Новий блок',
        text: ''
      }]
    }),
    style: ghostBtn
  }, /*#__PURE__*/React.createElement(AIcon, {
    icon: "Plus",
    size: 16
  }), " \u0414\u043E\u0434\u0430\u0442\u0438 \u0431\u043B\u043E\u043A")));
}

/* ── Галерея ── */
function GalleryEditor({
  c,
  up
}) {
  const g = c.gallery;
  return /*#__PURE__*/React.createElement(Panel, {
    title: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \xAB\u041C\u0456\u0441\u0442\u0435\u0447\u043A\u043E \u0437 \u0432\u0438\u0441\u043E\u0442\u0438\xBB"
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "\u041D\u0430\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    value: g.eyebrow,
    onChange: v => up('gallery', {
      ...g,
      eyebrow: v
    })
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    value: g.title,
    onChange: v => up('gallery', {
      ...g,
      title: v
    })
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u041E\u043F\u0438\u0441",
    value: g.lead,
    multiline: true,
    rows: 2,
    onChange: v => up('gallery', {
      ...g,
      lead: v
    })
  }), /*#__PURE__*/React.createElement(PhotoList, {
    label: "\u0424\u043E\u0442\u043E \u0433\u0430\u043B\u0435\u0440\u0435\u0457",
    photos: g.photos,
    onChange: p => up('gallery', {
      ...g,
      photos: p
    })
  }));
}

/* ── Контакти ── */
function ContactsEditor({
  c,
  up
}) {
  const k = c.contacts;
  const s = key => v => up('contacts', {
    ...k,
    [key]: v
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Panel, {
    title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",
    desc: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D, \u0433\u0440\u0430\u0444\u0456\u043A \u0456 \u0430\u0434\u0440\u0435\u0441\u0430 \u0432\u0456\u0434\u0434\u0456\u043B\u0443 \u043F\u0440\u043E\u0434\u0430\u0436\u0443."
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(TextField, {
    label: "\u041D\u0430\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    value: k.eyebrow,
    onChange: s('eyebrow')
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    value: k.title,
    onChange: s('title')
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(TextField, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D (\u044F\u043A \u043F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438)",
    value: k.phone,
    onChange: s('phone')
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043B\u044F \u0434\u0437\u0432\u0456\u043D\u043A\u0430",
    value: k.phoneRaw,
    hint: "\u041B\u0438\u0448\u0435 \u0446\u0438\u0444\u0440\u0438, \u043D\u0430\u043F\u0440. 380954556671",
    onChange: s('phoneRaw')
  })), /*#__PURE__*/React.createElement(TextField, {
    label: "\u0413\u0440\u0430\u0444\u0456\u043A \u0440\u043E\u0431\u043E\u0442\u0438",
    value: k.hours,
    onChange: s('hours')
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u0410\u0434\u0440\u0435\u0441\u0430",
    value: k.address,
    multiline: true,
    rows: 2,
    onChange: s('address')
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u0438 \u0442\u0430 \u043C\u0435\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u0438"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(TextField, {
    label: "Google \u043C\u0430\u0440\u0448\u0440\u0443\u0442",
    value: k.googleRoute,
    onChange: s('googleRoute')
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Waze \u043C\u0430\u0440\u0448\u0440\u0443\u0442",
    value: k.wazeRoute,
    onChange: s('wazeRoute')
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(TextField, {
    label: "WhatsApp",
    value: k.whatsapp,
    onChange: s('whatsapp')
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Telegram",
    value: k.telegram,
    onChange: s('telegram')
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(TextField, {
    label: "Viber",
    value: k.viber,
    onChange: s('viber')
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Instagram",
    value: k.instagram,
    onChange: s('instagram')
  })), /*#__PURE__*/React.createElement(TextField, {
    label: "TikTok",
    value: k.tiktok,
    onChange: s('tiktok')
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "\u0424\u043E\u0442\u043E \u0432\u0456\u0434\u0434\u0456\u043B\u0443 \u043F\u0440\u043E\u0434\u0430\u0436\u0443"
  }, /*#__PURE__*/React.createElement(PhotoList, {
    label: "\u0424\u043E\u0442\u043E (\u043F\u0435\u0440\u0435\u043C\u0438\u043A\u0430\u044E\u0442\u044C\u0441\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0456)",
    photos: k.officePhotos,
    onChange: p => up('contacts', {
      ...k,
      officePhotos: p
    })
  })));
}

/* ── Файли ── */
function FilesEditor({
  c,
  up
}) {
  const files = c.files || [];
  const ref = React.useRef(null);
  const setItem = (i, key, v) => {
    const n = [...files];
    n[i] = {
      ...n[i],
      [key]: v
    };
    up('files', n);
  };
  const del = i => up('files', files.filter((_, x) => x !== i));
  const pick = fl => {
    const f = fl && fl[0];
    if (!f) return;
    const fr = new FileReader();
    fr.onload = () => up('files', [...files, {
      name: f.name,
      path: f.name,
      data: fr.result,
      size: f.size
    }]);
    fr.readAsDataURL(f);
  };
  return /*#__PURE__*/React.createElement(Panel, {
    title: "\u0424\u0430\u0439\u043B\u0438 \u0441\u0430\u0439\u0442\u0443",
    desc: "\u0421\u0445\u0435\u043C\u0438, PDF \u0442\u0430 \u0456\u043D\u0448\u0456 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438 \u0434\u043B\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F."
  }, files.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr auto',
      gap: 12,
      alignItems: 'start',
      paddingBottom: 12,
      marginBottom: 12,
      borderBottom: '1px solid var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "\u041D\u0430\u0437\u0432\u0430",
    value: f.name,
    onChange: v => setItem(i, 'name', v)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u0428\u043B\u044F\u0445 / \u0444\u0430\u0439\u043B",
    value: f.path,
    onChange: v => setItem(i, 'path', v),
    hint: f.size ? `${Math.round(f.size / 1024)} КБ (завантажено)` : 'у папці сайту'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      paddingTop: 26
    }
  }, f.data && /*#__PURE__*/React.createElement("a", {
    href: f.data,
    download: f.name
  }, /*#__PURE__*/React.createElement(MiniBtn, {
    icon: "Download",
    title: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438"
  })), /*#__PURE__*/React.createElement(MiniBtn, {
    onClick: () => del(i),
    icon: "Trash2",
    title: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
    danger: true
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: () => ref.current && ref.current.click(),
    style: ghostBtn
  }, /*#__PURE__*/React.createElement(AIcon, {
    icon: "Upload",
    size: 16
  }), " \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043B"), /*#__PURE__*/React.createElement("input", {
    ref: ref,
    type: "file",
    style: {
      display: 'none'
    },
    onChange: e => pick(e.target.files)
  }));
}
Object.assign(window, {
  Panel,
  Row,
  HeroEditor,
  AmenitiesEditor,
  NewQuarterEditor,
  SchemesEditor,
  InfraEditor,
  GalleryEditor,
  ContactsEditor,
  FilesEditor,
  DesignEditor
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/admin-sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/content.js
try { (() => {
/* Гавань — місток між адмін-панеллю та сайтом.
   Читає збережений контент (localStorage → content.json) і дає безпечний доступ
   з відкатом на початкові значення, якщо ключа немає. */

(function () {
  const LS_KEY = 'havan_site_content_v1';
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(LS_KEY) || '{}') || {};
  } catch (e) {
    saved = {};
  }

  // Шляхи в адмінці зберігаються відносно її папки — приводимо до папки сайту.
  const fixPath = p => {
    if (typeof p !== 'string' || !p) return p;
    if (p.startsWith('data:') || p.startsWith('http')) return p;
    return p.replace('../website/', '');
  };

  /** cms('hero.title', 'Запасний текст') — повертає збережене значення або запасне. */
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

  /** cmsList('gallery.photos', [...]) — масив із нормалізованими шляхами. */
  window.cmsList = function (path, fallback) {
    const v = window.cms(path, null);
    if (!Array.isArray(v) || v.length === 0) return fallback;
    return v.map(x => {
      if (typeof x === 'string') return fixPath(x);
      if (x && typeof x === 'object') {
        const o = {
          ...x
        };
        if (typeof o.photo === 'string') o.photo = fixPath(o.photo);
        if (typeof o.src === 'string') o.src = fixPath(o.src);
        if (typeof o.path === 'string') o.path = fixPath(o.path);
        return o;
      }
      return x;
    });
  };
  window.cmsHasContent = Object.keys(saved).length > 0;

  /** Числове налаштування вигляду: dz('heroVignette', 55) */
  window.dz = function (key, fallback) {
    const d = saved.design;
    if (!d || d[key] == null || d[key] === '') return fallback;
    const n = Number(d[key]);
    return Number.isNaN(n) ? d[key] : n;
  };
  /** Текстове налаштування вигляду (напр. співвідношення сторін) */
  window.dzs = function (key, fallback) {
    const d = saved.design;
    if (!d || !d[key]) return fallback;
    return d[key];
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/content.js", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website/layout.jsx
try { (() => {
/* Гавань — website UI kit · shared helpers + header/hero/footer.
   Exports to window for index.html to compose. */

const DS = window.DesignSystem_0f1a06;

// Lucide icon helper
function Icon({
  icon,
  size = 20,
  stroke = 2,
  style
}) {
  let d = window.lucide && lucide.icons[icon];
  if (!d) return null;
  if (d[0] === 'svg' && Array.isArray(d[2])) d = d[2];
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style
  }, d.map((c, i) => React.createElement(c[0], {
    ...c[1],
    key: i
  })));
}
const NAV = [['Про містечко', 'about'], ['Схема', 'plots'], ['Інфраструктура', 'infra'], ['Галерея', 'gallery'], ['Контакти', 'contact']];
function SiteHeader({
  onNav,
  solid
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('[data-scroll]') || window;
    const onScroll = () => setScrolled((el.scrollTop || window.scrollY) > 24);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);
  const dark = !solid && !scrolled;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: dark ? 'transparent' : 'rgba(11,24,23,0.82)',
      backdropFilter: dark ? 'none' : 'saturate(180%) blur(12px)',
      borderBottom: dark ? '1px solid transparent' : '1px solid rgba(255,255,255,0.08)',
      transition: 'all var(--dur-base) var(--ease-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 96,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('top'),
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-light.svg",
    alt: "\u0413\u0430\u0432\u0430\u043D\u044C",
    style: {
      height: 74
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, NAV.map(([label, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => onNav(id),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.9375rem',
      fontWeight: 500,
      color: 'var(--cream-50)',
      letterSpacing: '0.01em'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: 'tel:+' + cms('contacts.phoneRaw', '380954556671'),
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '0.9375rem',
      color: 'var(--cream-50)',
      whiteSpace: 'nowrap'
    }
  }, cms('contacts.phone', '+38 095 455 66 71')), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "accent",
    size: "sm",
    onClick: () => onNav('new-quarter'),
    style: {
      transition: 'box-shadow var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = 'inset 0 64px 0 var(--accent-strong)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = '';
    }
  }, "\u041D\u043E\u0432\u0438\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B"))));
}
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero",
    style: {
      position: 'relative',
      marginTop: -96,
      paddingTop: 96,
      color: 'var(--cream-50)',
      overflow: 'hidden',
      minHeight: dz('heroHeight', 88) + 'vh',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      background: `url(${cms('hero.photo', '../../assets/photos/hero-desna.jpg')}) center ${dz('heroFocus', 32)}%/cover no-repeat`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: `radial-gradient(ellipse 70% 75% at 50% 48%, transparent 28%, rgba(7,17,15,${dz('heroVignette', 55) / 100}) 70%, rgba(5,13,12,${Math.min(0.97, dz('heroVignette', 55) / 100 + 0.37)}) 100%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: `linear-gradient(90deg, rgba(5,13,12,${dz('heroSideShade', 78) / 100}) 0%, rgba(5,13,12,${dz('heroSideShade', 78) / 200}) 32%, transparent 58%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: `rgba(5,13,12,${Math.max(0, dz('heroOverlay', 62) - 62) / 100})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: 'clamp(4rem,8vw,7rem) var(--gutter) clamp(5rem,9vw,8rem)',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-in",
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '0.8125rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--sand-300)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1.5,
      background: 'currentColor',
      opacity: 0.7
    }
  }), cms('hero.eyebrow', 'Котеджне містечко Гавань')), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.75rem, 5.2vw, 4.5rem)',
      color: 'var(--cream-50)',
      margin: '20px 0 0',
      lineHeight: 1.04
    }
  }, cms('hero.title', 'Ваш власний берег'), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--sand-300)'
    }
  }, cms('hero.titleAccent', 'Десни'))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.25rem',
      lineHeight: 1.6,
      color: 'var(--text-on-dark-mut)',
      margin: '24px 0 0',
      maxWidth: 520
    }
  }, cms('hero.subtitle', 'Сучасне котеджне містечко на березі річки Десна')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 36,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      icon: "ArrowRight",
      size: 18
    }),
    onClick: () => onNav('plots'),
    style: {
      transition: 'box-shadow var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = 'inset 0 72px 0 var(--accent-strong)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = '';
    }
  }, cms('hero.cta1', 'Обрати ділянку')), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('gallery'),
    style: {
      color: 'var(--cream-50)',
      borderColor: 'rgba(255,255,255,0.4)',
      transition: 'box-shadow var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = 'inset 0 -64px 0 var(--accent)';
      e.currentTarget.style.color = 'var(--ink-900)';
      e.currentTarget.style.borderColor = 'var(--accent)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.color = 'var(--cream-50)';
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
      e.currentTarget.style.transform = '';
    }
  }, cms('hero.cta2', 'Містечко з висоти'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: 48
    }
  }, cmsList('hero.stats', [{
    value: 'На воді',
    label: 'ділянки першої лінії'
  }, {
    value: 'Власний',
    label: 'пляж · набережна · спуск човнів'
  }, {
    value: '24/7',
    label: 'охорона та відеонагляд'
  }]).map(({
    value: v,
    label: l
  }, si) => /*#__PURE__*/React.createElement("div", {
    key: si
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2.25rem',
      lineHeight: 1,
      color: 'var(--cream-50)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.8125rem',
      color: 'var(--text-on-dark-mut)',
      marginTop: 8,
      maxWidth: 150
    }
  }, l)))))));
}
function SiteFooter({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--cream-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: 'var(--sp-9) var(--gutter) var(--sp-6)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-light.svg",
    alt: "\u0413\u0430\u0432\u0430\u043D\u044C",
    style: {
      height: 64
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(251,248,242,0.6)',
      fontSize: '0.9375rem',
      marginTop: 16,
      maxWidth: 320
    }
  }, "\u0421\u0443\u0447\u0430\u0441\u043D\u0435 \u043A\u043E\u0442\u0435\u0434\u0436\u043D\u0435 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E \u043D\u0430 \u043C\u0430\u043B\u044C\u043E\u0432\u043D\u0438\u0447\u043E\u043C\u0443 \u0431\u0435\u0440\u0435\u0437\u0456 \u0414\u0435\u0441\u043D\u0438. \u041F\u0440\u043E\u0434\u0430\u0436 \u0434\u0456\u043B\u044F\u043D\u043E\u043A \u0437 \u0432\u043B\u0430\u0441\u043D\u0438\u043C \u0432\u0438\u0445\u043E\u0434\u043E\u043C \u0434\u043E \u0432\u043E\u0434\u0438.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: '0.8125rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--sand-300)',
      marginBottom: 14
    }
  }, "\u0420\u043E\u0437\u0434\u0456\u043B\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, NAV.map(([label, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => onNav(id),
    style: {
      cursor: 'pointer',
      color: 'rgba(251,248,242,0.78)',
      fontSize: '0.9375rem'
    }
  }, label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: '0.8125rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--sand-300)',
      marginBottom: 14
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      color: 'rgba(251,248,242,0.78)',
      fontSize: '0.9375rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "Phone",
    size: 16
  }), " ", cms('contacts.phone', '+38 095 455 66 71')), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "MapPin",
    size: 16
  }), " ", cms('contacts.address', 'Київська обл., Вишгородський р-н, с. Новосілки, 14 км від Києва'))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '20px var(--gutter)',
      display: 'flex',
      justifyContent: 'space-between',
      color: 'rgba(251,248,242,0.45)',
      fontSize: '0.8125rem'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 \u0413\u0430\u0432\u0430\u043D\u044C. \u0412\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u0456."), /*#__PURE__*/React.createElement("span", null, "\u041A\u043E\u0442\u0435\u0434\u0436\u043D\u0435 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E \u043D\u0430 \u0414\u0435\u0441\u043D\u0456"))));
}
Object.assign(window, {
  Icon,
  SiteHeader,
  Hero,
  SiteFooter,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/layout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/layout.standalone.jsx
try { (() => {
/* Гавань — website UI kit · shared helpers + header/hero/footer.
   Exports to window for index.html to compose. */

const DS = window.DesignSystem_0f1a06;

// Lucide icon helper
function Icon({
  icon,
  size = 20,
  stroke = 2,
  style
}) {
  let d = window.lucide && lucide.icons[icon];
  if (!d) return null;
  if (d[0] === 'svg' && Array.isArray(d[2])) d = d[2];
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style
  }, d.map((c, i) => React.createElement(c[0], {
    ...c[1],
    key: i
  })));
}
const NAV = [['Про містечко', 'about'], ['Схема', 'plots'], ['Інфраструктура', 'infra'], ['Галерея', 'gallery'], ['Контакти', 'contact']];
function SiteHeader({
  onNav,
  solid
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('[data-scroll]') || window;
    const onScroll = () => setScrolled((el.scrollTop || window.scrollY) > 24);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);
  const dark = !solid && !scrolled;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: dark ? 'transparent' : 'rgba(11,24,23,0.82)',
      backdropFilter: dark ? 'none' : 'saturate(180%) blur(12px)',
      borderBottom: dark ? '1px solid transparent' : '1px solid rgba(255,255,255,0.08)',
      transition: 'all var(--dur-base) var(--ease-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 96,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('top'),
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.logoLight,
    alt: "\u0413\u0430\u0432\u0430\u043D\u044C",
    style: {
      height: 74
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, NAV.map(([label, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => onNav(id),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.9375rem',
      fontWeight: 500,
      color: 'var(--cream-50)',
      letterSpacing: '0.01em'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+380954556671",
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '0.9375rem',
      color: 'var(--cream-50)',
      whiteSpace: 'nowrap'
    }
  }, "+38 095 455 66 71"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "accent",
    size: "sm",
    onClick: () => onNav('contact')
  }, "\u0417\u0430\u043B\u0438\u0448\u0438\u0442\u0438 \u0437\u0430\u044F\u0432\u043A\u0443"))));
}
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero",
    style: {
      position: 'relative',
      marginTop: -96,
      paddingTop: 96,
      color: 'var(--cream-50)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      background: 'url(' + window.__resources.heroImg + ') center 32%/cover no-repeat'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: 'radial-gradient(ellipse 70% 75% at 50% 48%, transparent 28%, rgba(7,17,15,0.55) 70%, rgba(5,13,12,0.92) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: 'linear-gradient(90deg, rgba(5,13,12,0.78) 0%, rgba(5,13,12,0.42) 32%, transparent 58%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: 'clamp(4rem,8vw,7rem) var(--gutter) clamp(5rem,9vw,8rem)',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-in",
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '0.8125rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--sand-300)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1.5,
      background: 'currentColor',
      opacity: 0.7
    }
  }), "\u041A\u043E\u0442\u0435\u0434\u0436\u043D\u0435 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E \u0413\u0430\u0432\u0430\u043D\u044C"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.75rem, 5.2vw, 4.5rem)',
      color: 'var(--cream-50)',
      margin: '20px 0 0',
      lineHeight: 1.04
    }
  }, "\u0412\u0430\u0448 \u0432\u043B\u0430\u0441\u043D\u0438\u0439 \u0431\u0435\u0440\u0435\u0433 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--sand-300)'
    }
  }, "\u0414\u0435\u0441\u043D\u0438")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.25rem',
      lineHeight: 1.6,
      color: 'var(--text-on-dark-mut)',
      margin: '24px 0 0',
      maxWidth: 520
    }
  }, "\u0421\u0443\u0447\u0430\u0441\u043D\u0435 \u043A\u043E\u0442\u0435\u0434\u0436\u043D\u0435 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E \u043D\u0430 \u0431\u0435\u0440\u0435\u0437\u0456 \u0440\u0456\u0447\u043A\u0438 \u0414\u0435\u0441\u043D\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 36,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      icon: "ArrowRight",
      size: 18
    }),
    onClick: () => onNav('plots')
  }, "\u041E\u0431\u0440\u0430\u0442\u0438 \u0434\u0456\u043B\u044F\u043D\u043A\u0443"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('contact'),
    style: {
      color: 'var(--cream-50)',
      borderColor: 'rgba(255,255,255,0.4)'
    }
  }, "\u0417\u0430\u043C\u043E\u0432\u0438\u0442\u0438 \u0434\u0437\u0432\u0456\u043D\u043E\u043A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: 48
    }
  }, [['На воді', '', 'ділянки першої лінії'], ['Власний', '', 'пляж · набережна · спуск човнів'], ['24/7', '', 'охорона та відеонагляд']].map(([v, s, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2.25rem',
      lineHeight: 1,
      color: 'var(--cream-50)'
    }
  }, v, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1rem',
      color: 'var(--sand-300)',
      marginLeft: 4
    }
  }, s)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.8125rem',
      color: 'var(--text-on-dark-mut)',
      marginTop: 8,
      maxWidth: 150
    }
  }, l)))))));
}
function SiteFooter({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--cream-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: 'var(--sp-9) var(--gutter) var(--sp-6)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.logoLight,
    alt: "\u0413\u0430\u0432\u0430\u043D\u044C",
    style: {
      height: 64
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(251,248,242,0.6)',
      fontSize: '0.9375rem',
      marginTop: 16,
      maxWidth: 320
    }
  }, "\u0421\u0443\u0447\u0430\u0441\u043D\u0435 \u043A\u043E\u0442\u0435\u0434\u0436\u043D\u0435 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E \u043D\u0430 \u043C\u0430\u043B\u044C\u043E\u0432\u043D\u0438\u0447\u043E\u043C\u0443 \u0431\u0435\u0440\u0435\u0437\u0456 \u0414\u0435\u0441\u043D\u0438. \u041F\u0440\u043E\u0434\u0430\u0436 \u0434\u0456\u043B\u044F\u043D\u043E\u043A \u0437 \u0432\u043B\u0430\u0441\u043D\u0438\u043C \u0432\u0438\u0445\u043E\u0434\u043E\u043C \u0434\u043E \u0432\u043E\u0434\u0438.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: '0.8125rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--sand-300)',
      marginBottom: 14
    }
  }, "\u0420\u043E\u0437\u0434\u0456\u043B\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, NAV.map(([label, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => onNav(id),
    style: {
      cursor: 'pointer',
      color: 'rgba(251,248,242,0.78)',
      fontSize: '0.9375rem'
    }
  }, label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: '0.8125rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--sand-300)',
      marginBottom: 14
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      color: 'rgba(251,248,242,0.78)',
      fontSize: '0.9375rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "Phone",
    size: 16
  }), " +38 095 455 66 71"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "MapPin",
    size: 16
  }), " \u041A\u0438\u0457\u0432\u0441\u044C\u043A\u0430 \u043E\u0431\u043B., \u0412\u0438\u0448\u0433\u043E\u0440\u043E\u0434\u0441\u044C\u043A\u0438\u0439 \u0440-\u043D, \u0441. \u041D\u043E\u0432\u043E\u0441\u0456\u043B\u043A\u0438, 14 \u043A\u043C \u0432\u0456\u0434 \u041A\u0438\u0454\u0432\u0430")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '20px var(--gutter)',
      display: 'flex',
      justifyContent: 'space-between',
      color: 'rgba(251,248,242,0.45)',
      fontSize: '0.8125rem'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 \u0413\u0430\u0432\u0430\u043D\u044C. \u0412\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u0456."), /*#__PURE__*/React.createElement("span", null, "\u041A\u043E\u0442\u0435\u0434\u0436\u043D\u0435 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E \u043D\u0430 \u0414\u0435\u0441\u043D\u0456"))));
}
Object.assign(window, {
  Icon,
  SiteHeader,
  Hero,
  SiteFooter,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/layout.standalone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
/* Гавань — website UI kit · page sections. Exports to window. */

const DSx = window.DesignSystem_0f1a06;
const PLOTS = [{
  id: 14,
  title: 'Ділянка №14',
  status: 'free',
  line: '1-а лінія',
  area: '14 соток',
  price: 'за запитом',
  features: ['Власний берег', 'Газ + електрика', 'Місце для човна']
}, {
  id: 21,
  title: 'Ділянка №21',
  status: 'free',
  line: '1-а лінія',
  area: '12 соток',
  price: 'за запитом',
  features: ['Кутова', 'Оптоволокно', 'Асфальт до межі']
}, {
  id: 8,
  title: 'Ділянка №8',
  status: 'reserved',
  line: '1-а лінія',
  area: '16 соток',
  price: 'за запитом',
  features: ['Широкий берег', 'Газ + електрика', 'Пляж поруч']
}, {
  id: 30,
  title: 'Ділянка №30',
  status: 'free',
  line: '2-а лінія',
  area: '10 соток',
  price: 'за запитом',
  features: ['Тиха вулиця', 'Всі комунікації', 'Поруч пляж']
}, {
  id: 5,
  title: 'Ділянка №5',
  status: 'sold',
  line: '1-а лінія',
  area: '18 соток',
  price: 'продано',
  features: ['Панорама річки', 'Газ + електрика', 'Причал']
}, {
  id: 33,
  title: 'Ділянка №33',
  status: 'free',
  line: '2-а лінія',
  area: '8 соток',
  price: 'за запитом',
  features: ['Компактна', 'Оптоволокно', 'Поруч в’їзд']
}];
const AMENITIES_DEFAULT = [['Waves', 'Дім біля води', 'Приватний берег на кожній ділянці першої лінії.'], ['Sailboat', 'Свій човен на ділянці', 'Паркуйте човен біля свого подвір’я.'], ['Umbrella', 'Власний пляж', 'Доглянутий піщаний пляж лише для мешканців містечка.'], ['Baby', 'Дитячий майданчик', 'Безпечний простір для ігор та відпочинку дітей.'], ['Goal', 'Футбольне поле', 'Власне поле для гри та активного дозвілля мешканців.'], ['Volleyball', 'Волейбольне поле', 'Майданчик для волейболу просто неба біля води.']];
const AMENITIES = (() => {
  const items = cms('amenities.items', null);
  if (!Array.isArray(items) || !items.length) return AMENITIES_DEFAULT;
  const fix = p => typeof p === 'string' ? p.replace('../website/', '') : p;
  return items.map((it, i) => [AMENITIES_DEFAULT[i] && AMENITIES_DEFAULT[i][0] || 'Check', it.title || '', it.text || '', fix(it.photo) || '']);
})();
function SectionShell({
  id,
  bg,
  children,
  pad
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    "data-screen-label": id,
    style: {
      background: bg || 'transparent',
      padding: pad || dz('sectionSpacing', 100) + 'px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      maxWidth: dz('contentWidth', 1200),
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, children));
}
function Amenities() {
  return /*#__PURE__*/React.createElement(SectionShell, {
    id: "about"
  }, /*#__PURE__*/React.createElement(DSx.SectionHeading, {
    eyebrow: cms('amenities.eyebrow', 'Чому Гавань'),
    title: cms('amenities.title', 'Все для життя біля води'),
    lead: cms('amenities.lead', 'Ми створили містечко, де природа, приватність і комфорт поєднані на березі річки.'),
    style: {
      marginBottom: 'var(--sp-8)'
    }
  }), /*#__PURE__*/React.createElement(AmenitiesCarousel, null));
}
const AMENITY_IMG = AMENITIES.map(a => a[3]).filter(Boolean);
function AmenitiesCarousel() {
  const perView = dz('amenityPerView', 3);
  const n = AMENITIES.length;
  const maxI = Math.max(0, n - perView);
  const [i, setI] = React.useState(0);
  const go = d => setI(p => Math.min(maxI, Math.max(0, p + d)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: `${n / perView * 100}%`,
      transform: `translateX(-${i * (100 / n)}%)`,
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }, AMENITIES.map(([icon, title, text], idx) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      width: `${100 / n}%`,
      padding: '0 calc(var(--sp-5) / 2) var(--sp-2)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: dz('cardRadius', 0),
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      height: dz('amenityCardHeight', 340),
      background: `url(${AMENITY_IMG[idx % AMENITY_IMG.length]}) center/cover no-repeat`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(7,17,15,0.05) 30%, rgba(7,17,15,0.45) 60%, rgba(5,13,12,0.88) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '1.125rem',
      color: 'var(--cream-50)',
      marginBottom: '0.4rem'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.9375rem',
      color: 'rgba(244,239,230,0.82)',
      lineHeight: 1.5
    }
  }, text))))))), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(-1),
    disabled: i === 0,
    "aria-label": "\u041D\u0430\u0437\u0430\u0434",
    style: {
      ...navBtn('left'),
      left: -8,
      opacity: i === 0 ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronLeft",
    size: 22
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(1),
    disabled: i === maxI,
    "aria-label": "\u0412\u043F\u0435\u0440\u0435\u0434",
    style: {
      ...navBtn('right'),
      right: -8,
      opacity: i === maxI ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronRight",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      marginTop: 'var(--sp-5)'
    }
  }, Array.from({
    length: maxI + 1
  }).map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    onClick: () => setI(idx),
    "aria-label": `Слайд ${idx + 1}`,
    style: {
      width: idx === i ? 26 : 9,
      height: 9,
      borderRadius: 0,
      border: 'none',
      cursor: 'pointer',
      background: idx === i ? 'var(--accent)' : 'var(--border-strong)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }))));
}
function PhotoCarousel({
  images
}) {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const n = images.length;
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI(p => (p + 1) % n), 4000);
    return () => clearInterval(t);
  }, [paused, n]);
  const go = d => setI(p => (p + d + n) % n);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    style: {
      position: 'relative',
      alignSelf: 'stretch',
      minHeight: 480,
      borderRadius: dz('cardRadius', 0),
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)',
      background: '#0E2322'
    }
  }, images.map((src, idx) => /*#__PURE__*/React.createElement("div", {
    key: src,
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${src}) center/cover no-repeat`,
      opacity: idx === i ? 1 : 0,
      transition: 'opacity var(--dur-slow) var(--ease-soft)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, transparent 62%, rgba(7,17,15,0.55))'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(-1),
    "aria-label": "\u041D\u0430\u0437\u0430\u0434",
    style: navBtn('left')
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronLeft",
    size: 22
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(1),
    "aria-label": "\u0412\u043F\u0435\u0440\u0435\u0434",
    style: navBtn('right')
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronRight",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 16,
      display: 'flex',
      justifyContent: 'center',
      gap: 8
    }
  }, images.map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    onClick: () => setI(idx),
    "aria-label": `Слайд ${idx + 1}`,
    style: {
      width: idx === i ? 26 : 9,
      height: 9,
      borderRadius: 0,
      border: 'none',
      cursor: 'pointer',
      background: idx === i ? 'var(--sand-400)' : 'rgba(255,255,255,0.55)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }))));
}
function navBtn(side) {
  return {
    position: 'absolute',
    top: '50%',
    [side]: 12,
    transform: 'translateY(-50%)',
    width: 44,
    height: 44,
    borderRadius: 0,
    cursor: 'pointer',
    background: 'rgba(11,24,23,0.5)',
    border: '1px solid rgba(255,255,255,0.28)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)'
  };
}
function Plots({
  onOpen
}) {
  return /*#__PURE__*/React.createElement(SectionShell, {
    id: "plots",
    bg: "var(--surface-sunken)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement(DSx.SectionHeading, {
    eyebrow: cms('schemes.eyebrow', 'Генплан містечка'),
    title: cms('schemes.title', 'Схема ділянок'),
    lead: cms('schemes.lead', 'Актуальна схема котеджного містечка.')
  }), /*#__PURE__*/React.createElement("a", {
    href: "assets/havan-scheme.jpg",
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(DSx.Button, {
    variant: "secondary",
    size: "md",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      icon: "Maximize2",
      size: 16
    })
  }, "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043D\u0430 \u0432\u0435\u0441\u044C \u0435\u043A\u0440\u0430\u043D"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-5)',
      alignItems: 'stretch'
    }
  }, [[cms('schemes.items.0.src', 'assets/havan-satellite-2.jpg'), 'Розташування ділянок КМ Гавань на супутниковій карті', cms('schemes.items.0.cap', 'Розташування на карті')], [cms('schemes.items.1.src', 'assets/havan-genplan-2.jpg'), 'Детальна схема ділянок КМ Гавань', cms('schemes.items.1.cap', 'Детальна схема ділянок')]].map(([src, alt, cap]) => /*#__PURE__*/React.createElement(SchemeImage, {
    key: src,
    src: src,
    alt: alt,
    cap: cap
  }))), /*#__PURE__*/React.createElement(FileDownloads, null));
}
function FileDownloads() {
  const files = (cmsList('files', []) || []).filter(f => f && f.name && (f.data || f.path));
  if (!files.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-6)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--sp-3)'
    }
  }, files.map((f, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: f.data || f.path,
    target: "_blank",
    rel: "noopener",
    download: f.data ? f.name : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      textDecoration: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.875rem',
      fontWeight: 600,
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      padding: '10px 16px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "Download",
    size: 16
  }), " ", f.name)));
}
function SchemeImage({
  src,
  alt,
  cap
}) {
  const [zoom, setZoom] = React.useState(false);
  const [pos, setPos] = React.useState({
    x: 50,
    y: 50
  });
  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({
      x: (e.clientX - r.left) / r.width * 100,
      y: (e.clientY - r.top) / r.height * 100
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      borderRadius: dz('cardRadius', 0),
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: src,
    target: "_blank",
    rel: "noopener",
    title: "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0443 \u043F\u043E\u0432\u043D\u043E\u043C\u0443 \u0440\u043E\u0437\u043C\u0456\u0440\u0456",
    onMouseEnter: () => setZoom(true),
    onMouseLeave: () => setZoom(false),
    onMouseMove: onMove,
    style: {
      display: 'block',
      overflow: 'hidden',
      cursor: 'zoom-in',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: zoom ? `scale(${dz('schemeZoom', 4.5)})` : 'scale(1)',
      transformOrigin: `${pos.x}% ${pos.y}%`,
      transition: zoom ? 'transform 80ms linear' : 'transform var(--dur-base) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      padding: '12px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.875rem',
      fontWeight: 600,
      color: 'var(--sand-300)',
      background: `rgba(26,36,34,${Math.max(0.15, dz('captionShade', 58) / 100)})`
    }
  }, cap));
}
function Infrastructure() {
  const itemsDefault = [['Cable', 'Готові комунікації', 'Електрика, газ та оптоволокно до ділянки.'], ['Route', 'Асфальтовані вулиці', 'Зручний під’їзд у будь-яку погоду.'], ['ShieldCheck', 'В’їзд по перепустках', 'Закрита територія лише для мешканців і гостей.'], ['Lightbulb', 'Освітлення вулиць', 'Затишне вечірнє освітлення всіх вулиць.'], ['Video', 'Відеонагляд', 'Цілодобове відеоспостереження по всій території містечка.'], ['Sparkles', 'Обслуговування території', 'Чищення доріг від снігу та регулярний вивіз сміття.']];
  const saved = cms('infrastructure.items', null);
  const items = Array.isArray(saved) && saved.length ? saved.map(it => [it.icon || 'Check', it.title || '', it.text || '']) : itemsDefault;
  return /*#__PURE__*/React.createElement(SectionShell, {
    id: "infra",
    bg: "var(--surface-inverse)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'var(--sp-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DSx.SectionHeading, {
    tone: "light",
    eyebrow: cms('infrastructure.eyebrow', 'Інфраструктура та сервіс'),
    title: cms('infrastructure.title', 'Містечко, яке про вас піклується'),
    lead: cms('infrastructure.lead', 'Власна служба експлуатації цілий рік підтримує комфорт і безпеку на території.')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36,
      marginTop: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement(DSx.Stat, {
    value: "100",
    suffix: "%",
    label: "\u0434\u0456\u043B\u044F\u043D\u043E\u043A \u0437 \u043A\u043E\u043C\u0443\u043D\u0456\u043A\u0430\u0446\u0456\u044F\u043C\u0438",
    tone: "sand"
  }), /*#__PURE__*/React.createElement(DSx.Stat, {
    value: "365",
    label: "\u0434\u043D\u0456\u0432 \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u0440\u0456\u043A",
    tone: "sand"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-5)'
    }
  }, items.map(([icon, title, text]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 'var(--r-lg)',
      padding: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 44,
      height: 44,
      borderRadius: 'var(--r-md)',
      background: 'rgba(194,154,87,0.16)',
      color: 'var(--sand-300)',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '1rem',
      color: 'var(--cream-50)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.875rem',
      color: 'var(--text-on-dark-mut)',
      marginTop: 6,
      lineHeight: 1.5
    }
  }, text))))));
}
const GALLERY_DEFAULT = [['../../assets/photos/g-01.jpg', 'Панорама річки та ділянок'], ['../../assets/photos/g-02.jpg', 'Котеджі на березі водойми'], ['../../assets/photos/g-03.jpg', 'Сучасна забудова біля води'], ['../../assets/photos/g-04.jpg', 'Ділянки вздовж каналу'], ['../../assets/photos/g-06.jpg', 'Панорама котеджного містечка'], ['../../assets/photos/g-07.jpg', 'Береги каналу з висоти']];
const GALLERY = (() => {
  const p = cmsList('gallery.photos', null);
  if (!p) return GALLERY_DEFAULT;
  return p.map((src, i) => [src, GALLERY_DEFAULT[i] && GALLERY_DEFAULT[i][1] || 'Фото містечка']);
})();
function NewQuarterGallery() {
  const imgs = cmsList('newQuarter.photos', null) || ['../../assets/photos/nq-1.jpg', '../../assets/photos/nq-2.jpg', '../../assets/photos/nq-3.jpg', '../../assets/photos/nq-4.jpg', '../../assets/photos/nq-5.jpg', '../../assets/photos/nq-6.jpg', '../../assets/photos/nq-7.jpg', '../../assets/photos/nq-8.jpg', '../../assets/photos/nq-9.jpg'];
  const [i, setI] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: dzs('nqAspect', '21/9'),
      borderRadius: dz('cardRadius', 0),
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)'
    }
  }, imgs.map((src, idx) => /*#__PURE__*/React.createElement("div", {
    key: src,
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${src}) center/cover no-repeat`,
      opacity: idx === i ? 1 : 0,
      transition: 'opacity var(--dur-slow) var(--ease-soft)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 'var(--sp-5)',
      left: 'var(--sp-5)',
      background: 'rgba(7,17,15,0.58)',
      backdropFilter: 'blur(2px)',
      padding: '8px 14px',
      borderRadius: 'var(--r-sm)',
      color: 'var(--sand-300)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '0.9375rem',
      letterSpacing: '0.04em'
    }
  }, i < cms('newQuarter.realCount', 3) ? 'Реальні фото нового кварталу' : 'Візуалізація нового кварталу'), /*#__PURE__*/React.createElement("button", {
    onClick: () => setI(p => (p - 1 + imgs.length) % imgs.length),
    "aria-label": "\u041D\u0430\u0437\u0430\u0434",
    style: {
      ...navBtn('left'),
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronLeft",
    size: 22
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setI(p => (p + 1) % imgs.length),
    "aria-label": "\u0412\u043F\u0435\u0440\u0435\u0434",
    style: {
      ...navBtn('right'),
      right: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronRight",
    size: 22
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)'
    }
  }, imgs.map((src, idx) => /*#__PURE__*/React.createElement("button", {
    key: src,
    onClick: () => setI(idx),
    "aria-label": `Фото ${idx + 1}`,
    style: {
      border: idx === i ? '2px solid var(--accent)' : '2px solid transparent',
      padding: 0,
      cursor: 'pointer',
      width: dz('nqThumbW', 92),
      height: Math.round(dz('nqThumbW', 92) * 0.63),
      flex: 'none',
      borderRadius: 'var(--r-md)',
      overflow: 'hidden',
      background: `url(${src}) center/cover no-repeat`,
      opacity: idx === i ? 1 : 0.62,
      transition: 'opacity var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = 1;
    },
    onMouseLeave: e => {
      if (idx !== i) e.currentTarget.style.opacity = 0.62;
    }
  }))));
}
function NewQuarter() {
  return /*#__PURE__*/React.createElement(SectionShell, {
    id: "new-quarter"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.85rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '0.8125rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 1.5,
      background: 'currentColor',
      opacity: 0.6
    }
  }), cms('newQuarter.eyebrow', 'Новий квартал')), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(1.4rem, 2.9vw, 2.4rem)',
      margin: 0,
      whiteSpace: 'nowrap'
    }
  }, cms('newQuarter.title', 'Ми відкрили новий квартал на продаж')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      maxWidth: 720
    }
  }, cms('newQuarter.lead', 'Ділянки з власним виходом на затоку Десни. Перша лінія води, простір і приватність — нова черга вже доступна для бронювання.'))), /*#__PURE__*/React.createElement(NewQuarterGallery, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#plots",
    onClick: e => {
      e.preventDefault();
      const el = document.getElementById('plots');
      if (el) window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 60,
        behavior: 'smooth'
      });
    },
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(DSx.Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      icon: "ArrowRight",
      size: 18
    }),
    style: {
      transition: 'box-shadow var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = 'inset 0 72px 0 var(--accent-strong)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = '';
    }
  }, cms('newQuarter.cta', 'Дізнатися більше'))))));
}
function Gallery() {
  const [i, setI] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement(SectionShell, {
    id: "gallery"
  }, /*#__PURE__*/React.createElement(DSx.SectionHeading, {
    eyebrow: cms('gallery.eyebrow', 'Галерея'),
    title: cms('gallery.title', 'Погляньте на містечко з висоти'),
    lead: cms('gallery.lead', 'Реальні аерофото Гавані — річка, ділянки та благоустрій території.'),
    style: {
      marginBottom: 'var(--sp-7)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(true),
    style: {
      position: 'relative',
      height: dz('galleryHeight', 460),
      borderRadius: dz('cardRadius', 0),
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)',
      cursor: 'zoom-in'
    }
  }, GALLERY.map(([src, alt], idx) => /*#__PURE__*/React.createElement("div", {
    key: src,
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${src}) center/cover no-repeat`,
      opacity: idx === i ? 1 : 0,
      transition: 'opacity var(--dur-slow) var(--ease-soft)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, transparent 62%, rgba(7,17,15,0.55))',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 20,
      bottom: 16,
      color: 'var(--cream-50)',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.9375rem',
      fontWeight: 600
    }
  }, GALLERY[i][1]), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setI(p => (p - 1 + GALLERY.length) % GALLERY.length);
    },
    "aria-label": "\u041D\u0430\u0437\u0430\u0434",
    style: {
      ...navBtn('left'),
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronLeft",
    size: 22
  })), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setI(p => (p + 1) % GALLERY.length);
    },
    "aria-label": "\u0412\u043F\u0435\u0440\u0435\u0434",
    style: {
      ...navBtn('right'),
      right: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronRight",
    size: 22
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      flexWrap: 'wrap'
    }
  }, GALLERY.map(([src], idx) => /*#__PURE__*/React.createElement("button", {
    key: src,
    onClick: () => setI(idx),
    "aria-label": `Фото ${idx + 1}`,
    style: {
      border: idx === i ? '2px solid var(--accent)' : '2px solid transparent',
      padding: 0,
      cursor: 'pointer',
      width: dz('galleryThumbW', 104),
      height: Math.round(dz('galleryThumbW', 104) * 0.63),
      flex: 'none',
      borderRadius: 'var(--r-md)',
      overflow: 'hidden',
      background: `url(${src}) center/cover no-repeat`,
      opacity: idx === i ? 1 : 0.62,
      transition: 'opacity var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = 1;
    },
    onMouseLeave: e => {
      if (idx !== i) e.currentTarget.style.opacity = 0.62;
    }
  })))), open && /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(false),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 110,
      background: 'rgba(12,59,62,0.78)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 24,
      right: 24
    }
  }, /*#__PURE__*/React.createElement(DSx.IconButton, {
    variant: "outline",
    icon: /*#__PURE__*/React.createElement(Icon, {
      icon: "X",
      size: 20
    }),
    ariaLabel: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
    onClick: () => setOpen(false)
  })), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setI(o => (o + GALLERY.length - 1) % GALLERY.length);
    },
    style: {
      position: 'absolute',
      left: 24,
      background: 'rgba(255,255,255,0.14)',
      border: '1px solid rgba(255,255,255,0.3)',
      color: '#fff',
      width: 52,
      height: 52,
      borderRadius: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronLeft",
    size: 24
  })), /*#__PURE__*/React.createElement("figure", {
    onClick: e => e.stopPropagation(),
    style: {
      margin: 0,
      maxWidth: '88vw',
      maxHeight: '84vh'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: GALLERY[i][0],
    alt: GALLERY[i][1],
    style: {
      maxWidth: '88vw',
      maxHeight: '78vh',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--shadow-xl)',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      color: 'var(--cream-50)',
      textAlign: 'center',
      marginTop: 14,
      fontFamily: 'var(--font-sans)',
      fontSize: '0.9375rem'
    }
  }, GALLERY[i][1])), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setI(o => (o + 1) % GALLERY.length);
    },
    style: {
      position: 'absolute',
      right: 24,
      background: 'rgba(255,255,255,0.14)',
      border: '1px solid rgba(255,255,255,0.3)',
      color: '#fff',
      width: 52,
      height: 52,
      borderRadius: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronRight",
    size: 24
  }))));
}
function Messengers() {
  const phone = '380954556671';
  const apps = [{
    name: 'WhatsApp',
    href: cms('contacts.whatsapp', 'https://wa.me/380954556671'),
    bg: '#25D366',
    path: 'M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02zM12.04 20.13a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14 0-.31-.02-.47-.02-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z'
  }, {
    name: 'Telegram',
    href: cms('contacts.telegram', 'tg://resolve?domain=@best_4_vepr'),
    bg: '#229ED9',
    path: 'M21.94 4.5 18.6 20.2c-.25 1.11-.92 1.39-1.86.86l-5.14-3.79-2.48 2.39c-.27.27-.5.5-1.03.5l.37-5.23 9.52-8.6c.41-.37-.09-.57-.64-.2L5.04 12.9l-5.07-1.58c-1.1-.34-1.12-1.1.23-1.63L20.5 2.93c.92-.34 1.72.2 1.44 1.57z'
  }, {
    name: 'Viber',
    href: cms('contacts.viber', 'viber://chat?number=%2B380954556671'),
    bg: '#7360F2',
    path: 'M12.04 2C9.5 2 6.3 2.62 4.6 4.2 3.34 5.38 2.7 7.2 2.63 9.46c-.07 2.26-.16 6.5 3.93 7.65v1.76c0 .64.34.74.6.5l1.35-1.36c2.8.23 5.78-.34 6.12-.45 1.13-.37 1.77-1.55 2-2.66.22-1.14.36-3.27.06-4.94C16.43 4.83 13.94 2.02 12.04 2zm.13 1.43c1.6.02 3.66 2.32 3.93 5.05.25 1.4.13 3.27-.05 4.24-.18.95-.65 1.6-1.34 1.83-.3.1-3.02.62-5.5.4 0 0-1.84 2.22-2.42 2.8-.18.18-.38.16-.38-.2 0-.24.01-3 .01-3-3.46-.96-3.26-4.57-3.2-6.46.05-1.88.57-3.36 1.6-4.32 1.42-1.3 4.2-1.84 6.34-1.84zm.24 1.85a.3.3 0 0 0-.04.6c1.95.15 3.42 1.67 3.5 3.74a.3.3 0 0 0 .6-.02c-.1-2.37-1.8-4.16-4.04-4.32zm-2.86.92a.85.85 0 0 0-.5.1l-.03.02c-.36.2-.68.47-.93.8-.2.26-.3.51-.33.76-.01.14 0 .29.04.43l.02.01c.13.36.3.7.5 1.04.27.5.6.99.95 1.43.5.65 1.06 1.24 1.68 1.77.46.4.95.74 1.48 1.04.3.16.6.3.92.4.02 0 .03.02.05.02.1.04.2.06.3.06.45 0 .92-.34 1.2-.62.18-.18.3-.4.36-.65.06-.32-.1-.6-.36-.77-.3-.2-.62-.39-.93-.56-.32-.18-.6-.1-.83.13l-.46.58c-.1.12-.26.16-.4.1-1.02-.42-1.78-1.18-2.2-2.2-.06-.14-.02-.3.1-.4l.58-.46c.23-.23.3-.5.13-.83-.16-.3-.36-.6-.55-.9-.16-.24-.4-.4-.7-.43zm3.1.5a.3.3 0 0 0-.07.6c.9.2 1.32.63 1.5 1.5a.3.3 0 0 0 .59-.13c-.23-1.1-.86-1.74-1.96-1.97a.3.3 0 0 0-.06 0z'
  }, {
    name: 'Instagram',
    href: cms('contacts.instagram', 'https://www.instagram.com/friends.town.mr/'),
    bg: 'radial-gradient(circle at 30% 110%, #FED576 8%, #F47133 30%, #BC3081 60%, #4F5BD5 100%)',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.51.01-4.75.07-1.15.05-1.77.24-2.18.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.41-.35 1.03-.4 2.18-.06 1.24-.07 1.6-.07 4.75s.01 3.51.07 4.75c.05 1.15.24 1.77.4 2.18.22.55.47.94.88 1.35.41.41.8.66 1.35.88.41.16 1.03.35 2.18.4 1.24.06 1.6.07 4.75.07s3.51-.01 4.75-.07c1.15-.05 1.77-.24 2.18-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.41.35-1.03.4-2.18.06-1.24.07-1.6.07-4.75s-.01-3.51-.07-4.75c-.05-1.15-.24-1.77-.4-2.18a3.63 3.63 0 0 0-.88-1.35 3.63 3.63 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.18-.4-1.24-.06-1.6-.07-4.75-.07zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6zm0 8.74a3.44 3.44 0 1 0 0-6.88 3.44 3.44 0 0 0 0 6.88zm6.74-8.94a1.24 1.24 0 1 1-2.48 0 1.24 1.24 0 0 1 2.48 0z'
  }, {
    name: 'TikTok',
    href: cms('contacts.tiktok', 'https://www.tiktok.com/@friends.town.mr'),
    bg: '#010101',
    path: 'M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.2v12.86a2.58 2.58 0 0 1-2.58 2.5 2.58 2.58 0 0 1-2.58-2.58 2.58 2.58 0 0 1 3.4-2.45V9.9a5.8 5.8 0 0 0-.82-.06 5.78 5.78 0 1 0 5.78 5.78V8.99a7.45 7.45 0 0 0 4.36 1.4V7.18a4.28 4.28 0 0 1-3.3-1.36z'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 'var(--sp-2)'
    }
  }, apps.map(a => /*#__PURE__*/React.createElement("a", {
    key: a.name,
    href: a.href,
    target: "_blank",
    rel: "noopener",
    "aria-label": a.name,
    title: a.name,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 48,
      height: 48,
      borderRadius: 'var(--r-md)',
      background: a.bg,
      color: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: a.path
  })))));
}
function SalesOfficeGallery() {
  const imgs = cmsList('contacts.officePhotos', null) || ['../../assets/photos/sales-office.jpg', '../../assets/photos/sales-office-2.jpg'];
  const [i, setI] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: dz('cardRadius', 0),
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)',
      overflow: 'hidden',
      minHeight: dz('officeHeight', 420)
    }
  }, imgs.map((src, idx) => /*#__PURE__*/React.createElement("div", {
    key: src,
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${src}) center/cover no-repeat`,
      opacity: idx === i ? 1 : 0,
      transition: 'opacity var(--dur-slow) var(--ease-soft)'
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setI(p => (p - 1 + imgs.length) % imgs.length),
    "aria-label": "\u041D\u0430\u0437\u0430\u0434",
    style: {
      ...navBtn('left'),
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronLeft",
    size: 22
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setI(p => (p + 1) % imgs.length),
    "aria-label": "\u0412\u043F\u0435\u0440\u0435\u0434",
    style: {
      ...navBtn('right'),
      right: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronRight",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 16,
      display: 'flex',
      justifyContent: 'center',
      gap: 8
    }
  }, imgs.map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    onClick: () => setI(idx),
    "aria-label": `Фото ${idx + 1}`,
    style: {
      width: idx === i ? 26 : 9,
      height: 9,
      border: 'none',
      cursor: 'pointer',
      background: idx === i ? 'var(--sand-400)' : 'rgba(255,255,255,0.6)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }))));
}
function Contact({
  onSubmit,
  submitted
}) {
  return /*#__PURE__*/React.createElement(SectionShell, {
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DSx.SectionHeading, {
    eyebrow: cms('contacts.eyebrow', 'Контакти'),
    title: cms('contacts.title', 'Відділ продажу')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 'var(--sp-6)'
    }
  }, [['Phone', cms('contacts.phone', '+38 095 455 66 71'), 'tel:+' + cms('contacts.phoneRaw', '380954556671')], ['Clock', cms('contacts.hours', 'Щодня з 9:00 до 20:00'), null]].map(([icon, text, href]) => /*#__PURE__*/React.createElement("div", {
    key: text,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 42,
      height: 42,
      borderRadius: 'var(--r-md)',
      background: 'var(--teal-50)',
      color: 'var(--teal-700)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    size: 18
  })), href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, text) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, text))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      paddingLeft: 54
    }
  }, [['Google', cms('contacts.googleRoute', 'https://goo.gl/maps/Y7xNNyrsHFgYdYFZA')], ['Waze', cms('contacts.wazeRoute', 'https://waze.com/ul/hu8vxz0t11')]].map(([label, href]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: '0.9375rem',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, label, ":"), /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      color: 'var(--text-link)',
      fontWeight: 600
    }
  }, "\u043C\u0430\u0440\u0448\u0440\u0443\u0442 ", /*#__PURE__*/React.createElement(Icon, {
    icon: "ArrowRight",
    size: 15
  }))))), /*#__PURE__*/React.createElement(Messengers, null))), /*#__PURE__*/React.createElement(SalesOfficeGallery, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 'var(--sp-7)',
      background: 'var(--surface-card)',
      borderRadius: dz('cardRadius', 0),
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)',
      overflow: 'hidden',
      minHeight: dz('officeHeight', 420)
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "\u041A\u043E\u0442\u0435\u0434\u0436\u043D\u0435 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E \u0413\u0430\u0432\u0430\u043D\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0456",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12859.587854575731!2d30.532166124803577!3d50.58422514208461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d5745bce44c9%3A0xdf4178fad2421a1b!2z0JzQtdC20YDQtdGH0YzQtSwg0J7RgtC00LXQuyDQv9GA0L7QtNCw0LY!5e0!3m2!1suk!2sua!4v1699795128493!5m2!1suk!2sua",
    style: {
      display: 'block',
      width: '100%',
      height: '100%',
      minHeight: 420,
      border: 0
    },
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
    allowFullScreen: true
  }), /*#__PURE__*/React.createElement("a", {
    href: "https://maps.app.goo.gl/2aum38nH9zyq3h6r5",
    target: "_blank",
    rel: "noopener",
    style: {
      position: 'absolute',
      left: 16,
      bottom: 16,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(DSx.Button, {
    variant: "primary",
    size: "md",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      icon: "ExternalLink",
      size: 16
    })
  }, "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432 Google Maps"))));
}
function ContactForm({
  onSubmit
}) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [area, setArea] = React.useState('від 8 соток');
  const TELEGRAM = 'tg://resolve?domain=@best_4_vepr';
  const submit = e => {
    e.preventDefault();
    const msg = `Нова заявка з сайту «Гавань»%0A%0AІм'я: ${name || '—'}%0AТелефон: ${phone || '—'}%0AЦікавить площа: ${area}`;
    // Copy a ready-to-send message to clipboard (DM pre-fill isn't possible via tg://)
    try {
      const plain = decodeURIComponent(msg.replace(/%0A/g, '\n'));
      if (navigator.clipboard) navigator.clipboard.writeText(plain);
    } catch (err) {/* noop */}
    window.open(TELEGRAM, '_blank');
    onSubmit();
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DSx.Input, {
    label: "\u0412\u0430\u0448\u0435 \u0456\u043C'\u044F",
    placeholder: "\u041E\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440",
    icon: /*#__PURE__*/React.createElement(Icon, {
      icon: "User",
      size: 16
    }),
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(DSx.Input, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    placeholder: "+380 __ ___ __ __",
    icon: /*#__PURE__*/React.createElement(Icon, {
      icon: "Phone",
      size: 16
    }),
    value: phone,
    onChange: e => setPhone(e.target.value)
  }), /*#__PURE__*/React.createElement(DSx.Select, {
    label: "\u0426\u0456\u043A\u0430\u0432\u0438\u0442\u044C \u043F\u043B\u043E\u0449\u0430",
    options: ['від 8 соток', 'від 12 соток', 'від 15 соток', 'понад 20 соток'],
    value: area,
    onChange: e => setArea(e.target.value)
  }), /*#__PURE__*/React.createElement(DSx.Checkbox, {
    label: "\u0417\u0433\u043E\u0434\u0435\u043D \u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(DSx.Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      icon: "Send",
      size: 18
    })
  }, "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 \u0443 Telegram"));
}
function PlotModal({
  plot,
  onClose,
  onRequest
}) {
  if (!plot) return null;
  const waterBg = 'linear-gradient(160deg, #4E979C 0%, #2C7A80 45%, #14565A 100%)';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(12,59,62,0.55)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      borderRadius: dz('cardRadius', 0),
      overflow: 'hidden',
      maxWidth: 760,
      width: '100%',
      boxShadow: 'var(--shadow-xl)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: waterBg,
      minHeight: 360,
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(DSx.Badge, {
    tone: plot.status === 'free' ? 'success' : plot.status === 'reserved' ? 'warn' : 'neutral',
    styleType: "solid"
  }, plot.status === 'free' ? 'Вільна' : plot.status === 'reserved' ? 'Заброньована' : 'Продана'), /*#__PURE__*/React.createElement(DSx.Badge, {
    tone: "sand",
    styleType: "solid"
  }, plot.line))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.75rem'
    }
  }, plot.title), /*#__PURE__*/React.createElement(DSx.IconButton, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      icon: "X",
      size: 18
    }),
    ariaLabel: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, "\u041F\u043B\u043E\u0449\u0430 ", plot.area, " \xB7 ", plot.line, " \u0432\u043E\u0434\u0438"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '20px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, plot.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "Check",
    size: 16,
    style: {
      color: 'var(--teal-600)'
    }
  }), f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      padding: '16px 0',
      borderTop: '1px solid var(--border-subtle)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--text-faint)'
    }
  }, "\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.625rem',
      color: 'var(--text-strong)'
    }
  }, plot.price)), /*#__PURE__*/React.createElement(DSx.Button, {
    variant: "accent",
    size: "lg",
    fullWidth: true,
    onClick: onRequest,
    disabled: plot.status === 'sold'
  }, plot.status === 'sold' ? 'Ділянку продано' : 'Забронювати перегляд'))));
}
Object.assign(window, {
  Amenities,
  Plots,
  NewQuarter,
  Infrastructure,
  Gallery,
  Contact,
  PlotModal,
  PLOTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.standalone.jsx
try { (() => {
/* Гавань — website UI kit · page sections. Exports to window. */

const DSx = window.DesignSystem_0f1a06;
const PLOTS = [{
  id: 14,
  title: 'Ділянка №14',
  status: 'free',
  line: '1-а лінія',
  area: '14 соток',
  price: 'за запитом',
  features: ['Власний берег', 'Газ + електрика', 'Місце для човна']
}, {
  id: 21,
  title: 'Ділянка №21',
  status: 'free',
  line: '1-а лінія',
  area: '12 соток',
  price: 'за запитом',
  features: ['Кутова', 'Оптоволокно', 'Асфальт до межі']
}, {
  id: 8,
  title: 'Ділянка №8',
  status: 'reserved',
  line: '1-а лінія',
  area: '16 соток',
  price: 'за запитом',
  features: ['Широкий берег', 'Газ + електрика', 'Пляж поруч']
}, {
  id: 30,
  title: 'Ділянка №30',
  status: 'free',
  line: '2-а лінія',
  area: '10 соток',
  price: 'за запитом',
  features: ['Тиха вулиця', 'Всі комунікації', 'Поруч пляж']
}, {
  id: 5,
  title: 'Ділянка №5',
  status: 'sold',
  line: '1-а лінія',
  area: '18 соток',
  price: 'продано',
  features: ['Панорама річки', 'Газ + електрика', 'Причал']
}, {
  id: 33,
  title: 'Ділянка №33',
  status: 'free',
  line: '2-а лінія',
  area: '8 соток',
  price: 'за запитом',
  features: ['Компактна', 'Оптоволокно', 'Поруч в’їзд']
}];
const AMENITIES = [['Waves', 'Власний вихід до води', 'Приватний берег на кожній ділянці першої лінії.'], ['Sailboat', 'Свій човен на ділянці', 'Паркуйте човен біля свого подвір’я.'], ['Umbrella', 'Власний пляж', 'Доглянутий піщаний пляж лише для мешканців містечка.'], ['Baby', 'Дитячий майданчик', 'Безпечний простір для ігор та відпочинку дітей.'], ['Goal', 'Футбольне поле', 'Власне поле для гри та активного дозвілля мешканців.'], ['Volleyball', 'Волейбольне поле', 'Майданчик для волейболу просто неба біля води.']];
function SectionShell({
  id,
  bg,
  children,
  pad
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    "data-screen-label": id,
    style: {
      background: bg || 'transparent',
      padding: pad || 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, children));
}
function Amenities() {
  return /*#__PURE__*/React.createElement(SectionShell, {
    id: "about"
  }, /*#__PURE__*/React.createElement(DSx.SectionHeading, {
    eyebrow: "\u0427\u043E\u043C\u0443 \u0413\u0430\u0432\u0430\u043D\u044C",
    title: "\u0412\u0441\u0435 \u0434\u043B\u044F \u0436\u0438\u0442\u0442\u044F \u0431\u0456\u043B\u044F \u0432\u043E\u0434\u0438",
    lead: "\u041C\u0438 \u0441\u0442\u0432\u043E\u0440\u0438\u043B\u0438 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E, \u0434\u0435 \u043F\u0440\u0438\u0440\u043E\u0434\u0430, \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u0456\u0441\u0442\u044C \u0456 \u043A\u043E\u043C\u0444\u043E\u0440\u0442 \u043F\u043E\u0454\u0434\u043D\u0430\u043D\u0456 \u043D\u0430 \u0431\u0435\u0440\u0435\u0437\u0456 \u0440\u0456\u0447\u043A\u0438.",
    style: {
      marginBottom: 'var(--sp-8)'
    }
  }), /*#__PURE__*/React.createElement(AmenitiesCarousel, null));
}
const AMENITY_IMG = [window.__resources.gal1, window.__resources.gal6, window.__resources.gal2, window.__resources.gal3, window.__resources.gal5, window.__resources.gal1];
function AmenitiesCarousel() {
  const perView = 3;
  const n = AMENITIES.length;
  const maxI = Math.max(0, n - perView);
  const [i, setI] = React.useState(0);
  const go = d => setI(p => Math.min(maxI, Math.max(0, p + d)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: `${n / perView * 100}%`,
      transform: `translateX(-${i * (100 / n)}%)`,
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }, AMENITIES.map(([icon, title, text], idx) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      width: `${100 / n}%`,
      padding: '0 calc(var(--sp-5) / 2) var(--sp-2)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--r-xl)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      height: 340,
      background: `url(${AMENITY_IMG[idx % AMENITY_IMG.length]}) center/cover no-repeat`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(7,17,15,0.05) 30%, rgba(7,17,15,0.45) 60%, rgba(5,13,12,0.88) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '1.125rem',
      color: 'var(--cream-50)',
      marginBottom: '0.4rem'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.9375rem',
      color: 'rgba(244,239,230,0.82)',
      lineHeight: 1.5
    }
  }, text))))))), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(-1),
    disabled: i === 0,
    "aria-label": "\u041D\u0430\u0437\u0430\u0434",
    style: {
      ...navBtn('left'),
      left: -8,
      opacity: i === 0 ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronLeft",
    size: 22
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(1),
    disabled: i === maxI,
    "aria-label": "\u0412\u043F\u0435\u0440\u0435\u0434",
    style: {
      ...navBtn('right'),
      right: -8,
      opacity: i === maxI ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronRight",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      marginTop: 'var(--sp-5)'
    }
  }, Array.from({
    length: maxI + 1
  }).map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    onClick: () => setI(idx),
    "aria-label": `Слайд ${idx + 1}`,
    style: {
      width: idx === i ? 26 : 9,
      height: 9,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: idx === i ? 'var(--accent)' : 'var(--border-strong)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }))));
}
function PhotoCarousel({
  images
}) {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const n = images.length;
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI(p => (p + 1) % n), 4000);
    return () => clearInterval(t);
  }, [paused, n]);
  const go = d => setI(p => (p + d + n) % n);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    style: {
      position: 'relative',
      alignSelf: 'stretch',
      minHeight: 480,
      borderRadius: 'var(--r-xl)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)',
      background: '#0E2322'
    }
  }, images.map((src, idx) => /*#__PURE__*/React.createElement("div", {
    key: src,
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${src}) center/cover no-repeat`,
      opacity: idx === i ? 1 : 0,
      transition: 'opacity var(--dur-slow) var(--ease-soft)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, transparent 62%, rgba(7,17,15,0.55))'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(-1),
    "aria-label": "\u041D\u0430\u0437\u0430\u0434",
    style: navBtn('left')
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronLeft",
    size: 22
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(1),
    "aria-label": "\u0412\u043F\u0435\u0440\u0435\u0434",
    style: navBtn('right')
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronRight",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 16,
      display: 'flex',
      justifyContent: 'center',
      gap: 8
    }
  }, images.map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    onClick: () => setI(idx),
    "aria-label": `Слайд ${idx + 1}`,
    style: {
      width: idx === i ? 26 : 9,
      height: 9,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: idx === i ? 'var(--sand-400)' : 'rgba(255,255,255,0.55)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }))));
}
function navBtn(side) {
  return {
    position: 'absolute',
    top: '50%',
    [side]: 12,
    transform: 'translateY(-50%)',
    width: 44,
    height: 44,
    borderRadius: 999,
    cursor: 'pointer',
    background: 'rgba(11,24,23,0.5)',
    border: '1px solid rgba(255,255,255,0.28)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)'
  };
}
function Plots({
  onOpen
}) {
  return /*#__PURE__*/React.createElement(SectionShell, {
    id: "plots",
    bg: "var(--surface-sunken)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement(DSx.SectionHeading, {
    eyebrow: "\u0413\u0435\u043D\u043F\u043B\u0430\u043D \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u0430",
    title: "\u0421\u0445\u0435\u043C\u0430 \u0434\u0456\u043B\u044F\u043D\u043E\u043A",
    lead: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0430 \u0441\u0445\u0435\u043C\u0430 \u043A\u043E\u0442\u0435\u0434\u0436\u043D\u043E\u0433\u043E \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u0430 \u0437 \u0434\u0456\u043B\u044F\u043D\u043A\u0430\u043C\u0438 \u043F\u0435\u0440\u0448\u043E\u0457 \u0442\u0430 \u0434\u0440\u0443\u0433\u043E\u0457 \u043B\u0456\u043D\u0456\u0457 \u0432\u043E\u0434\u0438."
  }), /*#__PURE__*/React.createElement("a", {
    href: window.__resources.schemeGen,
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(DSx.Button, {
    variant: "secondary",
    size: "md",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      icon: "Maximize2",
      size: 16
    })
  }, "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043D\u0430 \u0432\u0435\u0441\u044C \u0435\u043A\u0440\u0430\u043D"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-5)',
      alignItems: 'start'
    }
  }, [[window.__resources.schemeSat, 'Розташування ділянок КМ Гавань на супутниковій карті', 'Розташування на карті'], [window.__resources.schemeGen, 'Детальна схема ділянок КМ Гавань', 'Детальна схема ділянок']].map(([src, alt, cap]) => /*#__PURE__*/React.createElement(SchemeImage, {
    key: src,
    src: src,
    alt: alt,
    cap: cap
  }))));
}
function SchemeImage({
  src,
  alt,
  cap
}) {
  const [zoom, setZoom] = React.useState(false);
  const [pos, setPos] = React.useState({
    x: 50,
    y: 50
  });
  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({
      x: (e.clientX - r.left) / r.width * 100,
      y: (e.clientY - r.top) / r.height * 100
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--r-xl)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: src,
    target: "_blank",
    rel: "noopener",
    title: "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0443 \u043F\u043E\u0432\u043D\u043E\u043C\u0443 \u0440\u043E\u0437\u043C\u0456\u0440\u0456",
    onMouseEnter: () => setZoom(true),
    onMouseLeave: () => setZoom(false),
    onMouseMove: onMove,
    style: {
      display: 'block',
      overflow: 'hidden',
      cursor: 'zoom-in'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      display: 'block',
      width: '100%',
      height: 'auto',
      transform: zoom ? 'scale(4.5)' : 'scale(1)',
      transformOrigin: `${pos.x}% ${pos.y}%`,
      transition: zoom ? 'transform 80ms linear' : 'transform var(--dur-base) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      padding: '12px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.875rem',
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, cap));
}
function Infrastructure() {
  const items = [['Route', 'Асфальтовані вулиці', 'Зручний під’їзд у будь-яку погоду.'], ['ShieldCheck', 'В’їзд по перепустках', 'Закрита територія лише для мешканців і гостей.'], ['Snowflake', 'Чищення доріг', 'Прибирання снігу взимку та утримання вулиць.'], ['Trash2', 'Вивіз сміття', 'Регулярне обслуговування території містечка.'], ['Lightbulb', 'Освітлення вулиць', 'Затишне вечірнє освітлення всіх вулиць.'], ['Cable', 'Готові комунікації', 'Електрика, газ та оптоволокно до ділянки.'], ['Video', 'Відеонагляд', 'Цілодобове відеоспостереження по всій території містечка.']];
  return /*#__PURE__*/React.createElement(SectionShell, {
    id: "infra",
    bg: "var(--surface-inverse)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'var(--sp-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DSx.SectionHeading, {
    tone: "light",
    eyebrow: "\u0406\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0442\u0430 \u0441\u0435\u0440\u0432\u0456\u0441",
    title: "\u041C\u0456\u0441\u0442\u0435\u0447\u043A\u043E, \u044F\u043A\u0435 \u043F\u0440\u043E \u0432\u0430\u0441 \u043F\u0456\u043A\u043B\u0443\u0454\u0442\u044C\u0441\u044F",
    lead: "\u0412\u043B\u0430\u0441\u043D\u0430 \u0441\u043B\u0443\u0436\u0431\u0430 \u0435\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0456\u0457 \u0446\u0456\u043B\u0438\u0439 \u0440\u0456\u043A \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454 \u043A\u043E\u043C\u0444\u043E\u0440\u0442 \u0456 \u0431\u0435\u0437\u043F\u0435\u043A\u0443 \u043D\u0430 \u0442\u0435\u0440\u0438\u0442\u043E\u0440\u0456\u0457."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36,
      marginTop: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement(DSx.Stat, {
    value: "100",
    suffix: "%",
    label: "\u0434\u0456\u043B\u044F\u043D\u043E\u043A \u0437 \u043A\u043E\u043C\u0443\u043D\u0456\u043A\u0430\u0446\u0456\u044F\u043C\u0438",
    tone: "sand"
  }), /*#__PURE__*/React.createElement(DSx.Stat, {
    value: "365",
    label: "\u0434\u043D\u0456\u0432 \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u0440\u0456\u043A",
    tone: "sand"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-5)'
    }
  }, items.map(([icon, title, text]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 'var(--r-lg)',
      padding: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 44,
      height: 44,
      borderRadius: 'var(--r-md)',
      background: 'rgba(194,154,87,0.16)',
      color: 'var(--sand-300)',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '1rem',
      color: 'var(--cream-50)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.875rem',
      color: 'var(--text-on-dark-mut)',
      marginTop: 6,
      lineHeight: 1.5
    }
  }, text))))));
}
const GALLERY = [[window.__resources.gal1, 'Панорама річки та ділянок'], [window.__resources.gal2, 'Пляж, басейн та глемпінг біля води'], [window.__resources.gal6, 'Вид на канал і набережну'], [window.__resources.gal3, 'Вид на водойму та забудову'], [window.__resources.gal5, 'Ділянки вздовж каналу']];
function Gallery() {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement(SectionShell, {
    id: "gallery"
  }, /*#__PURE__*/React.createElement(DSx.SectionHeading, {
    eyebrow: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F",
    title: "\u041F\u043E\u0433\u043B\u044F\u043D\u044C\u0442\u0435 \u043D\u0430 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E \u0437 \u0432\u0438\u0441\u043E\u0442\u0438",
    lead: "\u0420\u0435\u0430\u043B\u044C\u043D\u0456 \u0430\u0435\u0440\u043E\u0444\u043E\u0442\u043E \u0413\u0430\u0432\u0430\u043D\u0456 \u2014 \u0440\u0456\u0447\u043A\u0430, \u0434\u0456\u043B\u044F\u043D\u043A\u0438 \u0442\u0430 \u0431\u043B\u0430\u0433\u043E\u0443\u0441\u0442\u0440\u0456\u0439 \u0442\u0435\u0440\u0438\u0442\u043E\u0440\u0456\u0457.",
    style: {
      marginBottom: 'var(--sp-7)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gridAutoRows: '210px',
      gap: 'var(--sp-4)'
    }
  }, GALLERY.map(([src, alt], i) => /*#__PURE__*/React.createElement("button", {
    key: src,
    onClick: () => setOpen(i),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--shadow-sm)',
      gridColumn: i === 0 ? 'span 2' : i === GALLERY.length - 1 ? 'span 2' : 'span 1',
      gridRow: i === 0 ? 'span 2' : 'span 1',
      background: `url(${src}) center/cover no-repeat`,
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'scale(1.02)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, transparent 55%, rgba(12,59,62,0.55))'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 14,
      right: 16,
      textAlign: 'left',
      color: 'var(--cream-50)',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.875rem',
      fontWeight: 600
    }
  }, alt)))), open != null && /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(null),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 110,
      background: 'rgba(12,59,62,0.78)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 24,
      right: 24
    }
  }, /*#__PURE__*/React.createElement(DSx.IconButton, {
    variant: "outline",
    icon: /*#__PURE__*/React.createElement(Icon, {
      icon: "X",
      size: 20
    }),
    ariaLabel: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
    onClick: () => setOpen(null)
  })), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setOpen(o => (o + GALLERY.length - 1) % GALLERY.length);
    },
    style: {
      position: 'absolute',
      left: 24,
      background: 'rgba(255,255,255,0.14)',
      border: '1px solid rgba(255,255,255,0.3)',
      color: '#fff',
      width: 52,
      height: 52,
      borderRadius: 999,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronLeft",
    size: 24
  })), /*#__PURE__*/React.createElement("figure", {
    onClick: e => e.stopPropagation(),
    style: {
      margin: 0,
      maxWidth: '88vw',
      maxHeight: '84vh'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: GALLERY[open][0],
    alt: GALLERY[open][1],
    style: {
      maxWidth: '88vw',
      maxHeight: '78vh',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--shadow-xl)',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      color: 'var(--cream-50)',
      textAlign: 'center',
      marginTop: 14,
      fontFamily: 'var(--font-sans)',
      fontSize: '0.9375rem'
    }
  }, GALLERY[open][1])), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setOpen(o => (o + 1) % GALLERY.length);
    },
    style: {
      position: 'absolute',
      right: 24,
      background: 'rgba(255,255,255,0.14)',
      border: '1px solid rgba(255,255,255,0.3)',
      color: '#fff',
      width: 52,
      height: 52,
      borderRadius: 999,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronRight",
    size: 24
  }))));
}
function Messengers() {
  const phone = '380954556671';
  const apps = [{
    name: 'WhatsApp',
    href: 'https://wa.me/380954556671',
    bg: '#25D366',
    path: 'M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02zM12.04 20.13a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14 0-.31-.02-.47-.02-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z'
  }, {
    name: 'Telegram',
    href: 'tg://resolve?domain=@best_4_vepr',
    bg: '#229ED9',
    path: 'M21.94 4.5 18.6 20.2c-.25 1.11-.92 1.39-1.86.86l-5.14-3.79-2.48 2.39c-.27.27-.5.5-1.03.5l.37-5.23 9.52-8.6c.41-.37-.09-.57-.64-.2L5.04 12.9l-5.07-1.58c-1.1-.34-1.12-1.1.23-1.63L20.5 2.93c.92-.34 1.72.2 1.44 1.57z'
  }, {
    name: 'Viber',
    href: 'viber://chat?number=%2B380954556671',
    bg: '#7360F2',
    path: 'M12.04 2C9.5 2 6.3 2.62 4.6 4.2 3.34 5.38 2.7 7.2 2.63 9.46c-.07 2.26-.16 6.5 3.93 7.65v1.76c0 .64.34.74.6.5l1.35-1.36c2.8.23 5.78-.34 6.12-.45 1.13-.37 1.77-1.55 2-2.66.22-1.14.36-3.27.06-4.94C16.43 4.83 13.94 2.02 12.04 2zm.13 1.43c1.6.02 3.66 2.32 3.93 5.05.25 1.4.13 3.27-.05 4.24-.18.95-.65 1.6-1.34 1.83-.3.1-3.02.62-5.5.4 0 0-1.84 2.22-2.42 2.8-.18.18-.38.16-.38-.2 0-.24.01-3 .01-3-3.46-.96-3.26-4.57-3.2-6.46.05-1.88.57-3.36 1.6-4.32 1.42-1.3 4.2-1.84 6.34-1.84zm.24 1.85a.3.3 0 0 0-.04.6c1.95.15 3.42 1.67 3.5 3.74a.3.3 0 0 0 .6-.02c-.1-2.37-1.8-4.16-4.04-4.32zm-2.86.92a.85.85 0 0 0-.5.1l-.03.02c-.36.2-.68.47-.93.8-.2.26-.3.51-.33.76-.01.14 0 .29.04.43l.02.01c.13.36.3.7.5 1.04.27.5.6.99.95 1.43.5.65 1.06 1.24 1.68 1.77.46.4.95.74 1.48 1.04.3.16.6.3.92.4.02 0 .03.02.05.02.1.04.2.06.3.06.45 0 .92-.34 1.2-.62.18-.18.3-.4.36-.65.06-.32-.1-.6-.36-.77-.3-.2-.62-.39-.93-.56-.32-.18-.6-.1-.83.13l-.46.58c-.1.12-.26.16-.4.1-1.02-.42-1.78-1.18-2.2-2.2-.06-.14-.02-.3.1-.4l.58-.46c.23-.23.3-.5.13-.83-.16-.3-.36-.6-.55-.9-.16-.24-.4-.4-.7-.43zm3.1.5a.3.3 0 0 0-.07.6c.9.2 1.32.63 1.5 1.5a.3.3 0 0 0 .59-.13c-.23-1.1-.86-1.74-1.96-1.97a.3.3 0 0 0-.06 0z'
  }, {
    name: 'Instagram',
    href: 'https://www.instagram.com/friends.town.mr/',
    bg: 'radial-gradient(circle at 30% 110%, #FED576 8%, #F47133 30%, #BC3081 60%, #4F5BD5 100%)',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.51.01-4.75.07-1.15.05-1.77.24-2.18.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.41-.35 1.03-.4 2.18-.06 1.24-.07 1.6-.07 4.75s.01 3.51.07 4.75c.05 1.15.24 1.77.4 2.18.22.55.47.94.88 1.35.41.41.8.66 1.35.88.41.16 1.03.35 2.18.4 1.24.06 1.6.07 4.75.07s3.51-.01 4.75-.07c1.15-.05 1.77-.24 2.18-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.41.35-1.03.4-2.18.06-1.24.07-1.6.07-4.75s-.01-3.51-.07-4.75c-.05-1.15-.24-1.77-.4-2.18a3.63 3.63 0 0 0-.88-1.35 3.63 3.63 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.18-.4-1.24-.06-1.6-.07-4.75-.07zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6zm0 8.74a3.44 3.44 0 1 0 0-6.88 3.44 3.44 0 0 0 0 6.88zm6.74-8.94a1.24 1.24 0 1 1-2.48 0 1.24 1.24 0 0 1 2.48 0z'
  }, {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@friends.town.mr',
    bg: '#010101',
    path: 'M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.2v12.86a2.58 2.58 0 0 1-2.58 2.5 2.58 2.58 0 0 1-2.58-2.58 2.58 2.58 0 0 1 3.4-2.45V9.9a5.8 5.8 0 0 0-.82-.06 5.78 5.78 0 1 0 5.78 5.78V8.99a7.45 7.45 0 0 0 4.36 1.4V7.18a4.28 4.28 0 0 1-3.3-1.36z'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 'var(--sp-2)'
    }
  }, apps.map(a => /*#__PURE__*/React.createElement("a", {
    key: a.name,
    href: a.href,
    target: "_blank",
    rel: "noopener",
    "aria-label": a.name,
    title: a.name,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 48,
      height: 48,
      borderRadius: 'var(--r-md)',
      background: a.bg,
      color: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: a.path
  })))));
}
function Contact({
  onSubmit,
  submitted
}) {
  return /*#__PURE__*/React.createElement(SectionShell, {
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DSx.SectionHeading, {
    eyebrow: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",
    title: "\u042F\u043A \u043D\u0430\u0441 \u0437\u043D\u0430\u0439\u0442\u0438",
    lead: "\u0417\u0430\u0432\u0456\u0442\u0430\u0439\u0442\u0435 \u0434\u043E \u043A\u043E\u0442\u0435\u0434\u0436\u043D\u043E\u0433\u043E \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u0430 \u0413\u0430\u0432\u0430\u043D\u044C \u043D\u0430 \u0431\u0435\u0440\u0435\u0437\u0456 \u0414\u0435\u0441\u043D\u0438 \u2014 \u043F\u043E\u0431\u0443\u0434\u0443\u0454\u043C\u043E \u043C\u0430\u0440\u0448\u0440\u0443\u0442 \u0432\u0456\u0434 \u0432\u0430\u0441."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 'var(--sp-6)'
    }
  }, [['Phone', '+38 095 455 66 71'], ['Clock', 'Щодня з 9:00 до 20:00']].map(([icon, text]) => /*#__PURE__*/React.createElement("div", {
    key: text,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 42,
      height: 42,
      borderRadius: 'var(--r-md)',
      background: 'var(--teal-50)',
      color: 'var(--teal-700)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, text))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      paddingLeft: 54
    }
  }, [['Google', 'https://goo.gl/maps/Y7xNNyrsHFgYdYFZA'], ['Waze', 'https://waze.com/ul/hu8vxz0t11']].map(([label, href]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: '0.9375rem',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, label, ":"), /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      color: 'var(--text-link)',
      fontWeight: 600
    }
  }, "\u043C\u0430\u0440\u0448\u0440\u0443\u0442 ", /*#__PURE__*/React.createElement(Icon, {
    icon: "ArrowRight",
    size: 15
  }))))), /*#__PURE__*/React.createElement(Messengers, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      borderRadius: 'var(--r-xl)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)',
      overflow: 'hidden',
      minHeight: 420
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "\u041A\u043E\u0442\u0435\u0434\u0436\u043D\u0435 \u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E \u0413\u0430\u0432\u0430\u043D\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0456",
    src: "https://www.google.com/maps?q=\u041A\u043E\u0442\u0435\u0434\u0436\u043D\u0435+\u043C\u0456\u0441\u0442\u0435\u0447\u043A\u043E+\u0413\u0430\u0432\u0430\u043D\u044C+\u0414\u0435\u0441\u043D\u0430&z=16&output=embed",
    style: {
      display: 'block',
      width: '100%',
      height: '100%',
      minHeight: 420,
      border: 0
    },
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
    allowFullScreen: true
  }), /*#__PURE__*/React.createElement("a", {
    href: "https://maps.app.goo.gl/2aum38nH9zyq3h6r5",
    target: "_blank",
    rel: "noopener",
    style: {
      position: 'absolute',
      left: 16,
      bottom: 16,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(DSx.Button, {
    variant: "primary",
    size: "md",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      icon: "ExternalLink",
      size: 16
    })
  }, "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432 Google Maps")))));
}
function ContactForm({
  onSubmit
}) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [area, setArea] = React.useState('від 8 соток');
  const TELEGRAM = 'tg://resolve?domain=@best_4_vepr';
  const submit = e => {
    e.preventDefault();
    const msg = `Нова заявка з сайту «Гавань»%0A%0AІм'я: ${name || '—'}%0AТелефон: ${phone || '—'}%0AЦікавить площа: ${area}`;
    // Copy a ready-to-send message to clipboard (DM pre-fill isn't possible via tg://)
    try {
      const plain = decodeURIComponent(msg.replace(/%0A/g, '\n'));
      if (navigator.clipboard) navigator.clipboard.writeText(plain);
    } catch (err) {/* noop */}
    window.open(TELEGRAM, '_blank');
    onSubmit();
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DSx.Input, {
    label: "\u0412\u0430\u0448\u0435 \u0456\u043C'\u044F",
    placeholder: "\u041E\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440",
    icon: /*#__PURE__*/React.createElement(Icon, {
      icon: "User",
      size: 16
    }),
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(DSx.Input, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    placeholder: "+380 __ ___ __ __",
    icon: /*#__PURE__*/React.createElement(Icon, {
      icon: "Phone",
      size: 16
    }),
    value: phone,
    onChange: e => setPhone(e.target.value)
  }), /*#__PURE__*/React.createElement(DSx.Select, {
    label: "\u0426\u0456\u043A\u0430\u0432\u0438\u0442\u044C \u043F\u043B\u043E\u0449\u0430",
    options: ['від 8 соток', 'від 12 соток', 'від 15 соток', 'понад 20 соток'],
    value: area,
    onChange: e => setArea(e.target.value)
  }), /*#__PURE__*/React.createElement(DSx.Checkbox, {
    label: "\u0417\u0433\u043E\u0434\u0435\u043D \u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(DSx.Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      icon: "Send",
      size: 18
    })
  }, "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 \u0443 Telegram"));
}
function PlotModal({
  plot,
  onClose,
  onRequest
}) {
  if (!plot) return null;
  const waterBg = 'linear-gradient(160deg, #4E979C 0%, #2C7A80 45%, #14565A 100%)';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(12,59,62,0.55)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--r-xl)',
      overflow: 'hidden',
      maxWidth: 760,
      width: '100%',
      boxShadow: 'var(--shadow-xl)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: waterBg,
      minHeight: 360,
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(DSx.Badge, {
    tone: plot.status === 'free' ? 'success' : plot.status === 'reserved' ? 'warn' : 'neutral',
    styleType: "solid"
  }, plot.status === 'free' ? 'Вільна' : plot.status === 'reserved' ? 'Заброньована' : 'Продана'), /*#__PURE__*/React.createElement(DSx.Badge, {
    tone: "sand",
    styleType: "solid"
  }, plot.line))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.75rem'
    }
  }, plot.title), /*#__PURE__*/React.createElement(DSx.IconButton, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      icon: "X",
      size: 18
    }),
    ariaLabel: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, "\u041F\u043B\u043E\u0449\u0430 ", plot.area, " \xB7 ", plot.line, " \u0432\u043E\u0434\u0438"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '20px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, plot.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "Check",
    size: 16,
    style: {
      color: 'var(--teal-600)'
    }
  }), f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      padding: '16px 0',
      borderTop: '1px solid var(--border-subtle)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--text-faint)'
    }
  }, "\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.625rem',
      color: 'var(--text-strong)'
    }
  }, plot.price)), /*#__PURE__*/React.createElement(DSx.Button, {
    variant: "accent",
    size: "lg",
    fullWidth: true,
    onClick: onRequest,
    disabled: plot.status === 'sold'
  }, plot.status === 'sold' ? 'Ділянку продано' : 'Забронювати перегляд'))));
}
Object.assign(window, {
  Amenities,
  Plots,
  Infrastructure,
  Gallery,
  Contact,
  PlotModal,
  PLOTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.standalone.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FeatureItem = __ds_scope.FeatureItem;

__ds_ns.PlotCard = __ds_scope.PlotCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
