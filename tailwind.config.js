/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    colors:{
      'dark-blue':'hsl(220,13%,13%)',
      'dark-grayish-blue':'hsl(219,9%, 45%)',
      'grayish-blue':'hsl(220,14%,75%)',
      'light-grayish-blue':'hsl(223,64%,97%)',
      'primary-orange':'hsl(26,100%,55%)',
      'pale-orange':'hsl(25,100%,94%)',
    },
    boxShadow:{
      'round':"8px 5px   20px rgba(0,0,0,0.25)",
      'round-orange':`7px 4px 20px hsl(26,100%,65%) `
    },
  
    extend: {
     
    },
  },
  plugins: [],
}
