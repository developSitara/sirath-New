/** @type {import('tailwindcss').Config} */
export default{
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
     colors:{
      blue:'#434377',
       white:'#F8F8F8',
       offWhite:'#F0F0F0',
       skyBlue:'#f0fcff',
       grey:'#494949',
       darkgrey:'#575966'
     },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        Public: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}