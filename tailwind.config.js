/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        active: "linear-gradient( 70deg, #E4B40D, #e4b50d63 )",
        img: "url(./assets/bg.png);",
      },
      backgroundColor: {
        rgba: "rgba(0,0,0,0.2)",
      },
      boxShadow: {
        shadow: "4px 10px 10px rgba(0,0,0,0.5), -10px 0px 5px rgba(0,0,0,0.4) ",
        shadows: "12px 0px 20px rgba(0,0,0,0.7)",
      },
      backdropBlur: {
        blur: "20px",
      },
      backgroundPosition: {
        posi: "   top 25% right 0%",
      },
      fontFamily:{
        'FiraCode':'Fira Code'
      },
    },
  },
  plugins: [],
};
