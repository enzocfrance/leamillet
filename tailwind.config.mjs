/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0f8b8d',
          dark: '#016d77',
          deep: '#014a52',
        },
        sage: {
          DEFAULT: '#82c5bd',
          dark: '#5fa89f',
        },
        mint: '#d5f1d1',
        moss: '#a8c893',
        cream: '#f4fed7',
        lime: '#e2fdb5',
        sky: '#a7dae5',
        ink: '#4c6069',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        candal: ['Candal', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
