/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
      extend: {
        backgroundImage: {
          'main': "url('../../dist/img/main_bg.png')"
        },
        colors: {
          'primary': '#8e4868',
          'secondary':'#f5d6ea',
          'customgray':'#929292',
          'light':'#444'
        },
        boxShadow: {
          '3xl': '0px 10px 10px -8px rgba(0, 0, 0, .3)',
          '4xl':'0 0 30px -5px rgba(0, 0, 0, .15)'
        },
        borderRadius: {
          '4xl':'35px'
        }
      }
  },

}

