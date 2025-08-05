/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            h1: {
              color: theme('colors.gray.900'),
              fontWeight: '800',
              marginBottom: '1em',
            },
            h2: {
              color: theme('colors.gray.900'),
              fontWeight: '700',
              marginTop: '2em',
              marginBottom: '1em',
            },
            h3: {
              color: theme('colors.gray.900'),
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            ul: {
              listStyleType: 'disc',
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            'ul > li': {
              marginTop: '0.25em',
              marginBottom: '0.25em',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};