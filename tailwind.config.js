
module.exports = {
  important: true,
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./hoc/*.{js,ts,jsx,tsx}",
    "./Widgets/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#ffffff',
      secondary: '#044566',
      tertiary:'#00FFA2'
    },
    extend: {
      fontFamily: {
        sans: ['Noto Sans'],
    },
    // that is animation class
    keyframes: {
      pulse: {
          '0%': {
            opacity: 0,
          },
          '50%': {
            opacity: .5,
          },
          '100%': {
            opacity: 1,
          },
      }
  },
  animation: {
      pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) ',
  }
    
    },
    // We over ride the whole screens with breakpoints for width. The 'ha' breakpoint will help us in blocking hover animations on devices not supporting hover.
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}