import "styled-components";

type ColorPalette = {
  main: string;
  light?: string;
  dark?: string;
};

type FontSize = {
  xs: string;
  small: string;
  medium: string;
  large: string;
  xl: string;
};

type FontWeight = {
  light: number;
  regular: number;
  bold: number;
};

type Spacing = {
  small: string;
  medium: string;
  large: string;
};

type BorderRadius = {
  small: string;
  medium: string;
  large: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: ColorPalette;
      secondary: ColorPalette;
      error: ColorPalette;
      warning?: ColorPalette;
      info?: ColorPalette;
      success?: ColorPalette;
      background: ColorPalette;
      text: ColorPalette;
      white: string;
      black: string;
    };
    fonts: {
      family: {
        primary: string;
        secondary: string;
      };
      size: FontSize;
      weight: FontWeight;
    };
    spacing: Spacing;
    borderRadius: BorderRadius;
  }
}
