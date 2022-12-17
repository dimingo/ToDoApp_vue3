
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    container: {
      center: true,
    },
    container: {
      center: true,
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "8rem",
      "9x1": "9rem",


    },
    extend: {
      backgroundImage: {
        'hero': "url('/images/bg-desktop-light.jpg')",
        'hero-dark': "url('/images/bg-desktop-dark.jpg')",
        'hero-mobile': "url('/images/BG-MOBILE-LIGHT.JPG')",
        'hero-mobile-dark': "url('/images/BG-MOBILE-DARK.JPG')",

      },
      screens: {
        'sm': '375px',

        'lg': '1440px',

      }
    },
  },
  variants: {
    text: ['responsive', 'hover', 'focus', 'active'],
  },


  plugins: [],
}