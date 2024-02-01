/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {

    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'md-780': '780px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'sm-v': '550px',
    },
    fontFamily: {
      'roboto': ['Roboto'],
    },
    textShadow: {
      'text-shadow' : '0 2px 4px var(--tw-shadow-color)',
    }
  },
  plugins: [],
}

