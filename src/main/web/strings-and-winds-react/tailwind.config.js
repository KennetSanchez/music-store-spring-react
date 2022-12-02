/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'merriweather': ['Merriweather'],
      'rubik' : ['Rubik']
    },
    extend: {
      dropShadow: {
        'purple-glow': '0px 0px 4px #A855F7',
      },
      boxShadow : {
        'purple-outline': 'inset 0px 0px 8px 3px #A855F7'
      }
    },
  },
  plugins: [],
}
