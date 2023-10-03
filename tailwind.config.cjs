
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "gray-20": "#F8F4EB",
        // "gray-50": "#EFE6E6",
        // "gray-100": "#DFCCCC",
        // "gray-500": "#5E0000",

        "black-20": "#000000",
        "black-50": "#343434",
        "black-100": "#1B1212",
        "black-500": "#28282B",
        // "primary-100": "#FFE1E0",
        // "primary-300": "#FFA6A3",
        // "primary-500": "#FF6B66",
        "primary-100": "#f5e3ce",
        "primary-300": "#f0c595",
        "primary-500": "#f7bf7e",
        // "secondary-400": "#FFCD5B",
        // "secondary-500": "#FFC132",
        "secondary-400": " #E0A96D",
        "secondary-500": "#f58d1b",
      },
      backgroundImage: () => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        // evolvetext: "url('./assets/text.png')",
        // fitvibetext: "url('./assets/logo1.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
