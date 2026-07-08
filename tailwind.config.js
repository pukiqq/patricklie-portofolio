/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // "PCB soldermask" ink scale — blue-tinted near-blacks
        ink: {
          950: '#06080C',
          900: '#0A0D13',
          850: '#0D111A',
          800: '#111623',
          700: '#181E2E',
          600: '#212940',
        },
        // Copper trace accent
        copper: {
          200: '#F5D3B0',
          300: '#EFBE8D',
          400: '#E5A76E',
          500: '#D89257',
          600: '#BC7440',
          700: '#8F5630',
        },
        // Cool tinted grays for text
        mist: {
          50: '#EEF0F6',
          200: '#C4CBDA',
          300: '#A8B0C2',
          400: '#8A93A8',
          500: '#7A8296',
          600: '#4E5567',
        },
        // Functional, desaturated states
        sage: '#8FBF9F',
        clay: '#D98B7E',
        gold: '#D3AC66',
      },
      fontFamily: {
        display: ['"Clash Display"', 'Satoshi', 'system-ui', 'sans-serif'],
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      transitionTimingFunction: {
        // heavy, weighted spring-like curve used everywhere
        out: 'cubic-bezier(0.32, 0.72, 0, 1)',
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      letterSpacing: {
        tightest: '-0.045em',
        widecaps: '0.22em',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        drift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        pulseDot: 'pulseDot 2.4s cubic-bezier(0.45, 0, 0.55, 1) infinite',
      },
      maxWidth: {
        wrap: '76rem',
      },
    },
  },
  plugins: [],
};
