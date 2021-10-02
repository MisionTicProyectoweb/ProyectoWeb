module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    font: {
      sick: ["'Merriweather', serif","font-serif"]
    },
    color: {
      colored: "#606DF6"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
