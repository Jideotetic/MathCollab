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
        layout: "250px 1fr",
      },
      backgroundImage: {
        image: "url('/src/assets/bg-image.png')",
      },
      fontSize: {
        clamp: "clamp(1.9438rem, 1.7779rem + 0.8292vw, 2.4413rem)",
        clamp1: "clamp(2.3325rem, 2.0927rem + 1.199vw, 3.0519rem)",
        clamp2: "clamp(2.7994rem, 2.4608rem + 1.6927vw, 3.815rem)",
      },
    },
  },
  plugins: [formsPlugin],
};
