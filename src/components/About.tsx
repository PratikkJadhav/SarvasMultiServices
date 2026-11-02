import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { iconMap } from '@/data/icons';
import { siteContent } from '@/data/siteContent';

export default function About() {
  const { about } = siteContent;

  return (
    <section id={about.id} className="scroll-mt-20 bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <SectionHeading label={about.label} title={about.title} />
          <Reveal delay={150}>
            <div className="mt-6 space-y-5 text-lg leading-[1.5] text-muted">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5">
          {about.tiles.map((tile, index) => {
            const Icon = iconMap[tile.icon];
            return (
              <Reveal key={tile.title} delay={index * 150}>
                <article className="flex items-start gap-5 rounded-lg border border-line bg-white p-7 shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-teal hover:shadow-md">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-mint text-teal">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{tile.title}</h3>
                    <p className="mt-2 leading-[1.5] text-muted">{tile.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
