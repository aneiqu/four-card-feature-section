import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#EA5454",
        cyan: "#44D3D2",
        orange: "#FCAE4A",
        blue: "#549EF2",
        veryDarkBlue: "#4D4F62",
        veryLightGray: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
