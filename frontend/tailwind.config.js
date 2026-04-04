/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006ce1",
        primaryHover: "#0059b3",
        primaryDark: "#004494",
      },
    },
  },
  plugins: [],
};
