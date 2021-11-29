module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'bg-stars' : 'url(https://i.imgur.com/XqQXxqQ.png)',
      },
      colors: {
        primary: '#00bcd4',
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
