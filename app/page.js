import fs from 'fs';
import path from 'path';
import Mockup from '../components/Mockup';
import { LogoMark } from '../components/Logo';
import { EMAIL, PHONE_DISPLAY, WHATSAPP_URL, QUOTE_URL, YEAR } from '../components/site';
import Nav from '../components/Nav';
import Loader from '../components/Loader';
import { TornEdge, Crown, Slashes, Arrow, Squiggle, FaceDoodle, ToolStrip } from '../components/Doodles';

const PAPER = '#efede8';
const INK = '#141414';

const journey = [
  { years: '2024 – Present', role: 'Founder & Creative Designer', at: 'Banoth Studio' },
  { years: '2022 – 2024', role: 'Graphic Designer (Freelance)', at: 'Thumbnails · Social Media · Branding' },
  { years: '2020 – 2022', role: 'Design & Content Creator', at: 'Posters · Ads · Social Media' },
];

const tools = [
  { k: 'Ps', name: 'Photoshop', slug: 'photoshop', bg: '#001e36', fg: '#31a8ff' },
  { k: 'Ai', name: 'Illustrator', slug: 'illustrator', bg: '#330000', fg: '#ff9a00' },
  { k: 'Pr', name: 'Premiere Pro', slug: 'premiere-pro', bg: '#00005b', fg: '#9999ff' },
  { k: 'Ae', name: 'After Effects', slug: 'after-effects', bg: '#00005b', fg: '#9999ff' },
  { k: 'Fg', name: 'Figma', slug: 'figma', bg: '#1e1e1e', fg: '#ffffff' },
  { k: 'Cv', name: 'Canva', slug: 'canva', bg: 'linear-gradient(135deg,#00c4cc,#7d2ae8)', fg: '#ffffff' },
  { k: 'Cc', name: 'CapCut', slug: 'capcut', bg: '#ffffff', fg: '#111111' },
];

// Real logos: drop official files into public/tools/ named <slug>.svg (or .png / .webp).
// Any tool with a file shows its logo; the rest fall back to the letter tile.
function logoFor(slug) {
  for (const ext of ['svg', 'png', 'webp']) {
    if (fs.existsSync(path.join(process.cwd(), 'public', 'tools', `${slug}.${ext}`))) return `/tools/${slug}.${ext}`;
  }
  return null;
}

function ToolTile({ t }) {
  const logo = logoFor(t.slug);
  return logo ? (
    <span className="tool-tile tool-tile--logo" aria-hidden="true"><img src={logo} alt="" /></span>
  ) : (
    <span className="tool-tile" style={{ background: t.bg, color: t.fg }} aria-hidden="true">{t.k}</span>
  );
}

const aiTools = [
  { k: 'Cl', name: 'Claude', slug: 'claude', bg: '#d97757', fg: '#ffffff' },
  { k: 'Gp', name: 'ChatGPT', slug: 'chatgpt', bg: '#0f0f0f', fg: '#ffffff' },
  { k: 'Cx', name: 'Codex', slug: 'codex', bg: '#ffffff', fg: '#111111' },
  { k: 'Cu', name: 'Cursor', slug: 'cursor', bg: '#1b1b1b', fg: '#e8e8e8' },
  { k: 'Oc', name: 'OpenCode', slug: 'opencode', bg: '#2b2b2b', fg: '#f7c21b' },
  { k: 'Gm', name: 'Gemini', slug: 'gemini', bg: 'linear-gradient(135deg,#4f8bff,#9b72f2)', fg: '#ffffff' },
  { k: 'Mj', name: 'Midjourney', slug: 'midjourney', bg: '#f3f3f3', fg: '#111111' },
  { k: 'Ff', name: 'Firefly', slug: 'firefly', bg: '#2d0d0d', fg: '#ff6b5a' },
];

