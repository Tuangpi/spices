/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
        "main-header": ["Pacifico"]
      },
      backgroundColor: {
        "secondary": "#F1F2F4"
      }
    },
  },
  plugins: [],
}
