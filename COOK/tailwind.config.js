/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      filter: {
        'custom-filter': 'invert(99%) sepia(24%) saturate(168%) hue-rotate(154deg) brightness(118%) contrast(100%)',
        'custom-filter2': 'invert(68%) sepia(53%) saturate(1706%) hue-rotate(335deg) brightness(92%) contrast(90%)',
      },
      backgroundImage: {
        'about-oval': "url('/Oval.svg')",
        'about-ovalTab': "url('/OvalTab.svg')",
        'about-ovalMob': "url('/OvalMob.svg')",
      },
    },
    colors: {
      'primary': '#E08836',
      'primary2': '#D27722',
      'primaryLighten': '#FFFDF4',
      'primaryLighten2': '#FFDBB8',
      'TextColor': '#252422',
      'TextColorSec': '#403d39',
      'backPri': '#ffffff',
      'backSec': '#FFFDF4'
    },
    fontFamily: {
      'rubik': ['Rubik', 'sans-serif'],
      'outfit': ['Outfit', "sans-serif"],
      'pacifico': ['Pacifico', 'sans-serif'],
      'kanit': ['Kanit', 'sans-serif'],
      'redHatDisplay': ['Red Hat Display', 'sans-serif'],
    },
    screens: {
      'xsm': { 'min': '0px', 'max': '577px' },

      'sm': { 'min': '577px', 'max': '768px' },

      'md': { 'min': '768px', 'max': '1024px' },

      'lg': { 'min': '1024px', 'max': '1280px' },

      'xl': { 'min': '1280px', 'max': '1536px' },

      '2xl': { 'min': '1536px', 'max': '2000px' },
    },
  },
  plugins: [],
}