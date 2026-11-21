import { useState } from 'react';

const links = [['Work', '#work'], ['About', '#about'], ['Skills', '#skills'], ['Contact', '#contact']];

export default function Header({ darkMode, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-[var(--line)] px-5 sm:px-8">
      <a href="#main" className="skip-link button">Skip to content</a>
      <nav aria-label="Main navigation" className="page-container flex min-h-20 flex-wrap items-center justify-between gap-3 py-4">
        <a href="#top" className="text-sm font-bold tracking-tight">Chandankumar Ray</a>
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden items-center gap-6 md:flex">
            {links.map(([label, href]) => <a key={href} href={href} className="text-sm text-[var(--muted)] hover:text-[var(--accent)]">{label}</a>)}
          </div>
          <button type="button" onClick={onToggleTheme} className="button" aria-label="Dark theme" aria-pressed={darkMode}>{darkMode ? 'Light mode' : 'Dark mode'}</button>
          <button type="button" onClick={() => setOpen(!open)} className="button md:hidden" aria-expanded={open} aria-controls="mobile-navigation">Menu</button>
        </div>
        {open && (
          <div id="mobile-navigation" className="w-full border-t border-[var(--line)] pt-2 md:hidden" onKeyDown={(event) => { if (event.key === 'Escape') setOpen(false); }}>
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block py-3 text-sm">{label}</a>)}
          </div>
        )}
      </nav>
    </header>
  );
}
