import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      outfit: [
        'var(--font-outfit)',
        {
          fontFeatureSettings: "'liga' off, 'clig' off",
        },
      ],
    },
    colors: {
      white: 'var(--color-white)',
      slate: {
        300: 'var(--color-slate-300)',
        500: 'var(--color-slate-500)',
        900: 'var(--color-slate-900)',
      },
    },
    boxShadow: {
      card: '0px 25px 25px 0px rgba(0, 0, 0, 0.05)',
    },
    extend: {
      borderRadius: {
        card: '1.25rem',
        'card-image': '.625rem',
      },
      fontSize: {
        base: ['.9375rem', { lineHeight: '1.3125rem', letterSpacing: '.0125em' }],
        xl: ['1.375rem', { lineHeight: '1.65rem' }],
      },
    },
  },
  plugins: [],
} satisfies Config;
