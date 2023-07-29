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
        primary04: '#221048',
        primary05: '#3F2379',
        primary06: '#233679',
        primary07: '#792366',
        secondary01: '#FCA016',
        // secondary02: '#16FCD2',
        secondary03: '#FC165B',
        secondary04: '#FF81A6',
        secondary05: '#009C3E',
        secondary06: '#66FFA3',
        secondary06: '#161629',
      },
    },
  },
  plugins: [],
}
