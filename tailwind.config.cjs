/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{jsx,js}"], //changed to jsx and added index
  darkMode: 'class', //enables darkmode
  theme: {
    extend: {
      fontFamily:{
        inter: ['inter', 'serif'], //alt. instead of having to define this in ur css file e.g. font-family:...
      }
    },
  },
  plugins: [],
}