const Icon = {
  video: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect x="2" y="6" width="28" height="20" rx="6" fill="#ef2b2d" />
      <path d="M13 11 L21 16 L13 21 Z" fill="#fff" />
    </svg>
  ),
  camera: (
    <svg viewBox="0 0 32 32" fill="none" stroke="#111" strokeWidth="2.4" aria-hidden="true">
      <rect x="4" y="4" width="24" height="24" rx="7" />
      <circle cx="16" cy="16" r="5.5" />
      <circle cx="23" cy="9" r="1.2" fill="#111" />
    </svg>
  ),
  pen: (
    <svg viewBox="0 0 32 32" fill="none" stroke="#111" strokeWidth="2.4" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 26 L8 19 L22 5 L27 10 L13 24 Z" />
      <path d="M19 8 L24 13" />
    </svg>
  ),
  doc: (
    <svg viewBox="0 0 32 32" fill="none" stroke="#111" strokeWidth="2.4" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 3 H19 L25 9 V29 H8 Z" />
      <path d="M12 15 H21 M12 20 H21 M12 25 H18" />
    </svg>
  ),
  megaphone: (
    <svg viewBox="0 0 32 32" fill="none" stroke="#ef2b2d" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
      <path d="M4 13 V19 H9 L22 26 V6 L9 13 Z" />
      <path d="M9 19 L11 27 H14" />
      <path d="M26 12 C28 14 28 18 26 20" />
    </svg>
  ),
  grid: (
    <svg viewBox="0 0 32 32" fill="none" stroke="#111" strokeWidth="2.4" aria-hidden="true">
      <rect x="4" y="4" width="10" height="10" rx="2.5" />
      <rect x="18" y="4" width="10" height="10" rx="2.5" />
      <rect x="4" y="18" width="10" height="10" rx="2.5" />
      <rect x="18" y="18" width="10" height="10" rx="2.5" />
    </svg>
  ),
};

const services = [
  { icon: 'video', title: 'YouTube Thumbnails', text: 'High-engaging thumbnails for more clicks and views.' },
  { icon: 'camera', title: 'Social Media Designs', text: 'Posts, carousels, reels and more.' },
  { icon: 'pen', title: 'Brand Identity', text: 'Logos, banners, visual style and more.' },
  { icon: 'doc', title: 'Posters & Flyers', text: 'Event posters, product posters and more.' },
  { icon: 'megaphone', title: 'Ads & Banners', text: 'Digital ads, web banners, promotional creatives.' },
  { icon: 'grid', title: 'Custom Designs', text: 'Designs tailored to your needs.' },
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'thumbnails', label: 'Thumbnails' },
  { id: 'social', label: 'Social Media' },
  { id: 'posters', label: 'Posters' },
  { id: 'branding', label: 'Branding' },
  { id: 'ads', label: 'Ads' },
];

const work = [
  { type: 'thumbnails', title: 'YouTube Thumbnail', cat: 'Vlog / YouTube',
    m: { style: 'yellow', art: 'person', tag: 'EP. 12', title: 'I TRIED IT FOR 30 DAYS', badge: 'NEW' } },
  { type: 'thumbnails', title: 'YouTube Thumbnail', cat: 'Education / YouTube',
    m: { style: 'blue', art: 'person', tag: 'DESIGN 101', title: 'TOP 5 DESIGN TIPS', sub: 'Beginner to Pro' } },
  { type: 'thumbnails', title: 'YouTube Thumbnail', cat: 'Sports / YouTube',
    m: { style: 'red', art: 'person', tag: 'FULL MATCH', title: 'MATCH DAY HIGHLIGHTS', badge: '4K' } },
  { type: 'thumbnails', title: 'YouTube Thumbnail', cat: 'Business / YouTube',
    m: { style: 'green', art: 'person', tag: 'FREELANCE', title: '₹0 TO FIRST CLIENT', sub: 'My exact process' } },
  { type: 'social', title: 'Social Media Design', cat: 'Café / Instagram',
    m: { style: 'cream', art: 'cup', tag: 'MORNING SPECIAL', title: 'FRESH BREW', sub: '20% OFF · Mon–Fri' } },
  { type: 'posters', title: 'Poster Design', cat: 'Automotive / Poster',
    m: { style: 'night', art: 'car', tag: 'AUTO EXPO ' + YEAR, title: 'NIGHT DRIVE', sub: 'Built for the road ahead' } },
];

const ArrowOut = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12 C4 7 7 5 12 5" />
    <path d="M9 2 L12 5 L9 8" />
  </svg>
);

const RightArrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 8 H13 M9 4 L13 8 L9 12" />
  </svg>
);

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="wa-icon">
    <path d="M12 2.2A9.8 9.8 0 0 0 3.6 17l-1.4 4.9 5-1.3A9.8 9.8 0 1 0 12 2.2Zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.7 2.7 0 0 0-.9 2c0 1.2.9 2.4 1 2.5.1.2 1.7 2.7 4.2 3.8 1.6.7 2.2.7 3 .6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.5-.4Z" />
  </svg>
);

export default function Home() {
  return (
    <main id="top">
      <Loader />
      <Nav />

      {/* ───────── HERO ───────── */}
      <header className="hero" id="home">

        <div className="hero-grid wrap">
          <div className="hero-left">
            <ToolStrip className="hero-tools" />
            <p className="marker hero-kicker">BANOTH STUDIO</p>
            <h1 className="hero-title">
              <span className="port">PORT</span>
              <span className="folio">
                <span className="folio-tape" aria-hidden="true" />
                <Crown className="folio-crown" />
                FOLIO
              </span>
            </h1>
            <div className="hero-meta">
              <p className="marker hero-role">
                CREATIVE<br />VISUAL<br />DESIGNER
                <Squiggle className="hero-role-line" />
              </p>
              <Arrow className="hero-arrow" />
              <span className="hero-year">{YEAR}</span>
              <p className="marker hero-speak">DESIGNS<br />THAT<br />SPEAK.</p>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-yellow" aria-hidden="true" />
            <img src="/photo-bw.webp" alt="Banoth Sandeep Naik" className="hero-photo" width="900" height="1075" />
            <FaceDoodle className="hero-face" />
            <Slashes className="hero-slash hero-slash--a" />
            <Slashes className="hero-slash hero-slash--b" />
          </div>
        </div>
        <TornEdge color={PAPER} seed={11} />
      </header>

      {/* ───────── ABOUT / JOURNEY ───────── */}
      <section className="paper about" id="about">
        <div className="wrap about-grid">
          <div className="about-text">
            <p className="eyebrow"><b>01</b> About</p>
            <h2 className="about-name">BANOTH<br />SANDEEP <span className="nw">NAIK<i className="dot" /></span></h2>
            <p className="about-role">Founder &amp; Creative Designer<br />at Banoth Studio.</p>
            <p className="about-bio">
              I create bold and meaningful visuals for creators, brands and businesses. From thumbnails
              and social media to branding, posters and ads, I enjoy turning ideas into designs that get noticed.
            </p>
            <p className="signature">Sandeep</p>
            <dl className="stats">
              <div><dt>50+</dt><dd>Projects Completed</dd></div>
              <div><dt>30+</dt><dd>Happy Clients</dd></div>
              <div><dt>2+</dt><dd>Years Experience</dd></div>
            </dl>
          </div>

          <div className="about-photo">
            <Crown className="about-crown" />
            <div className="about-red" aria-hidden="true" />
            <img src="/photo-color.webp" alt="Banoth Sandeep Naik" className="about-img" width="900" height="1075" loading="lazy" />
            <p className="sticky-note marker">CREATIVE<br />THINKING<br />BIGGER<br />VISUALS</p>
            <FaceDoodle className="about-face" />
            <Slashes className="about-slash" />
          </div>

          <div className="about-journey">
            <p className="eyebrow"><b>02</b> My Journey</p>
            <p className="marker idea" aria-hidden="true">IDEA<br />DESIGN<br />CREATE<br />DELIVER<br />REPEAT<Squiggle className="idea-line" /></p>
            <h3 className="sub">Experience</h3>
            <ol className="timeline">
              {journey.map((j) => (
                <li key={j.years}>
                  <span className="t-years">{j.years}</span>
                  <span className="t-role">{j.role}</span>
                  <span className="t-at">{j.at}</span>
                </li>
              ))}
            </ol>
            <h3 className="sub">Tools I Use</h3>
            <p className="tools-label">Design &amp; Video</p>
            <ul className="tools">
              {tools.map((t) => (
                <li key={t.k}>
                  <ToolTile t={t} />
                  <span className="tool-name">{t.name}</span>
                </li>
              ))}
            </ul>
            <p className="tools-label">AI &amp; Gen-AI</p>
            <ul className="tools tools--ai">
              {aiTools.map((t) => (
                <li key={t.k}>
                  <ToolTile t={t} />
                  <span className="tool-name">{t.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── SERVICES ───────── */}
      <section className="paper services" id="services">
        <div className="wrap">
          <p className="eyebrow"><b>03</b> Services</p>
          <h2 className="section-title">WHAT I DO<i className="dot" /></h2>
          <ul className="service-grid">
            {services.map((s) => (
              <li key={s.title} className="service">
                <span className="service-icon">{Icon[s.icon]}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="service-go"><ArrowOut /></span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── FEATURED WORK ───────── */}
      <section className="dark work" id="work">
        <TornEdge color={PAPER} seed={23} flip />
        <div className="wrap work-inner">
          {/* CSS-only filter: radios drive which cards show */}
          {filters.map((f, i) => (
            <input key={f.id} type="radio" name="wf" id={`wf-${f.id}`} className="wf-input" defaultChecked={i === 0} />
          ))}
          <div className="work-head">
            <div>
              <p className="eyebrow eyebrow--dark"><b>04</b> Portfolio</p>
              <h2 className="section-title section-title--light">FEATURED <span className="nw">WORK<i className="dot" /></span></h2>
            </div>
            <div className="wf-bar" role="group" aria-label="Filter work">
              {filters.map((f) => (
                <label key={f.id} htmlFor={`wf-${f.id}`}>{f.label}</label>
              ))}
            </div>
            <a href="#work" className="view-all">View All <RightArrow /></a>
          </div>
          <ul className="work-grid">
            {work.map((w) => (
              <li key={w.m.title} className="work-card" data-type={w.type}>
                <Mockup m={w.m} />
                <h3>{w.title}</h3>
                <p>{w.cat}</p>
              </li>
            ))}
            <li className="work-empty">New projects in this category are coming soon.</li>
          </ul>
        </div>
      </section>

      {/* ───────── CONTACT ───────── */}
      <section className="paper contact" id="contact">
        <TornEdge color={INK} seed={41} flip className="torn--ink" />
        <div className="wrap contact-grid">
          <div>
            <p className="eyebrow"><b>05</b> Contact</p>
            <h2 className="section-title">LET&apos;S<br />WORK <span className="nw">TOGETHER<i className="dot" /></span></h2>
          </div>
          <div className="contact-cta">
            <p>Have a project in mind?<br />Let&apos;s discuss your ideas and create something amazing together.</p>
            <div className="contact-btns">
              <a href={QUOTE_URL} className="btn btn--ink">Get a Quote <RightArrow /></a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--wa">
                <WaIcon />
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <ul className="contact-list">
            <li><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="2" y="4" width="16" height="12" rx="1.5" /><path d="M2 5 L10 11 L18 5" /></svg><a href={`mailto:${EMAIL}`} className="sel">{EMAIL}</a></li>
            <li><WaIcon /><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="sel">{PHONE_DISPLAY}</a></li>
            <li><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M10 18 C5 12 4 10 4 8 A6 6 0 0 1 16 8 C16 10 15 12 10 18 Z" /><circle cx="10" cy="8" r="2" /></svg>Available for Remote Work</li>
          </ul>
          <p className="marker impact">Ideas<br />to<br />Impact<Squiggle className="impact-line" /></p>
        </div>
        <footer className="footer-band">
          <div className="wrap footer">
            <div className="footer-brand">
              <LogoMark />
              <div>
                <b>BANOTH STUDIO</b>
                <span>Graphic Design Studio · Designs that speak.</span>
              </div>
            </div>
            <div className="footer-contact">
              <a href={`mailto:${EMAIL}`} className="sel">{EMAIL}</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="sel">WhatsApp {PHONE_DISPLAY}</a>
            </div>
            <p className="footer-copy">© {YEAR} Banoth Studio. All rights reserved.</p>
          </div>
        </footer>
      </section>
    </main>
  );
}
