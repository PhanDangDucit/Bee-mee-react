/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
    "./src/ui/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
  },
  plugins: [
    require('daisyui'),
  ],
}