const defaultTheme = require('tailwindcss/defaultTheme');

// color naming convention https://chir.ag/projects/name-that-color
module.exports = {
  content: [],
  theme: {
    colors: {
      alabaster: '#F9f9f9f9',
      black: '#000',
      cinnabar: '#EB4646',
      codGray: '#151515',
      creole: '#1A0C04',
      gallery: '#EDEDED',
      gray: 'gray',
      hotCinnamon: '#D86820',
      mineShaft: '#292929',
      orangeRoughby: '#C05D1C',
      swissCoffee: '#DDDAD8',
      tango: '#F07423',
      tapa: '#807873',
      thunderbird: '#C11717',
      transparent: 'transparent',
      tundora: '#434343',
      shaft: '#343434',
      white: '#FFF',
    },
    fontFamily: {
      display: ['Poppins', ...defaultTheme.fontFamily.sans],
      body: ['Poppins', ...defaultTheme.fontFamily.sans],
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      '3xl': ['2rem', '125%'],
    },
    borderRadius: {
      small: '10px',
      medium: '16px',
      large: '55px',
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
