import { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import MagneticButton from '../ui/MagneticButton';

export interface CTALink {
  label: string;
  href: string;
  icon?: ReactNode;
  external?: boolean;
}

interface CaseCTAProps {
  title: string;
  sub: string;
  links: CTALink[];
  footnote?: string;
}

/** Closing call-to-action + back link, shared by every case study. */
export default function CaseCTA({ title, sub, links, footnote }: CaseCTAProps) {
  return (
    <>
      <div className="relative overflow-hidden py-24">
        <div
          className="absolute inset-x-0 bottom-[-16rem] mx-auto h-[26rem] w-[42rem] max-w-full rounded-full opacity-[0.14]"
          style={{ background: 'radial-gradient(ellipse, #D89257 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-medium tracking-tight text-mist-50 md:text-4xl">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-5 text-lg text-mist-400">{sub}</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              {links.map((link, i) =>
                i === 0 ? (
                  <MagneticButton key={link.label}>
                    <a href={link.href} className="btn-primary w-full justify-center sm:w-auto">
                      {link.label}
                      {link.icon && <span className="btn-orb">{link.icon}</span>}
                    </a>
                  </MagneticButton>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="btn-ghost justify-center"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                )
              )}
            </div>
          </Reveal>
          {footnote && (
            <Reveal delay={280}>
              <p className="mt-7 font-mono text-xs text-mist-500">{footnote}</p>
            </Reveal>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-wrap px-4 pb-20 sm:px-6 lg:px-8">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widecaps text-mist-400 transition-colors duration-500 hover:text-copper-300"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-500 ease-out group-hover:-translate-x-1" />
          Back to Projects
        </Link>
      </div>
    </>
  );
}
