/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      inset: {
        '-16':'-10rem',
        '-23':'-23.5rem'
      }
    },
  },
  plugins: [],
}