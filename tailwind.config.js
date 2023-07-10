/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        128: '32rem',
        // vh85: '85vh',
        vh85: '55vh',
        vh115: '115vh',
        svhcalc: 'calc(100svh - 50px)',
      },
      minHeight: {
        px500: '500px',
      },
      top: {
        rem25: '25rem',
      },
      maxHeight: {
        px600: '600px',
      },
    },
  },
  plugins: [],
}
