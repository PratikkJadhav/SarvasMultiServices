import { Check } from 'lucide-react';
import type { CSSProperties } from 'react';
import Reveal from '@/components/Reveal';
import ProjectIllustration from '@/components/ProjectIllustration';
import { siteContent } from '@/data/siteContent';

type Project = (typeof siteContent.projects.items)[number];

interface ProjectBlockProps {
  project: Project;
  reverse: boolean;
}

export default function ProjectBlock({ project, reverse }: ProjectBlockProps) {
  return (
    <article
      id={project.id}
      className={`scroll-mt-24 flex flex-col gap-12 lg:items-center lg:gap-20 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
    >
      <Reveal className="flex-1">
        <p className="section-label">
          {project.index} / {project.category}
        </p>
        <h3 className="mt-4 text-2xl font-bold sm:text-3xl">{project.title}</h3>
        <blockquote className="mt-6 border-l-2 border-amber pl-5 font-heading text-lg italic leading-[1.5] text-navy/85">
          &ldquo;{project.quote}&rdquo;
        </blockquote>

        <div className="mt-8">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted">Site considerations</p>
          <ul className="mt-4 space-y-3">
            {project.considerations.map((item, index) => (
              <li
                key={item}
                className="slide-in-left flex items-start gap-3 leading-[1.5]"
                style={{ '--d': `${350 + index * 150}ms` } as CSSProperties}
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" strokeWidth={2.5} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 leading-[1.5] text-muted">{project.description}</p>
      </Reveal>

      <Reveal className="group flex-1" delay={150}>
        <div className="relative overflow-hidden rounded-lg border border-line bg-paper shadow-sm">
          <div className="clip-wipe aspect-[8/5]">
            <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
              <div className="image-settle h-full w-full">
                <ProjectIllustration variant={project.illustration} />
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-0 flex items-start justify-between border-b border-line bg-white/90 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.15em] text-navy backdrop-blur-sm">
            <span>{project.figureLabel}</span>
            <span className="text-muted">{project.figureNote}</span>
          </div>
        </div>
      </Reveal>
    </article>
  );
}
