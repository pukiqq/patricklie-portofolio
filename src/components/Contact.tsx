import { Mail, Linkedin, Github, Send, ArrowUpRight } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function Contact() {
  const channels = [
    {
      icon: Mail,
      label: 'Email',
      value: 'patricklie995@gmail.com',
      href: 'mailto:patricklie995@gmail.com',
      external: false,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'patrick-lie-315964302',
      href: 'https://my.linkedin.com/in/patrick-lie-315964302',
      external: true,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'PatrickLie-dev',
      href: 'https://github.com/PatrickLie-dev',
      external: true,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      {/* Quiet copper glow anchoring the close of the page */}
      <div
        className="absolute bottom-[-14rem] left-1/2 h-[30rem] w-[46rem] -translate-x-1/2 rounded-full opacity-[0.1]"
        style={{ background: 'radial-gradient(ellipse, #D89257 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-wrap px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          label="Contact"
          title="Get In Touch"
          sub="Let's discuss how we can work together"
        />

        <div className="grid gap-4 lg:grid-cols-5">
          {/* Channels — hairline rows */}
          <div className="lg:col-span-3">
            <Reveal>
              <div className="panel divide-y divide-white/[0.06] overflow-hidden !p-0">
                {channels.map((ch) => (
                  <a
                    key={ch.label}
                    href={ch.href}
                    {...(ch.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-5 px-7 py-6 transition-colors duration-500 ease-out hover:bg-white/[0.025]"
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-mist-300 transition-colors duration-500 group-hover:border-copper-500/40 group-hover:text-copper-300">
                      <ch.icon className="h-5 w-5" />
                    </span>
                    <span className="flex-grow">
                      <span className="block font-mono text-[10px] uppercase tracking-widecaps text-mist-500">
                        {ch.label}
                      </span>
                      <span className="mt-0.5 block font-medium text-mist-50 transition-colors duration-500 group-hover:text-copper-200">
                        {ch.value}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-mist-500 transition-all duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper-300" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* WhatsApp card */}
          <div className="lg:col-span-2">
            <Reveal delay={140}>
              <div className="shell h-full">
                <div className="panel-quiet flex h-full flex-col justify-between p-7">
                  <div>
                    <h3 className="font-display text-xl font-medium text-mist-50">
                      Send a Message
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist-400">
                      Prefer WhatsApp? Send me a message directly.
                    </p>
                  </div>

                  <div className="mt-8">
                    <a
                      href="https://wa.me/6285183158476?text=Hi%20Patrick%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-between"
                    >
                      Message me on WhatsApp
                      <span className="btn-orb">
                        <Send className="h-4 w-4" />
                      </span>
                    </a>
                    <p className="mt-4 font-mono text-[11px] text-mist-500">
                      Typically replies within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
