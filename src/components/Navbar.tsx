import { Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  // Hide on scroll down, reappear on scroll up
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 24);
        setHidden(y > lastY && y > 140 && !isOpen);
        lastY = y;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isOpen]);

  // Close the mobile menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the overlay menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleDownloadCV = () => {
    const base = import.meta.env.BASE_URL;
    const fileName = 'Patrick-Lie-CV.pdf';
    const link = document.createElement('a');
    link.href = `${base}${fileName}`;
    link.download = fileName;
    link.click();
  };

  const linkClass = (path: string) =>
    `relative rounded-full px-4 py-1.5 text-sm transition-colors duration-500 ease-out ${
      isActive(path)
        ? 'text-copper-300'
        : 'text-mist-300 hover:text-mist-50'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <nav
        aria-label="Main"
        className={`mt-4 flex w-full max-w-wrap items-center justify-between rounded-full border px-3 py-2 transition-all duration-700 ease-out sm:px-4 ${
          hidden ? '-translate-y-[130%]' : 'translate-y-0'
        } ${
          scrolled || isOpen
            ? 'border-white/[0.08] bg-ink-900/80 shadow-[0_16px_40px_-20px_rgba(2,4,10,0.9)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <Link
          to="/"
          className="group flex items-center gap-2.5 pl-2"
          aria-label="Patrick Lie — home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-copper-500/40 bg-copper-500/10 font-mono text-[11px] font-medium text-copper-300 transition-colors duration-500 group-hover:bg-copper-500/20">
            PL
          </span>
          <span className="font-display text-[15px] font-medium tracking-tight text-mist-50">
            Patrick Lie
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <Link to="/" className={linkClass('/')}>
            Home
            {isActive('/') && (
              <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-copper-400" />
            )}
          </Link>
          <Link to="/projects" className={linkClass('/projects')}>
            Projects
            {isActive('/projects') && (
              <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-copper-400" />
            )}
          </Link>
          <button
            onClick={handleDownloadCV}
            className="btn-primary ml-3 !py-1.5 !pl-4 !pr-1.5 text-sm"
          >
            CV
            <span className="btn-orb !h-7 !w-7">
              <Download className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>

        {/* Hamburger that morphs into an X */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`absolute h-px w-5 bg-mist-50 transition-all duration-500 ease-out ${
              isOpen ? 'rotate-45' : '-translate-y-[3.5px]'
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-mist-50 transition-all duration-500 ease-out ${
              isOpen ? '-rotate-45' : 'translate-y-[3.5px]'
            }`}
          />
        </button>
      </nav>

      {/* Full-screen mobile overlay with staggered link reveal */}
      <div
        className={`fixed inset-0 z-[-1] bg-ink-950/90 backdrop-blur-2xl transition-opacity duration-500 ease-out md:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-full flex-col justify-center gap-2 px-8">
          {[
            { to: '/', label: 'Home' },
            { to: '/projects', label: 'Projects' },
          ].map((item, i) => (
            <div key={item.to} className="overflow-hidden">
              <Link
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={`block font-display text-4xl font-medium tracking-tight transition-all duration-700 ease-out ${
                  isActive(item.to) ? 'text-copper-300' : 'text-mist-50'
                } ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: isOpen ? `${120 + i * 70}ms` : '0ms' }}
              >
                {item.label}
              </Link>
            </div>
          ))}
          <div className="overflow-hidden pt-6">
            <button
              onClick={() => {
                handleDownloadCV();
                setIsOpen(false);
              }}
              className={`btn-primary transition-all duration-700 ease-out ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: isOpen ? '280ms' : '0ms' }}
            >
              Download CV
              <span className="btn-orb">
                <Download className="h-4 w-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
