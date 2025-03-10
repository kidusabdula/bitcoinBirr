/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom': {
          DEFAULT: '#1d9374', // Your main custom color
          light: '#58ba9e',   // Lighter shade
          dark: '#242527',    // Darker shade
        },
      },
    },
  },
  plugins: [],
}