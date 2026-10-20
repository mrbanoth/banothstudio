import { LogoMark } from './Logo';

// Intro screen. Pure CSS: it plays once and slides away by itself (no JS needed).
export default function Loader() {
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader-inner">
        <LogoMark className="loader-mark" />
        <span className="loader-word">
          <span className="loader-main">BANOTH</span>
          <span className="loader-sub">STUDIO</span>
        </span>
        <span className="loader-bar"><i /></span>
        <span className="loader-tag marker">Designs that speak.</span>
      </div>
    </div>
  );
}
