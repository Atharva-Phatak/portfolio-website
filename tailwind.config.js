/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        thBlue: "#35EEED",
        thOrange: "#F9A23F",
        thPurple: "#ED02FF",
      },
      backgroundImage:{
        "hero-background" : "url('/src/Assets/new-bg.jpg')"
      },
    },
    fontFamily : {
      signature : 'Permanent Marker'
    }
  },
  plugins: [],
};