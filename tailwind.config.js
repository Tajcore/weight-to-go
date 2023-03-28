/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fruit-1': "url('/fruits-1.png')",
        'fruit-2': "url('/fruits-2.png')",
      },
      backgroundColor: {
        'goldenrod': '#BB9F06',
        'sage': '#86A873',
        'seafoam': '#5AAA95',
        'teal': '#087F8C',
        'forest': '#095256',
      },
      textColor: {
        'goldenrod': '#BB9F06',
        'sage': '#86A873',
        'seafoam': '#5AAA95',
        'teal': '#087F8C',
        'forest': '#095256',
      },
      borderColor: {
        'goldenrod': '#BB9F06',
        'sage': '#86A873',
        'seafoam': '#5AAA95',
        'teal': '#087F8C',
        'forest': '#095256',
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }
}