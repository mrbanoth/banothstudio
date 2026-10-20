// Hand-drawn style accents used around the page.

function rng(seed) {
  let s = seed;
  return () => (s = (s * 9301 + 49297) % 233280) / 233280;
}

// Ripped-paper edge. Place at the top/bottom of a band; `color` = the colour of the band it tears into.
export function TornEdge({ color, flip = false, seed = 7, className = '' }) {
  const r = rng(seed);
  const pts = [];
  let x = 0;
  while (x < 1440) {
    pts.push(`${x.toFixed(1)},${(6 + r() * 26).toFixed(1)}`);
    x += 5 + r() * 20;
  }
  pts.push(`1440,${(10 + r() * 20).toFixed(1)}`);
  const d = `M0,44 L${pts.join(' L')} L1440,44 Z`;
  return (
    <svg
      className={`torn ${flip ? 'torn--top' : 'torn--bottom'} ${className}`}
      viewBox="0 0 1440 44"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={d} fill={color} />
    </svg>
  );
}

export function Crown({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 60 44" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
      <path d="M6 36 L3 8 L18 22 L30 4 L41 22 L57 9 L53 36 Z" />
      <path d="M8 41 L52 41" />
    </svg>
  );
}

export function Slashes({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 50 40" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" aria-hidden="true">
      <path d="M6 4 L22 22" />
      <path d="M20 2 L34 18" />
      <path d="M30 30 L46 26" />
    </svg>
  );
}

export function Arrow({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 52 C28 50 44 36 46 10" />
      <path d="M36 18 L46 8 L54 20" />
    </svg>
  );
}

export function Squiggle({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 120 20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden="true">
      <path d="M4 14 C30 6 60 4 116 6" />
      <path d="M14 18 C40 12 70 12 100 12" />
    </svg>
  );
}

// Original cartoon-face doodle (stand-in until you drop in your own sticker).
export function FaceDoodle({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="54" r="38" fill="#fff" stroke="#111" strokeWidth="3.5" />
      <path d="M14 50 C10 22 34 10 52 14 C70 8 92 22 86 50 C80 36 70 30 60 34 C54 26 42 28 36 34 C28 30 18 38 14 50 Z" fill="#111" />
      <ellipse cx="38" cy="56" rx="4" ry="5" fill="#111" />
      <ellipse cx="62" cy="56" rx="4" ry="5" fill="#111" />
      <path d="M40 72 C46 78 54 78 60 72" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" />
      <path d="M30 46 L44 44 M56 44 L70 46" stroke="#111" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// Dark "toolbar" strip on the left of the hero.
export function ToolStrip({ className = '' }) {
  const icons = [
    <circle key="a" cx="12" cy="12" r="6" strokeDasharray="2 3" />,
    <rect key="b" x="6" y="6" width="12" height="12" strokeDasharray="2 3" />,
    <path key="c" d="M7 17 C4 10 12 4 17 8 C20 11 16 17 10 15" />,
    <path key="d" d="M8 4 L8 16 L20 16 M4 8 L16 8 L16 20" />,
    <path key="e" d="M6 18 L16 8 L18 10 L8 20 Z M16 8 L18 4 L20 6 Z" />,
    <path key="f" d="M12 4 C16 10 18 13 18 15 A6 6 0 0 1 6 15 C6 13 8 10 12 4 Z" />,
    <path key="g" d="M6 6 L18 6 M12 6 L12 19" />,
    <path key="h" d="M6 4 L6 18 L10 14 L13 20 L15 19 L12 13 L17 13 Z" />,
    <rect key="i" x="5" y="5" width="14" height="14" rx="2" />,
  ];
  return (
    <div className={`toolstrip ${className}`} aria-hidden="true">
      {icons.map((ic, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {ic}
        </svg>
      ))}
    </div>
  );
}
