module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightBlack: "#222",
        brightGreen: "#87ffa8",
        pinkish: "#ffd7ff",
        mustard: "#e5e600",
      },
      fontFamily: {
        monospace: "monospace",
      },
      fontSize: {
        standard: "18px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
