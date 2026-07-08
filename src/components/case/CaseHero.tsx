import { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';

export interface CaseFact {
  label: string;
  value: string;
}

export interface CaseLink {
  label: string;
  href: string;
  icon: ReactNode;
  primary?: boolean;
}

interface CaseHeroProps {
  title: string;
  subtitle: string;
  description: string;
  facts: CaseFact[];
  techStack: string[];
  status: string;
  links?: CaseLink[];
  /** Extra line under the overview panel, e.g. "Repository available upon request". */
  footnote?: string;
}

/**
 * Shared case-study opener: back link, display title + copper subtitle on the
 * left, double-bezel overview panel on the right.
 */
export default function CaseHero({
  title,
  subtitle,
  description,
  facts,
  techStack,
  status,
  links = [],
  footnote,
}: CaseHeroProps) {
  return (
    <div className="relative overflow-hidden pb-20 pt-32">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,black,transparent)]" aria-hidden="true" />
      <div
        className="absolute -top-32 right-[-8%] h-[26rem] w-[26rem] rounded-full opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, #D89257 0%, transparent 62%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-wrap px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Link
            to="/projects"
            className="group mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widecaps text-mist-400 transition-colors duration-500 hover:text-copper-300"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-500 ease-out group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </Reveal>

        <div className="grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Reveal delay={80}>
              <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-mist-50 md:text-6xl">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 font-mono text-sm uppercase tracking-wider text-copper-300">
                {subtitle}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mist-300">{description}</p>
            </Reveal>
            {links.length > 0 && (
              <Reveal delay={320}>
                <div className="mt-9 flex flex-wrap gap-3">
                  {links.map((link) =>
                    link.primary ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary !py-2 text-sm"
                      >
                        {link.label}
                        <span className="btn-orb !h-7 !w-7">{link.icon}</span>
                      </a>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost !px-5 !py-2 text-sm"
                      >
                        {link.icon}
                        {link.label}
                      </a>
                    )
                  )}
                </div>
              </Reveal>
            )}
          </div>

          <Reveal delay={280} className="lg:col-span-2">
            <div className="shell">
              <div className="panel-quiet p-7">
                <p className="eyebrow mb-6">Project Overview</p>
                <dl className="space-y-5">
                  {facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="font-mono text-[10px] uppercase tracking-widecaps text-mist-500">
                        {fact.label}
                      </dt>
                      <dd className="mt-1 font-medium text-mist-50">{fact.value}</dd>
                    </div>
                  ))}
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widecaps text-mist-500">
                      Tech Stack
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {techStack.map((tech) => (
                        <span key={tech} className="chip !px-2 !py-0.5 !text-[11px]">
                          {tech}
                        </span>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widecaps text-mist-500">
                      Status
                    </dt>
                    <dd className="mt-1.5 flex items-center gap-2 text-sm font-medium text-mist-50">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          status === 'Completed' ? 'bg-sage' : 'animate-pulseDot bg-copper-400'
                        }`}
                        aria-hidden="true"
                      />
                      {status}
                    </dd>
                  </div>
                </dl>
                {footnote && (
                  <p className="mt-6 border-t border-white/[0.06] pt-5 font-mono text-[11px] text-mist-500">
                    {footnote}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
