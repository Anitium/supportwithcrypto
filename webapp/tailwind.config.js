module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      padding: '12px',
    },
    extend: {
      animation: {
        'crypto-tick': 'tick 0.5s',
      },
      keyframes: {
        tick: {
          '0%':{ transform: 'scale(1)' },
          '50%':{ transform: 'scale(1.15)' },
          '100%':{ transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'rainbow' : "url('/assets/img/rainbow.png')",
      },
      colors: {
        swc: {
          left: '#06b6d4',
          right: '#3b82f6',
        },
      }
    },
  },
  plugins: [
    // ...
    // adding strategy class keeps old forms but force explicit 'form-text, form-textarea, ...' on each component.
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
