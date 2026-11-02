import { Plus } from 'lucide-react';
import Button from '@/components/Button';
import Reveal from '@/components/Reveal';
import { siteContent } from '@/data/siteContent';

export default function FinalCta() {
  const { cta } = siteContent;

  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
      <div aria-hidden="true" className="blueprint-grid-dark grid-drift absolute -inset-10" />
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
        <div className="cta-glow h-[28rem] w-[28rem] rounded-full bg-teal/30 blur-3xl" />
      </div>

      <Reveal className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-white/30 text-teal-light">
          <Plus className="h-6 w-6" strokeWidth={2.5} aria-hidden="true" />
        </span>
        <h2 className="mt-8 text-3xl font-bold sm:text-4xl lg:text-5xl">{cta.title}</h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={cta.secondary.href} variant="outline-dark">
            {cta.secondary.label}
          </Button>
          <Button href={cta.primary.href} arrow>
            {cta.primary.label}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
