import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { iconMap } from '@/data/icons';
import { siteContent } from '@/data/siteContent';

export default function Services() {
  const { services } = siteContent;

  return (
    <section id={services.id} className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading label={services.label} title={services.title} />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {services.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            const span = `${index === 4 ? 'md:col-span-2' : ''} ${index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`;
            return (
              <Reveal key={item.key} delay={index * 100} className={`h-full ${span}`}>
                <article className="group flex h-full flex-col rounded-lg border border-line bg-white p-8 shadow-sm transition-[transform,border-color,box-shadow] duration-250 ease-out hover:-translate-y-1.5 hover:border-teal hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-mint text-teal transition-colors duration-250 ease-out group-hover:bg-teal group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 flex-1 leading-[1.5] text-muted">{item.description}</p>
                  <a
                    href={item.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal transition-colors duration-250 hover:text-teal-deep"
                  >
                    {services.learnMore}
                    <span className="sr-only"> about {item.title}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-250 ease-out group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
