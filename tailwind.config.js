/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#111111',
        surface: '#1A1A1A',
        card: '#222222',
        gold: { DEFAULT: '#D6B66C', light: '#E8D5A5' },
        muted: '#A6A6A6',
      },
    },
  },
  plugins: [],
};