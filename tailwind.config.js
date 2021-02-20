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
        inter: "Inter, Roboto",
      },
      fontSize: {
        standard: "18px",
        postHeader: "30px",
        postSubheader: "24px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
