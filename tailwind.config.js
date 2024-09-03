/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      "colors": {
        "Background": "#a7d7c5",
        "Form-Bg": "#f6fbf9",
        "Heading": "#212b27",
        "Paragraph": "#32403b",
        "Placeholder": "#000000",
        "CTA": "#ffffff",
        "Box": "#c1e3d6",
        "green":"#84C7AE"
       },
       "borderRadius": {
        "none": 0,
        "": 999
       }
    },
  },
  plugins: [],
}

