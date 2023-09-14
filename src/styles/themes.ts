import { DefaultTheme } from "styled-components";

export const light: DefaultTheme = {
  colors: {
    primary: {
      main: "#c18c0d",
      light: "#f7d154",
      dark: "#8f5e00",
    },
    secondary: {
      main: "#f06c1f",
      light: "#f79a5d",
      dark: "#a63f00",
    },
    error: {
      main: "#FF1010",
    },
    warning: {
      main: "#FAC736",
    },
    info: {
      main: "#58d5ee",
    },
    success: {
      main: "#1fa858",
    },
    background: {
      main: "#F2F2F2",
      light: "#ffffff",
      dark: "#d9d9d9",
    },
    text: {
      main: "#004793",
      light: "#0761bf",
      dark: "#003063",
    },
    white: "#ffffff",
    black: "#000000",
  },
  fonts: {
    family: {
      primary: "Roboto, sans-serif",
      secondary: "Montserrat, sans-serif",
    },
    size: {
      small: "1.2rem",
      medium: "1.6rem",
      large: "2.4rem",
    },
    weight: {
      light: 300,
      regular: 400,
      bold: 700,
    },
  },
  spacing: {
    small: "1.2rem",
    medium: "1.6rem",
    large: "2.4rem",
  },
  borderRadius: {
    small: "0.4rem",
    medium: "0.8rem",
    large: "1.2rem",
  },
};

export const dark: DefaultTheme = {
  ...light,
  colors: {
    ...light.colors,
    background: {
      main: "#1c1c1c",
      light: "#404040",
      dark: "#0d0d0d",
    },
    text: {
      main: "#F2F2F2",
      light: "#ffffff",
      dark: "#d9d9d9",
    },
  },
};
