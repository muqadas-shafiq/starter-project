/** @type {import('tailwindcss').Config} */
module.exports = {

  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: 'media', // or 'media' or 'class'
   theme: {
    extend: {
      fontFamily: {
        'sans' : 'sans-serif',
        'poppins': ["poppins"],
        'overlock': ['Overlock']
      },
      colors: {
        primary: '#222831',
        secondary: '#fff',
        tirtry: '#037ba5',
        forth: '#102C57',
        fifth: "#f4f7f2"
      },
      
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
