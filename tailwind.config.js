/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['League Spartan', 'sans-serif'],
      },
      colors: {
        primary: 'hsl(180, 29%, 50%)',
        customCyan: '#5CA5A5',
        customGrey: '#7C8F8F',
        customBlack: '#2B3939',
        customBg: 'rgba(239, 250, 250, 255)',
        neutral: {
          background: 'hsl(180, 52%, 96%)',
          filterTablets: 'hsl(180, 31%, 95%)',
          darkGrayCyan: 'hsl(180, 8%, 52%)',
          veryDarkGrayCyan: 'hsl(180, 14%, 20%)',
        },
      },
      fontSize: {
        body: ['15px', '1.5'],
      },
      fontWeight: {
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
}

