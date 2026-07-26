/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/*.{js,ts,jsx,tsx,mdx}',
    './app/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg-rgb) / <alpha-value>)',
        surface: 'rgb(var(--surface-rgb) / <alpha-value>)',
        'surface-hover': 'rgb(var(--surface-hover-rgb) / <alpha-value>)',
        border: 'rgb(var(--border-rgb) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--primary-rgb) / <alpha-value>)',
          muted: 'rgb(var(--primary-muted-rgb) / <alpha-value>)',
          dim: 'rgb(var(--primary-dim-rgb) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent-rgb) / <alpha-value>)',
          muted: 'rgb(var(--accent-rgb) / 0.12)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['72px', {lineHeight: '1.05', letterSpacing: '-0.04em'}],
        'hero-mobile': ['44px', {lineHeight: '1.05', letterSpacing: '-0.03em'}],
        section: ['48px', {lineHeight: '1.1', letterSpacing: '-0.03em'}],
        'section-mobile': [
          '32px',
          {lineHeight: '1.15', letterSpacing: '-0.02em'},
        ],
        body: ['18px', {lineHeight: '1.6'}],
        eyebrow: ['13px', {lineHeight: '1.4', letterSpacing: '0.12em'}],
      },
      maxWidth: {
        content: '1100px',
        prose: '720px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
