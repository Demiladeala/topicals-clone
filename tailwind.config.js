/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'spottie': "url('../public/spottie-image.webp')",
        'gridone': "url('../public/productimg6.webp')", 
        'prodone': "url('../public/productone.webp')",
        'prodtwo': "url('../public/productimg3.webp')",
        'gridtwo': "url('../public/grid-img2.webp')",
        'gridthree': "url('../public/grid-img3.webp')",
        'gridfour': "url('../public/grid-img4.webp')",
        'gridfive': "url('../public/grid-img5.webp')",
      },
      fontFamily:{
        body: "Poppins",
      },
    },
  },
  plugins: [],
}
