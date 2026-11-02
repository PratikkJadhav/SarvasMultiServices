import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B2E3B',
        teal: {
          DEFAULT: '#0E7C86',
          deep: '#0A6670',
          light: '#5CC6CC',
        },
        mint: '#DDF0EE',
        paper: '#F3F8F8',
        amber: {
          DEFAULT: '#F4A62A',
          hover: '#FFB443',
        },
        muted: '#5B6F78',
        line: '#C9D8DA',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      transitionDuration: {
        250: '250ms',
      },
    },
  },
  plugins: [],
};
