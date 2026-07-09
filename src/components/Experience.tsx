import { MapPin, Calendar } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function Experience() {
  const experiences = [
    {
      company: 'Alva Production',
      role: 'Software Engineer Intern (App Development)',
      type: 'Remote (WFH)',
      period: '2024',
      tech: ['Flutter', 'Android Studio'],
      highlights: [
        'Developed and maintained Flutter-based mobile applications, contributing to UI screens, reusable components, and feature implementation.',
        'Supported testing, debugging, and iterative improvements on an existing codebase to improve stability and user experience.',
        'Assisted with integration tasks and coordinated progress updates within an ongoing development roadmap.',
      ],
    },
    {
      company: 'Allianz',
      role: 'Insurance Agent',
      type: '',
      period: '2022 – 2023',
      tech: [],
      highlights: [
        'Built strong customer communication and consultation skills by understanding client needs and explaining solutions clearly.',
        'Strengthened problem-solving and interpersonal skills through handling questions, follow-ups, and service support.',
        'Developed discipline and accountability by managing client interactions and maintaining consistent progress tracking.',
      ],
    },
  ];

  return (
    <section id="experience" className="relative overflow-hidden py-28 md:py-36">
      <div
        className="absolute -left-40 top-24 h-[28rem] w-[28rem] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #D89257 0%, transparent 62%)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-wrap px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          label="Track record"
          title="Experience"
          sub="A snapshot of my work experience, focusing on practical contributions, collaboration, and professional growth."
        />

        {/* Timeline rail */}
        <div className="relative ml-1 space-y-12 border-l border-white/[0.08] pl-6 md:ml-4 md:pl-12">
          {experiences.map((exp, index) => (
            <Reveal key={index} delay={index * 120}>
              <article className="relative">
                {/* Copper node on the rail */}
                <span
                  className="absolute -left-[30px] top-2 h-2.5 w-2.5 rounded-full bg-copper-400 shadow-[0_0_0_5px_rgba(216,146,87,0.14)] md:-left-[55px]"
                  aria-hidden="true"
                />

                <div className="panel p-8 transition-all duration-500 ease-out hover:border-copper-500/25 md:p-10">
                  <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-medium tracking-tight text-mist-50">
                        {exp.company}
                      </h3>
                      <p className="mt-1.5 text-lg text-mist-300">{exp.role}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-mist-400">
                      {exp.type && (
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-copper-400" />
                          {exp.type}
                        </span>
                      )}
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-copper-400" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {exp.tech.length > 0 && (
                    <div className="mb-6 flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className="space-y-3.5">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3.5">
                        <span
                          className="mt-[9px] h-px w-4 flex-shrink-0 bg-copper-500/60"
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed text-mist-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="shell mt-14">
            <div className="panel-quiet flex flex-col items-center gap-2 px-8 py-8 text-center">
              <p className="text-lg text-mist-300">
                Open to{' '}
                <span className="font-medium text-copper-300">
                  Internship or Full-Time opportunities
                </span>{' '}
                in Software Engineering, Mobile Development, IoT, or Cloud-related roles.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
