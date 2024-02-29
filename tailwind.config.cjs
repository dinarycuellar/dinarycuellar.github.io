/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        EBGaramond: ['EB Garamond', 'serif'],
      },
      colors: {
        'bgColor':'#1b1b1b',
        'textGreen':'#64FFDA',
        'textLight':'#FFFFFF',
        'Github' : '#333',
        'Linkedin' : '#0077B5',
      },
    },
    container:{
      center: true,
      padding: {
        DEFAULT: '20px',
        md: "50px",
      }
    },
  },
  plugins: [],
}

