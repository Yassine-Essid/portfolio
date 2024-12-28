/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './src/**/*.{html,js,ts,jsx,tsx}',
     './src/**/*.vue'
  ],
  theme: {
    extend: { 
      // Custom utilities
      scrollbarHide: {
        '-ms-overflow-style': 'none',  /* IE and Edge */
        'scrollbar-width': 'none',  /* Firefox */
        '&::-webkit-scrollbar': {
          display: 'none',  /* Chrome, Safari, and Opera */
        },
      },
    },
    colors:{
      'blue1': '#3b82f6',
      'blue2': '#f43f5e',
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none',  /* Chrome, Safari, and Opera */
          },
        },
      });
    },
  ],
}

