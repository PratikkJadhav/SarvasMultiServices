import type { CSSProperties } from 'react';
import { Check, ArrowRight, FileText, Info } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { siteContent } from '@/data/siteContent';
import SurveyForm from '@/components/SurveyForm';

export default function SurveyRequest() {
  const { survey } = siteContent;
  const { ref, inView } = useInView<HTMLOListElement>(0.3);

  return (
    <section id={survey.id} className="scroll-mt-20 bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <SectionHeading label={survey.label} title={survey.title} paragraph={survey.paragraph} />
          <Reveal delay={150}>
            <p className="mt-6 flex items-center gap-2 font-medium text-navy">
              <Info className="h-4 w-4 text-teal" aria-hidden="true" />
              {survey.noObligation}
            </p>
          </Reveal>

          <ol ref={ref} className={`relative mt-14 space-y-10 ${inView ? 'is-visible' : ''}`}>
            <span
              aria-hidden="true"
              className="grow-y absolute bottom-8 left-[17px] top-8 w-px bg-teal"
              style={{ '--d': '300ms' } as CSSProperties}
            />
            {survey.steps.map((step, index) => (
              <li key={step.title} className="relative">
                <Reveal delay={index * 200}>
                  <div className="flex gap-6">
                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-teal bg-white font-mono text-xs font-medium text-teal">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="pt-1">
                      <h3 className="text-lg font-bold">{step.title}</h3>
                      <p className="mt-2 leading-[1.5] text-muted">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <SurveyForm />
      </div>
    </section>
  );
}
