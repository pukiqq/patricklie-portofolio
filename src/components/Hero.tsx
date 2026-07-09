import { Github, Linkedin, Mail, ArrowRight, ArrowDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HeroCanvas from './HeroCanvas';
import Reveal from './ui/Reveal';
import MagneticButton from './ui/MagneticButton';

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  // Scroll-linked exit: content and scene drift apart at different rates
  // while fading — a light parallax, transform/opacity only.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      if (y < vh * 1.2) {
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${y * 0.16}px)`;
          contentRef.current.style.opacity = `${Math.max(0, 1 - y / (vh * 0.72))}`;
        }
        if (sceneRef.current) {
          sceneRef.current.style.transform = `translateY(${y * 0.06}px)`;
        }
      }
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
      {/* Layered atmosphere: blueprint grid + copper aurora + 3D constellation */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,black,transparent)]" aria-hidden="true" />
      <div
        className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full opacity-[0.16]"
        style={{ background: 'radial-gradient(circle, #D89257 0%, transparent 62%)' }}
        aria-hidden="true"
      />
      <div ref={sceneRef} className="absolute inset-0 will-change-transform">
        <HeroCanvas className="absolute inset-y-0 right-0 h-full w-full opacity-70 md:w-[62%] md:opacity-100 [mask-image:radial-gradient(ellipse_70%_70%_at_60%_50%,black_35%,transparent_78%)]" />
      </div>

      <div ref={contentRef} className="relative mx-auto w-full max-w-wrap px-4 pb-24 pt-32 will-change-transform sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-7 flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 animate-pulseDot rounded-full bg-copper-400" />
              <span>Sensors → Cloud → Insight</span>
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="bg-gradient-to-b from-mist-50 via-mist-50 to-mist-400 bg-clip-text font-display text-6xl font-semibold leading-[0.98] tracking-tightest text-transparent sm:text-7xl lg:text-[6.4rem]">
              Patrick Lie
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 font-mono text-sm uppercase tracking-widecaps text-copper-300 sm:text-base">
              IoT Engineer &amp; Software Developer
            </p>
          </Reveal>

          <Reveal delay={270}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist-200">
              Fresh Graduate IT (APU) specializing in IoT systems, mobile applications, and cloud
              infrastructure. I build end-to-end products: sensors → cloud pipelines → mobile
              dashboards → intelligent insights.
            </p>
          </Reveal>

          <Reveal delay={340}>
            <p className="mt-4 max-w-xl leading-relaxed text-mist-400">
              Passionate about hardware-software integration, real-time data processing, and
              creating systems that solve real-world problems.
            </p>
          </Reveal>

          <Reveal delay={430}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <MagneticButton className="w-full sm:w-auto">
                <Link to="/projects" className="btn-primary w-full justify-between sm:w-auto sm:justify-start">
                  View Projects
                  <span className="btn-orb">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </MagneticButton>
              <MagneticButton className="w-full sm:w-auto">
                <a href="mailto:patricklie995@gmail.com" className="btn-ghost w-full justify-center sm:w-auto">
                  Get in touch
                </a>
              </MagneticButton>

              <span className="mx-2 hidden h-6 w-px bg-white/10 sm:block" aria-hidden="true" />

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/PatrickLie-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-mist-300 transition-all duration-500 ease-out hover:border-copper-500/40 hover:text-copper-300"
                >
                  <Github className="h-[18px] w-[18px]" />
                </a>
                <a
                  href="https://my.linkedin.com/in/patrick-lie-315964302"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-mist-300 transition-all duration-500 ease-out hover:border-copper-500/40 hover:text-copper-300"
                >
                  <Linkedin className="h-[18px] w-[18px]" />
                </a>
                <a
                  href="mailto:patricklie995@gmail.com"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-mist-300 transition-all duration-500 ease-out hover:border-copper-500/40 hover:text-copper-300"
                >
                  <Mail className="h-[18px] w-[18px]" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Reveal delay={700}>
          <a
            href="#skills"
            aria-label="Scroll to skills"
            className="flex flex-col items-center gap-2 text-mist-500 transition-colors duration-500 hover:text-copper-300"
          >
            <span className="font-mono text-[10px] uppercase tracking-widecaps">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
