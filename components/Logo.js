// Banoth Studio logo: red "BS" monogram block with a crown, BANOTH wordmark, STUDIO on yellow tape.
export function LogoMark({ className = '' }) {
  return (
    <span className={`logo-mark ${className}`} aria-hidden="true">
      <svg className="logo-crown" viewBox="0 0 60 44" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M6 36 L3 8 L18 22 L30 4 L41 22 L57 9 L53 36 Z" />
      </svg>
      <span className="logo-bs">B<span>S</span></span>
    </span>
  );
}

export default function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`}>
      <LogoMark />
      <span className="logo-word">
        <span className="logo-main">BANOTH</span>
        <span className="logo-sub">STUDIO</span>
      </span>
    </span>
  );
}
