import Typography from "typography"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Source Sans Pro",
      styles: ["400", "400i"],
    },
    {
      name: "Martel",
      styles: ["700"],
    },
  ],
  headerFontFamily: ["Martel"],
  bodyFontFamily: ["Source Sans Pro"],
});

typography.injectStyles();

export default typography;