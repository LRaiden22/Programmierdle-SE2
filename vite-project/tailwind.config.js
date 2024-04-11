/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'text': '#f1e4f3',
        'background': '#201F21',
        'primary': '#d79ce0',
        'secondary': '#7d258a',
        'accent': '#be34d2',
       },
       
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#D79CE0", 
        "secondary": "#7D258A",    
        "accent": "#BE34D2",      
        "neutral": "#D79CE0",     
        "base-100": "#0D050F",     
        "info": "#0000ff",      
        "success": "#4ade80",      
        "warning": "#fde047",      
        "error": "#fb7185",
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ]
};