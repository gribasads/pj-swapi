module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: ' #ffffff',
        blue:{
          450:  '#00bcd4',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
