import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'secondary-dark': '#141019',
        'almost-white': '#EFEFEF',
        'accent-pink': '#FF7B9C',
        'primary-dark': '#0D1117',
        'editor-dark': '#000C18',
      }
    },
  },
  plugins: [],
}
export default config
