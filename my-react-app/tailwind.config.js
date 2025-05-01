/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {boxShadow: {
      glow: '0 0 20px rgba(255, 223, 0, 0.6)', // Yellow glow effect
    },},
  },
  plugins: [
    require('daisyui'),
  ],
}