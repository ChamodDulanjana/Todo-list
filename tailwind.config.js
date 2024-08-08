/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Mooli: ["Mooli", "sans-serif"],
        Neucha:["Neucha", "cursive"]
      },
      boxShadow: {
        'custom': '0 0 10px 1000px rgba(0, 0, 0, 0.5)',
        'normal': 'inset 0 0 0 black'
      },
      backgroundImage: {
        'singleTodo': 'url("https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg")',
      }
    },
  },
  plugins: [],
}