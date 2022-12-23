/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        montserrat : ['"Montserrat"'],
        subrayada : ['"Montserrat Subrayada"']
      },
      colors: {
        'abu' : "#E9EAF1",
        'hitam' : "#1F2024",
        'cream' : "#F5F5F5",
      }
    },
  },
  plugins: [],
}
