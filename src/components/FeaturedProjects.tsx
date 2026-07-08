import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredProjects } from '../data/projects';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';

export default function FeaturedProjects() {
  return (
    <section id="work" className="relative border-y border-white/[0.05] bg-ink-900 py-28 md:py-36">
      <div className="mx-auto max-w-wrap px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          label="Selected work"
          title="Featured Projects"
          sub="Selected work across IoT, mobile, cloud, and ML"
        />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 110} className="h-full">
              <TiltCard strength={4} className="h-full rounded-2xl">
                <Link
                  to={`/projects/${project.id}`}
                  className="group panel flex h-full flex-col p-7 transition-all duration-500 ease-out hover:border-copper-500/25"
                >
                  <div className="mb-6 flex items-start justify-between gap-3">
                    <span className="font-mono text-xs tracking-widecaps text-mist-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-mist-400">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          project.status === 'Completed'
                            ? 'bg-sage'
                            : 'animate-pulseDot bg-copper-400'
                        }`}
                        aria-hidden="true"
                      />
                      {project.status}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-medium tracking-tight text-mist-50 transition-colors duration-500 group-hover:text-copper-300">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-mist-400">{project.subtitle}</p>

                  <p className="mt-5 flex-grow text-sm leading-relaxed text-mist-300">
                    {project.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.featuredTags.map((tag) => (
                      <span key={tag} className="chip !px-2 !py-0.5 !text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
                    <span className="text-sm font-medium text-copper-300">View case study</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-mist-300 transition-all duration-500 ease-out group-hover:border-copper-500/50 group-hover:bg-copper-500/10 group-hover:text-copper-300">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={250}>
          <div className="mt-14 flex justify-center">
            <Link to="/projects" className="btn-ghost group">
              View all projects
              <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
