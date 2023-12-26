/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'tlmc': '320px',
        // => @media (min-width: 300px) { ... }

        'tlc': '375px',
        // => @media (min-width: 375px) { ... }
  
        'tlg': '464px',
        // => @media (min-width: 464px) { ... }
        
        'tlgx': '494px',
        // => @media (min-width: 494px) { ... }
      },
      height: {
        'vsm': '150vh',
      },
      fontFamily:{
        'Logo': ['Silkscreen', 'sans-serif' ]
      },
    },
  plugins: [],
  },
}