import { useState } from 'react';

const links = [['Work', '#work'], ['Approach', '#about'], ['Toolkit', '#skills'], ['Contact', '#contact']];

export default function Header({ darkMode, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-50 px-5 pt-5 sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-6xl items-center justify-between border-b border-[#18202b]/15 pb-5 dark:border-white/15">
        <a href="#top" className="flex items-center gap-3" aria-label="Chandankumar Ray home"><span className="grid h-9 w-9 place-items-center rounded-full bg-[#18202b] text-xs font-bold text-[#f7f7f3] dark:bg-[#f3f1ea] dark:text-[#101318]">CR</span><span className="text-sm font-bold tracking-tight">Chandankumar Ray</span></a>
        <div className="hidden items-center gap-8 md:flex">{links.map(([label, href]) => <a key={href} href={href} className="text-sm font-semibold text-[#59616b] transition hover:text-violet-600 dark:text-[#b7bbc2] dark:hover:text-violet-300">{label}</a>)}<button type="button" onClick={onToggleTheme} className="rounded-full border border-[#18202b]/15 px-3 py-1.5 text-xs font-bold text-[#59616b] transition hover:border-violet-500 hover:text-violet-600 dark:border-white/15 dark:text-[#b7bbc2] dark:hover:text-violet-300" aria-label="Toggle colour theme">{darkMode ? 'Light' : 'Dark'}</button></div>
        <div className="flex items-center gap-2 md:hidden"><button type="button" onClick={onToggleTheme} className="rounded-full border border-[#18202b]/15 px-3 py-1.5 text-xs font-bold dark:border-white/15" aria-label="Toggle colour theme">{darkMode ? 'Light' : 'Dark'}</button><button type="button" onClick={() => setOpen((value) => !value)} className="rounded-full border border-[#18202b]/15 px-3 py-1.5 text-xs font-bold dark:border-white/15" aria-expanded={open} aria-label="Toggle navigation">Menu</button></div>
        {open && <div className="absolute left-5 right-5 top-16 rounded-2xl border border-[#18202b]/10 bg-[#f7f7f3] p-3 shadow-xl dark:border-white/10 dark:bg-[#181c23] md:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-violet-500/10">{label}</a>)}</div>}
      </nav>
    </header>
  );
}
