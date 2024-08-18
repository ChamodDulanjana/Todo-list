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
        Neucha:["Neucha", "cursive"],
        KoHO: ["KoHo", "sans-serif"]
      },
      boxShadow: {
        'custom': '0 0 10px 1000px rgba(0, 0, 0, 0.5)',
        'normal': 'inset 0 0 0 black'
      },
      backgroundImage: {
        'singleTodo': 'url("https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg")',
        'mainBg': 'url("https://i.pinimg.com/originals/5a/04/7d/5a047ddb837bea7a17e098aa1b61bbe7.jpg")'
      }
    },
  },
  plugins: [],
}