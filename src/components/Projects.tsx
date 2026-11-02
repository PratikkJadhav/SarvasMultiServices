import { Info } from 'lucide-react';
import ProjectBlock from '@/components/ProjectBlock';
import SectionHeading from '@/components/SectionHeading';
import { siteContent } from '@/data/siteContent';

export default function Projects() {
  const { projects } = siteContent;

  return (
    <section id={projects.id} className="scroll-mt-20 bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading label={projects.label} title={projects.title} paragraph={projects.paragraph} />

        <p className="mt-8 flex max-w-3xl items-start gap-3 rounded-lg border border-line bg-white px-5 py-4 text-sm leading-[1.5] text-muted">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
          <span>{projects.notice}</span>
        </p>

        <div className="mt-20 space-y-24 sm:space-y-32">
          {projects.items.map((project, index) => (
            <ProjectBlock key={project.id} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
