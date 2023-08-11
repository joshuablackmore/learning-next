/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'light1': '#FFF',
      'light2': '#FFF',
      'fontDark1': '#393E41',
      'dark1': '#393E41',
      'dark2': '#474448',
      'dark3': '#2D232E',
      'hi-light1': '#44BBA4',
      'hi-light2': '#E7BB41',
    }
  },
  plugins: [],
}
