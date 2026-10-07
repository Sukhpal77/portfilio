import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { LOGO_URL } from '../data/portfolioData';
import { NAV_SECTIONS } from '../data/navigation';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const update = () => {
      const link = nav.querySelector<HTMLElement>('[aria-current="location"]');
      if (!link || !nav.offsetWidth) return;
      setIndicator({ left: link.getBoundingClientRect().left - nav.getBoundingClientRect().left, width: link.getBoundingClientRect().width });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(nav);
    return () => observer.disconnect();
  }, [activeSection]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [mobileMenuOpen]);

  const renderLink = (link: typeof NAV_SECTIONS[number]) => (
    <a key={link.id} href={`#${link.id}`} aria-current={activeSection === link.id ? 'location' : undefined}
      onClick={(event) => { event.preventDefault(); onNavigate(link.id); setMobileMenuOpen(false); }}
      className={`nav-link ${activeSection === link.id ? 'nav-link-active' : ''}`}>
      {link.label}
    </a>
  );

  return (
    <header className="site-header fixed top-0 inset-x-0 z-50 backdrop-blur-xl">
      <div className="page-container header-row">
        <a href="#home" onClick={(event) => { event.preventDefault(); onNavigate('home'); setMobileMenuOpen(false); }} className="header-brand flex items-center gap-2.5 min-w-0">
          {logoFailed ? (
            <span className="brand-mark shrink-0" aria-hidden="true">SS</span>
          ) : (
            <img alt="Sukhpal Singh Logo" className="h-8 w-8 object-contain shrink-0" src={LOGO_URL} onError={() => setLogoFailed(true)} />
          )}
          <div className="min-w-0">
            <span className="block font-semibold text-sm sm:text-[16px] leading-tight truncate">Sukhpal Singh</span>
            <span className="block font-mono text-[9px] sm:text-[10px] text-[#bbcabf] uppercase tracking-wider truncate">Full-Stack & AI Engineer</span>
          </div>
        </a>
        <nav ref={navRef} aria-label="Main navigation" className="desktop-navigation">
          {indicator && <span aria-hidden="true" className="nav-indicator" style={{ width: indicator.width, transform: `translateX(${indicator.left}px)` }} />}
          {NAV_SECTIONS.map(renderLink)}
        </nav>
        <div className="header-actions flex items-center gap-2 shrink-0">
          <button onClick={() => { setMobileMenuOpen(false); onOpenContact(); }} className="header-cta text-xs font-semibold px-3 py-2 rounded-lg inline-flex items-center gap-2 whitespace-nowrap">
            Let's Talk <span aria-hidden="true">↗</span>
          </button>
          <button onClick={() => setMobileMenuOpen((open) => !open)} className="navigation-toggle p-2 rounded-lg border border-white/10" aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation">
            <span className="material-symbols-outlined text-[20px] block" aria-hidden="true">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-navigation grid grid-cols-2 sm:grid-cols-3 gap-1 p-4 border-t border-white/10 bg-[#121318] max-h-[75vh] overflow-y-auto">
          {NAV_SECTIONS.map(renderLink)}
          <button className="header-cta col-span-full rounded-lg p-3 mt-2 text-sm font-semibold" onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}>Let's Talk ↗</button>
        </nav>
      )}
    </header>
  );
};
