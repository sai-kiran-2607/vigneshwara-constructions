/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f2747',
        accent: '#d58c2c',
        surface: '#f8fafc',
        slateWarm: '#465468',
      },
      boxShadow: {
        soft: '0 12px 40px rgba(15, 39, 71, 0.12)',
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(15, 39, 71, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 39, 71, 0.04) 1px, transparent 1px)",
      },
      fontFamily: {
        display: ['Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
