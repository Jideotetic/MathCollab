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
    },
  },
  plugins: [formsPlugin],
};
