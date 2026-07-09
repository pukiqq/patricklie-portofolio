import { ReactNode } from 'react';
import Reveal from './ui/Reveal';

interface ProjectSectionProps {
  title: string;
  children: ReactNode;
  /** 'gray' renders on the raised alternate surface. */
  background?: 'white' | 'gray' | '';
}

export default function ProjectSection({ title, children, background = 'white' }: ProjectSectionProps) {
  const bgColor = background === 'gray' ? 'bg-ink-900' : 'bg-ink-950';

  return (
    <section className={`${bgColor} px-4 py-20 sm:px-6 md:py-24 lg:px-8`}>
      <div className="mx-auto max-w-wrap">
        <Reveal>
          <h2 className="mb-10 flex items-center gap-4 font-display text-2xl font-medium tracking-tight text-mist-50 md:text-[2rem]">
            <span className="h-6 w-[3px] rounded-full bg-copper-400" aria-hidden="true" />
            {title}
          </h2>
        </Reveal>
        <Reveal delay={120}>{children}</Reveal>
      </div>
    </section>
  );
}
