import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#how', label: 'How It Works' },
    { href: '#industries', label: 'Industries' },
    { href: '#resources', label: 'Resources' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#c9ccd5]">
      <nav className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between" aria-label="Primary">
        <a href="#home" className="flex items-center gap-2" aria-label="Clima Solutions home">
          <div className="grid grid-cols-2 gap-0.5" aria-hidden>
            <span className="h-2 w-2 bg-[#205db2]" />
            <span className="h-2 w-2 bg-[#c9ccd5]" />
            <span className="h-2 w-2 bg-[#c9ccd5]" />
            <span className="h-2 w-2 bg-[#205db2]" />
          </div>
          <span className="text-[#121212] font-semibold tracking-tight">Clima Solutions</span>
        </a>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-[#c9ccd5] px-3 py-2 text-[#121212]"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-[#121212] hover:text-[#092e61] underline-offset-4 hover:underline transition-colors">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="inline-flex items-center rounded-md bg-[#205db2] px-4 py-2 text-white hover:bg-[#092e61] transition-colors">
              Book a Heat Assessment
            </a>
          </li>
        </ul>
      </nav>
      {open && (
        <div className="md:hidden border-t border-[#c9ccd5]">
          <ul className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a onClick={() => setOpen(false)} href={item.href} className="block text-[#121212] hover:text-[#092e61] underline-offset-4 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a onClick={() => setOpen(false)} href="#contact" className="inline-flex items-center rounded-md bg-[#205db2] px-4 py-2 text-white hover:bg-[#092e61]">
                Book a Heat Assessment
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
