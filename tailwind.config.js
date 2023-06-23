/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'light1': '#F1F0EA',
      'light2': '#E0DDCF',
      'dark1': '#534B52',
      'dark2': '#474448',
      'dark3': '#2D232E',
    }
  },
  plugins: [],
}
