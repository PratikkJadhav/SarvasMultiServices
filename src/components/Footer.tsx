import { siteContent } from '@/data/siteContent';

export default function Footer() {
  const { brand, footer } = siteContent;

  return (
    <footer className="border-t border-line bg-paper text-navy">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between">
        <a href="#top" className="flex shrink-0 items-center">
          <img src={brand.logo.src} alt={brand.logo.alt} className="h-14 w-auto object-contain" />
        </a>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {footer.links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link transition-colors duration-300 hover:text-teal">
              {link.label}
            </a>
          ))}
        </nav>

        <p className="font-mono text-xs tracking-[0.08em] text-muted">{brand.copyright}</p>
      </div>
    </footer>
  );
}
