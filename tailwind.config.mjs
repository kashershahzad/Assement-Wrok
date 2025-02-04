module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        darkBlue: '#127398',
        lightBlue: '#00ABE1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
