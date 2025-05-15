/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#d9d9d9',
          80: '#d1d1d1',
          100: '#c9c9c9',
          200: '#b9b9b9',
          300: '#a9a9a9',
          400: '#999999',
          500: '#888888',
          600: '#777777',
          700: '#666666',
          800: '#555555',
          900: '#444444',
        },
      },
    },
  },
  plugins: [],
};

export default config;
