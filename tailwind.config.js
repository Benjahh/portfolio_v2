/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        bebasNeue: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        primary: '#0F0F0F',
        accent: '#EBEB5E',
        secondAccent: '#070707',
        thirdAccent: '#EFEFEF',
      },
    },
  },
  plugins: [],
};
