/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        clamp1: "clamp(1.2rem, 1.1313rem + 0.3438vw, 1.4063rem)",
        clamp2: "clamp(1.44rem, 1.334rem + 0.5302vw, 1.7581rem)",
        clamp3: "clamp(2.4881rem, 2.1731rem + 1.575vw, 3.4331rem)",
      },
      fontFamily: {
        lemons: ["Lemon", "serif"],
      },
    },
  },
};
