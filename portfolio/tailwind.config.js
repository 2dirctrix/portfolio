/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'ubuntu-purple': '#300A24',
        'ubuntu-light-purple': '#4E1946',
        'ubuntu-orange': '#E95420',
        'ubuntu-warm-grey': '#AEA79F',
        'ubuntu-dark-grey': '#333333',
        'ubuntu-terminal': '#2C001E',
      },
    },
  },
  plugins: [],
}