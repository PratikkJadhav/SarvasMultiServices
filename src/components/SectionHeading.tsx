import Reveal from '@/components/Reveal';

interface SectionHeadingProps {
  label: string;
  title: string;
  paragraph?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}

export default function SectionHeading({ label, title, paragraph, align = 'left', tone = 'light' }: SectionHeadingProps) {
  const isDark = tone === 'dark';
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className={`section-label ${isDark ? '!text-teal-light' : ''}`}>{label}</p>
      <h2 className={`mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl ${isDark ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {paragraph && (
        <p className={`mt-6 text-base leading-[1.5] sm:text-lg ${isDark ? 'text-mint/80' : 'text-muted'}`}>{paragraph}</p>
      )}
    </Reveal>
  );
}
