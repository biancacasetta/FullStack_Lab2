/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#091017',
        background: '#f6f9fc',
        primary: '#4980be',
        secondary: '#9cbbde',
        accent: '#75a2d4',
      },
    },
  },
  plugins: [],
};