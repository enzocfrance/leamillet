/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        // Fond vert sauge (du plus clair au plus profond)
        sage: {
          50:  '#eaf2e4',
          100: '#d7e6cc',
          200: '#c6dbba',
          300: '#a9c69c',
          400: '#93ab82',
          500: '#7f9a6f',
        },
        pink: {
          DEFAULT: '#f0a3b8',
          soft: '#f8cdd8',
          deep: '#e087a0',
        },
        ink: {
          DEFAULT: '#37423a',
          soft: '#5a675e',
          title: '#2b342d',
        },
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
