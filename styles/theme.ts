const space = [0, 4, 8, 16, 32, 40, 44, 50, 64, 128, 256, 512];
const breakpoints = [
  "22.625em",
  "30em",
  "37.500em",
  "48em",
  "56.25em",
  "59.125em",
  "61.25em",
  "68.75em",
  "75.000em",
];
const fontSizes = [12, 14, 16, 20, 22, 24, 26, 32, 36, 40, 48, 60, 68, 70];
const lineHeights = [15, 17.5, 20, 25, 30, 40];

export const lightTheme = {
  space,
  breakpoints,
  fontSizes,
  lineHeights,
  colors: {
    primary: "#fff",
    secondary: "#000",
    button: "#124",
    text: "#7b7b7b",
    terminal: "#21313c",
    buttonText: "#fff",
    form: "#fff",
  },
};

export const darkTheme = {
  space,
  breakpoints,
  fontSizes,
  lineHeights,
  colors: {
    primary: "#124",
    secondary: "#fff",
    button: "#fff",
    text: "#f8f8f8",
    terminal: "#f4f5ff",
    buttonText: "#000",
    form: "#16213a",
  },
};
