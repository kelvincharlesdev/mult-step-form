import { createContext, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { dark, light } from "../styles/themes";

type ThemesVariations = "light" | "dark";

interface ThemeContextProps {
  theme: ThemesVariations;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProviderContext = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemesVariations>("light");
  const [activeTheme, setActiveTheme] = useState<DefaultTheme>(light);

  const toggle = () => {
    setActiveTheme((prev) => (prev === light ? dark : light));
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, theme }}>
      <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
