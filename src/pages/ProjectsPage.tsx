import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allProjects } from '../data/projects';
import Reveal from '../components/ui/Reveal';
import TiltCard from '../components/ui/TiltCard';

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-24 pt-36">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-wrap px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <Reveal>
            <p className="eyebrow mb-5 flex items-center gap-3">
              <span>Index</span>
              <span className="h-px w-8 bg-copper-500/40" aria-hidden="true" />
              <span>{String(allProjects.length).padStart(2, '0')} entries</span>
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="font-display text-5xl font-semibold tracking-tightest text-mist-50 md:text-7xl">
              Projects
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-lg text-mist-400">
              Selected work across IoT, mobile, cloud, and machine learning
            </p>
          </Reveal>
        </div>

        <div className="space-y-4">
          {allProjects.map((project, i) => (
            <Reveal key={project.id} delay={Math.min(i, 2) * 90}>
              <TiltCard strength={1.6} className="rounded-2xl">
              <Link
                to={`/projects/${project.id}`}
                className="group panel block p-8 transition-colors duration-500 ease-out hover:border-copper-500/30 md:p-10"
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                  {/* Index number */}
                  <span className="font-display text-3xl font-medium tracking-tight text-mist-600 transition-colors duration-500 group-hover:text-copper-400 lg:w-20 lg:flex-shrink-0 lg:text-4xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="flex-grow">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h2 className="font-display text-2xl font-medium tracking-tight text-mist-50 transition-colors duration-500 group-hover:text-copper-300 md:text-3xl">
                          {project.title}
                        </h2>
                        <p className="mt-1.5 text-mist-400">{project.subtitle}</p>
                      </div>
                      <span className="flex flex-shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-mist-400">
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

                    <p className="mt-5 max-w-3xl leading-relaxed text-mist-300">
                      {project.description}
                    </p>

                    <div className="mt-7 grid grid-cols-1 gap-4 border-y border-white/[0.06] py-5 sm:grid-cols-3">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widecaps text-mist-500">
                          Role
                        </p>
                        <p className="mt-1 text-sm font-medium text-mist-50">{project.role}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widecaps text-mist-500">
                          Timeline
                        </p>
                        <p className="mt-1 text-sm font-medium text-mist-50">{project.timeline}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widecaps text-mist-500">
                          Status
                        </p>
                        <p className="mt-1 text-sm font-medium text-mist-50">{project.status}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="chip !px-2 !py-0.5 !text-[11px]">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="flex items-center gap-2 text-sm font-medium text-copper-300">
                        Read full case study
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] transition-all duration-500 ease-out group-hover:border-copper-500/50 group-hover:bg-copper-500/10">
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
