import { Theme } from "../types/theme";

export const light: Theme = {
  colors: {
    primary: {
      main: "#343090",
      light: "#9995da",
      dark: "#1f1b69",
    },
    secondary: {
      main: "#F5487F",
      light: "#ff7fbf",
      dark: "#c7004c",
    },
    error: {
      main: "#FF1010",
      light: "#ff7fbf",
      dark: "#c7004c",
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
      primary: "#F2F2F2",
      secondary: "#ffffff",
    },
    text: {
      primary: "#0d0d0d",
      secondary: "#404040",
    },
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

export const dark: Theme = {
  ...light,
  colors: {
    primary: {
      main: "#F5487F",
      light: "#ff7fbf",
      dark: "#c7004c",
    },
    secondary: {
      main: "#343090",
      light: "#9995da",
      dark: "#1f1b69",
    },
    error: {
      main: "#FF1010",
      light: "#ff7fbf",
      dark: "#c7004c",
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
      primary: "#0d0d0d",
      secondary: "#404040",
    },
    text: {
      primary: "#F2F2F2",
      secondary: "#ffffff",
    },
  },
};
