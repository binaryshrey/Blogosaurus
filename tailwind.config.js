/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        colors: {
          teal: colors.teal,
          cyan: colors.cyan,
        },
        fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        animation: {
          gradient: "gradient 8s linear infinite",
        },
        keyframes: {
          gradient: {
            to: {
              backgroundPosition: "var(--bg-size) 0",
            },
          },
        },
      },
      },
    },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
})