/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'pink': '#ff99c8',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
       'black' : 'rgb(0 0 0)',
       'salmon' : "#FF8FAB",
       'purple' : "rgba(114, 63, 95, 0.9)",
       'beige' :  "#f5ebe0",
       'yellow' : "#FFC300"
    },
    fontFamily: {
      'sans': ["Proxima Nova",'ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Cantarell'],
      'new': ["Drama Regular"]
    }
  },
  plugins: [],
}

