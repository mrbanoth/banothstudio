'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import { EMAIL, PHONE_DISPLAY, WHATSAPP_URL } from './site';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Portfolio' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const RightArrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 8 H13 M9 4 L13 8 L9 12" />
  </svg>
);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  // Shadow + compact bar once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently on screen
  useEffect(() => {
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Lock page scroll while the menu is open; Esc closes it
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className={`site-nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`} aria-label="Main">
      <div className="nav wrap">
        <a href="#home" className="logo-link" onClick={close} aria-label="Banoth Studio home">
          <Logo />
        </a>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} data-nav={l.id} className={active === l.id ? 'active' : ''}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="#contact" className="btn btn--yellow nav-cta">Let&apos;s Work <RightArrow /></a>
          <button
            type="button"
            id="menu-toggle"
            className="burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className="m-menu" id="mobile-menu" aria-hidden={!open}>
        <div className="m-menu-inner wrap">
          <p className="m-eyebrow">Menu</p>
          <ul className="m-links">
            {links.map((l, i) => (
              <li key={l.id} style={{ '--i': i }}>
                <a href={`#${l.id}`} data-nav={l.id} className={active === l.id ? 'active' : ''} onClick={close} tabIndex={open ? 0 : -1}>
                  <span>{l.label}</span>
                  <RightArrow />
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--yellow m-cta" onClick={close} tabIndex={open ? 0 : -1}>
            Start a Project <RightArrow />
          </a>
          <div className="m-foot">
            <a href={`mailto:${EMAIL}`} tabIndex={open ? 0 : -1}>{EMAIL}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>WhatsApp {PHONE_DISPLAY}</a>
            <span className="marker m-tag">Ideas to Impact</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
