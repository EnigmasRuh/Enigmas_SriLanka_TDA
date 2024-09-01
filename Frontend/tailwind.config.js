import bg from 'src/'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Qwigley': ['Qwigley', 'cursive'],
        'Prompt': ['Prompt', 'sans-serif'],
      },
      backgroundImage: {
        'login-bg': "url('src/assets/login_bg.jpg')"
      }
    },
  },
  plugins: [],
}

