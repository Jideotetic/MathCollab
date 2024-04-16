import formsPlugin from "@tailwindcss/forms";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        layout: "218px 1fr",
        canvasLayout: "240px 1fr 240px",
        classes: "repeat(auto-fill, minmax(300px, 1fr))",
      },
      gridTemplateRows: {
        rowLayout: "50px 1fr",
        rowLayout1: "repeat(auto-fill, minmax(300px, 1fr))",
      },
      backgroundImage: {
        image: "url('/src/assets/bg-image.png')",
        bgJoin: "url('/src/assets/bg-join.png')",
      },
      fontSize: {
        clamp: "clamp(1.9438rem, 1.7779rem + 0.8292vw, 2.4413rem)",
        clamp1: "clamp(2.3325rem, 2.0927rem + 1.199vw, 3.0519rem)",
        clamp2: "clamp(2.7994rem, 2.4608rem + 1.6927vw, 3.815rem)",
      },
      boxShadow: {
        customInner: "inset 0 0 100px 0 #00AAF81A",
        customInner1: "inset 0 0 100px 0 #3130330D",
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translatex(-100%)",
          },
          "100%": {
            transform: "translatex(100%)",
          },
        },
      },
      animation: {
        slide: "slide 1s linear infinite",
      },
    },
  },
  plugins: [formsPlugin],
};
