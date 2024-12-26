/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Include jsx, tsx for React components
  theme: {
    containerFluid:{
center:'true',
padding:'2px'
    },
    container:{
center:'true',
padding:'24px'
    },
    extend: {},
  },
  plugins: [],
}