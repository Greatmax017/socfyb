/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#0173AF",
          purple: "#824D79",
          darkBlue: "#14143C",
          black: {
            100: "#1E1E1E"
          }
        }
      },
      screens:{
        smlg: "1115px",
        mdlg: "1300px"
      }
    },
  },
  plugins: [],
}