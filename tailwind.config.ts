import type { Config } from 'tailwindcss'

 export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 2. Infuse your custom colors here
        brandTurquoise: '#00CED1',
        brandGreen: '#BEE581',
        darkGreen: '#062427',
      }
    },
  },
  plugins: [],
} satisfies Config