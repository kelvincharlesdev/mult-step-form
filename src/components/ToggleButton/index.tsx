import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import * as Styled from "./styles";

export const ToggleButton = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <Styled.Button onClick={toggle}>
      Trocar para tema: {theme === "light" ? "Dark" : "Light"}
    </Styled.Button>
  );
};
