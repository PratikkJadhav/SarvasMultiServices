import type { CSSProperties } from 'react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { siteContent } from '@/data/siteContent';

export default function Approach() {
  const { approach } = siteContent;
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <section id={approach.id} className="relative scroll-mt-20 overflow-hidden bg-white py-24 sm:py-32">
      <div aria-hidden="true" className="blueprint-grid absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading label={approach.label} title={approach.title} paragraph={approach.paragraph} />

        <div ref={ref} className={`relative mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 ${inView ? 'is-visible' : ''}`}>
          <span
            aria-hidden="true"
            className="grow-x absolute left-[12.5%] right-[12.5%] top-[7px] hidden h-px bg-teal lg:block"
            style={{ '--d': '200ms' } as CSSProperties}
          />
          <span
            aria-hidden="true"
            className="grow-y absolute bottom-6 left-[7px] top-[7px] w-px bg-teal md:hidden"
            style={{ '--d': '200ms' } as CSSProperties}
          />

          {approach.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 150} className="relative h-full pl-10 lg:pl-0 lg:pt-10">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-teal bg-white lg:left-1/2 lg:-translate-x-1/2 lg:top-0"
              />
              <article className="h-full rounded-lg border border-line bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md">
                <p className="section-label">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-[1.5] text-muted">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
