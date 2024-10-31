/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        suwannaphum: ['"Suwannaphum"', 'sans-serif'],
        sans: ["Roboto", "sans-serif"],
      },
      
      height: {
        '100': '28rem',
        '83': '20.75rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}