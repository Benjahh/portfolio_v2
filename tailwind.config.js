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
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        fontfamily: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        primary: '#0F0F0F',
        accent: '#EBEB5E',
        secondAccent: '#131313',
        thirdAccent: '#EFEFEF',
      },
    },
  },
  plugins: [],
};
