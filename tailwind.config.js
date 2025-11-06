/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#bcdcff',
          300: '#8dc3ff',
          400: '#5ea7ff',
          500: '#2e88ff',
          600: '#1769e6',
          700: '#114fb4',
          800: '#0f428f',
          900: '#0f3673'
        }
      }
    },
  },
  plugins: [],
};
