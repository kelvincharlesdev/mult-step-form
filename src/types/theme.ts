type ColorPalette = {
  main: string;
  light?: string;
  dark?: string;
};

type FontSize = {
  small: string;
  medium: string;
  large: string;
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

export type Theme = {
  colors: {
    primary: ColorPalette;
    secondary: ColorPalette;
    error: ColorPalette;
    warning?: ColorPalette;
    info?: ColorPalette;
    success?: ColorPalette;
    background: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
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
};
