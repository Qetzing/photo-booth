/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "!opacity-25",
  ],
  theme: {
    extend: {
      fontFamily: {
        'indie-flower': ['Indie Flower', 'sans-serif'],
      },
      blur: {
        '2xs': '0.5px',
        xs: '1px',
      },
    },
  },
  plugins: [],
}
