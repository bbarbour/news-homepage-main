/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./*.{html,js}"
]
  ,
  theme: {
    fontFamily: {
      sans: ['Inter-Regular', 'Inter-Bold', 'sans-serif'],
      
      serif: ['Merriweather', 'serif']
    },
    extend: {
      colors: {
        offWhite: `hsl(36, 100%, 99%)`,
        veryDarkBlue: `hsl(240, 100%, 5%)`,
        darkGrayishBlue: `hsl(236, 13%, 42%)`,
        softOrange: `hsl(35, 77%, 62%)`,
        softRed: `hsl(5, 85%, 63%)`

    }
  }
  },
  plugins: [],
}
