import type { CSSProperties } from 'react';
import { ArrowRight, Check, FileText } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { siteContent } from '@/data/siteContent';

export default function TenderChecklist() {
  const { checklist } = siteContent;
  const { document, download } = checklist;

  return (
    <section id={checklist.id} className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading label={checklist.label} title={checklist.title} />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <article className="rounded-lg border border-line bg-white p-6 shadow-lg transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-10">
              <div className="flex items-start gap-4 border-b border-line pb-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-mint text-teal">
                  <FileText className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <p className="section-label !text-muted">{document.label}</p>
                  <h3 className="mt-2 text-xl font-bold sm:text-2xl">{document.title}</h3>
                </div>
              </div>

              <ul className="divide-y divide-line">
                {document.rows.map((row, index) => (
                  <li key={row}>
                    <Reveal delay={index * 100}>
                      <div className="flex items-center gap-4 py-4">
                        <Check
                          className="draw-check h-5 w-5 shrink-0 text-teal"
                          strokeWidth={2.5}
                          aria-hidden="true"
                          style={{ '--d': `${300 + index * 100}ms` } as CSSProperties}
                        />
                        <span className="text-sm leading-[1.5] sm:text-base">{row}</span>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={150}>
            <h3 className="text-2xl font-bold sm:text-3xl">{download.title}</h3>
            <p className="mt-5 leading-[1.5] text-muted">{download.paragraph}</p>

            <div className="mt-8">
              <button
                type="button"
                disabled
                className="btn-primary group cursor-not-allowed hover:bg-amber hover:shadow-sm"
              >
                <span>{download.cta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <p className="mt-4 text-sm font-medium text-navy">{download.note}</p>
              <p className="mt-2 text-sm text-muted">{download.unavailable}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
