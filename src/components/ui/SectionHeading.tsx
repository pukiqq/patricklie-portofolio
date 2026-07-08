import Reveal from './Reveal';

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  sub?: string;
}

/** Numbered telemetry-style section header: `01 / SKILLS` + display title. */
export default function SectionHeading({ index, label, title, sub }: SectionHeadingProps) {
  return (
    <div className="mb-14 md:mb-16">
      <Reveal>
        <p className="eyebrow mb-4 flex items-center gap-3">
          <span>{index}</span>
          <span className="h-px w-8 bg-copper-500/40" aria-hidden="true" />
          <span>{label}</span>
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display text-3xl font-medium tracking-tightest text-mist-50 md:text-[2.6rem] md:leading-[1.1]">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={160}>
          <p className="mt-4 max-w-xl text-mist-400">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
