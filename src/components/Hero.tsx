import { Check } from 'lucide-react';
import type { CSSProperties } from 'react';
import Button from '@/components/Button';
import PipelineDiagram from '@/components/PipelineDiagram';
import { siteContent } from '@/data/siteContent';

const delay = (ms: number) => ({ animationDelay: `${ms}ms` }) as CSSProperties;

const chipPlacement = [
  'lg:absolute lg:-left-6 lg:top-[10%]',
  'lg:absolute lg:-right-4 lg:top-[50%]',
  'lg:absolute lg:left-[8%] lg:-bottom-8',
];
const chipFloat = ['float-slow', 'float-medium', 'float-fast'];

const heroBackground = {
  background:
    'radial-gradient(ellipse at 75% 25%, rgba(14,124,134,0.38), transparent 55%), radial-gradient(ellipse at 5% 95%, rgba(14,124,134,0.2), transparent 50%), linear-gradient(160deg, #0B2E3B 0%, #08222C 100%)',
};

export default function Hero() {
  const { hero } = siteContent;
  const { diagram } = hero;

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-navy pb-20 pt-32 text-white">
      <div aria-hidden="true" className="hero-zoom absolute inset-0">
        <div className="absolute inset-0" style={heroBackground} />
        <div className="blueprint-grid-dark absolute inset-0" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="hero-fade font-mono text-xs uppercase tracking-[0.2em] text-teal-light" style={delay(0)}>
            {hero.label}
          </p>

          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {hero.headlineLines.map((line, index) => (
              <span key={line} className="block overflow-hidden pb-[0.1em]">
                <span className="hero-line block" style={delay(200 + index * 120)}>
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero-fade mt-6 flex items-center gap-4 font-heading text-base tracking-wide text-teal-light sm:text-lg" style={delay(560)}>
            <span className="h-px w-10 shrink-0 bg-amber" aria-hidden="true" />
            <span>{siteContent.brand.tagline}</span>
          </p>

          <p className="hero-fade mt-8 max-w-xl text-base leading-[1.5] text-mint/85 sm:text-lg" style={delay(600)}>
            {hero.paragraph}
          </p>

          <div className="hero-fade mt-10 flex flex-col gap-4 sm:flex-row" style={delay(750)}>
            <Button href={hero.primaryCta.href} arrow>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="outline-dark" arrow>
              {hero.secondaryCta.label}
            </Button>
          </div>

          <div
            className="hero-fade mt-12 max-w-xl rounded-lg border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur-md sm:p-8"
            style={delay(900)}
          >
            <h2 className="font-heading text-xl font-bold text-white">{hero.principles.title}</h2>
            <ul className="mt-5 space-y-4">
              {hero.principles.items.map((item, index) => (
                <li key={item} className="hero-fade flex items-start gap-3 text-sm leading-[1.5] text-mint sm:text-base" style={delay(1000 + index * 100)}>
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-light" strokeWidth={2.5} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="diagram-fade rounded-lg border border-white/15 bg-navy/70 p-4 shadow-2xl sm:p-6" style={delay(300)}>
            <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-mint/70">
              <span>Fig. {diagram.sheet}</span>
              <span>Not to scale</span>
            </div>
            <PipelineDiagram />
            <div className="mt-4 grid grid-cols-2 divide-x divide-y divide-white/20 border border-white/20 font-mono text-[10px] uppercase tracking-[0.12em]">
              <div className="col-span-2 px-3 py-2.5 font-bold text-white">{diagram.company}</div>
              <div className="px-3 py-2.5 text-mint">{diagram.sheetTitle}</div>
              <div className="grid grid-cols-2 divide-x divide-white/20">
                <span className="px-3 py-2.5 text-mint">SHEET: {diagram.sheet}</span>
                <span className="px-3 py-2.5 text-mint">REV: {diagram.rev}</span>
              </div>
            </div>
            <p className="mt-3 text-xs leading-[1.5] text-mint/70">{diagram.disclaimer}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 lg:contents">
            {hero.chips.map((chip, index) => (
              <div key={chip} className={`chip-in ${chipPlacement[index]}`} style={delay(1600 + index * 250)}>
                <div
                  className={`${chipFloat[index]} inline-flex items-center gap-2.5 rounded-lg border border-white/20 bg-navy/95 px-3.5 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-white shadow-xl`}
                >
                  <span className="h-2 w-2 rounded-full bg-teal-light shadow-[0_0_0_3px_rgba(92,198,204,0.25)]" aria-hidden="true" />
                  {chip}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
