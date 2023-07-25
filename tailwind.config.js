/** @type {import('tailwindcss').Config} */
const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Noto Sans', ...fontFamily.sans],
    },
    extend: {
      colors: {
        primary01: '#0B0B22',
        primary02: '#6016FC',
        primary03: '#16FCD2',
        secondary01: '#FCA016',
        secondary02: '#16FCD2',
        secondary03: '#FC165B',
      },
    },
  },
  plugins: [],
}
