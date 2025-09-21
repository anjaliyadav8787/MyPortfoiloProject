// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React components ka path
  ],
  theme: {
    extend: {
      screens: {
        'mid-range': { min: '344px', max: '639px' },
        '2xl': "1400px"
      },
    },
  },
  plugins: [],
}
