module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'

  theme: {
    fontFamily: {
      display: ['Poppins', 'system-ui', 'sans-serif'],
      body: ['Poppins', 'system-ui', 'sans-serif']
    },
    extend: {
      colors: {
        twitter: '#00abe3',
        instagram: '#bc2a8d',
        facebook: ' #4060a5'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      opacity: ['disabled']
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
