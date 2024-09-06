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
        'login-bg': "url('src/assets/login_bg.jpg')",
        'service-register-bg': "url('src/assets/service-register-bg.png')",
        'traveller-register-bg': "url('src/assets/traveller-register-bg.jpg')"
      },
      colors: {
        'custom-orange': '#D68631',
        'custom-blue': '#0B2838',
        'lighter-blue': '#3D717E',
        'darker-blue':'#0B2838',
        'subtile':'#D68631',
      },
    },
  },
  plugins: [],
}

