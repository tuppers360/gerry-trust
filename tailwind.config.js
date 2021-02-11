const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif']
    },
    extend: {
      colors: {
        twitter: '#00abe3',
        instagram: '#bc2a8d',
        facebook: ' #4060a5',

        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        //gray: colors.gray, //default Gray is coolGray
        trueGray: colors.trueGray,
        warmGray: colors.warmGray,
        //red: colors.red, //default Red is Red
        orange: colors.orange,
        amber: colors.amber,
        //yellow: colors.yellow, //default Yellow is Amber
        lime: colors.lime,
        //green: colors.green, //default Green is Emerald
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        lightBlue: colors.lightBlue,
        //blue: colors.blue, //default Blue is Blue
        //indigo: colors.indigo, //default Indigo is Indigo
        violet: colors.violet,
        //purple: colors.purple, //default Purple is violet
        fuchsia: colors.fuchsia,
        //pink: colors.pink, //default Pink is Pink
        rose: colors.rose
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      opacity: ['disabled']
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
