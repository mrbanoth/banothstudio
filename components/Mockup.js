// Dummy design mockups for the Featured Work grid.
// Replace with real exports later: <img src="/work/thumb-1.webp" className="work-img" alt="..." />

const Person = () => (
  <svg className="mk-person" viewBox="0 0 200 220" aria-hidden="true">
    <circle cx="100" cy="70" r="42" />
    <path d="M18 220 C22 150 58 124 100 124 C142 124 178 150 182 220 Z" />
  </svg>
);

const Cup = () => (
  <svg className="mk-cup" viewBox="0 0 160 200" aria-hidden="true">
    <path d="M30 18 Q30 8 40 8 H120 Q130 8 130 18 V30 H30 Z" fill="#3b2418" />
    <path d="M34 34 H126 L114 188 Q113 196 104 196 H56 Q47 196 46 188 Z" fill="#fffaf2" />
    <rect x="40" y="86" width="80" height="54" rx="4" fill="#c7843e" />
    <circle cx="44" cy="190" r="14" fill="#5a3522" />
    <circle cx="120" cy="192" r="12" fill="#5a3522" />
    <circle cx="96" cy="198" r="9" fill="#5a3522" />
  </svg>
);

const Car = () => (
  <svg className="mk-car" viewBox="0 0 300 110" aria-hidden="true">
    <path d="M10 78 C14 60 40 52 70 48 L112 22 C124 15 150 12 176 14 C206 16 226 30 244 46 C272 50 290 58 292 76 L292 84 H10 Z" fill="#111" />
    <path d="M120 28 C132 22 150 20 172 21 C190 22 206 30 218 44 L104 46 Z" fill="#2b3a4a" />
    <circle cx="74" cy="84" r="20" fill="#0a0a0a" stroke="#555" strokeWidth="5" />
    <circle cx="234" cy="84" r="20" fill="#0a0a0a" stroke="#555" strokeWidth="5" />
    <path d="M262 62 L290 66" stroke="#ff3b3b" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

const art = { person: <Person />, cup: <Cup />, car: <Car /> };

export default function Mockup({ m }) {
  return (
    <div className={`mk mk--${m.style}`} role="img" aria-label={`Mockup: ${m.title}`}>
      {m.tag && <span className="mk-tag">{m.tag}</span>}
      {art[m.art]}
      <p className="mk-title">{m.title}</p>
      {m.sub && <p className="mk-sub">{m.sub}</p>}
      {m.badge && <span className="mk-badge">{m.badge}</span>}
    </div>
  );
}
