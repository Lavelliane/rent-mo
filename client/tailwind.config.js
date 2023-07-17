/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Messina-Sans': ['Messina Sans', 'sans-serif']
      },

      colors: {
        yellow: "var(--yellow)",
        dark900: "var(--dark-900)",
        dark800: "var(--dark-800)",
        dark700: "var(--dark-700)",
        dark600: "var(--dark-600)",
        dark500: "var(--dark-500)",
        dark400: "var(--dark-400)",
        dark300: "var(--dark-300)",
        dark200: "var(--dark-200)",
        dark100: "var(--dark-100)",
      }
    },
  },
  plugins: [],
}