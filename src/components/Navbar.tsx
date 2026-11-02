import { Menu, X } from 'lucide-react';
import { useEffect, useState, type CSSProperties } from 'react';
import Button from '@/components/Button';
import { siteContent } from '@/data/siteContent';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { nav, brand } = siteContent;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line bg-white/95 text-navy backdrop-blur-md transition-shadow duration-300 ease-out ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" onClick={closeMenu} className="flex shrink-0 items-center">
          <img src={brand.logo.src} alt={brand.logo.alt} className="h-10 w-auto object-contain sm:h-12 lg:h-16" />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 text-sm lg:flex">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Button href={nav.cta.href} arrow className="!px-5 !py-2.5 text-sm">
              {nav.cta.label}
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? nav.closeLabel : nav.menuLabel}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-current transition-colors duration-300 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="animate-slide-down border-t border-line bg-white text-navy lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {nav.links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{ '--d': `${80 + index * 70}ms` } as CSSProperties}
                className="mobile-link border-b border-line py-4 font-heading text-lg font-medium"
              >
                {link.label}
              </a>
            ))}
            <div
              className="mobile-link pt-5 pb-2"
              style={{ '--d': `${80 + nav.links.length * 70}ms` } as CSSProperties}
            >
              <Button href={nav.cta.href} arrow className="w-full" variant="primary">
                {nav.cta.label}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
