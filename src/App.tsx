import { ThemeProviderContext } from "./contexts/ThemeContext";
import Home from "./pages/home";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <ThemeProviderContext>
      {/* Caso queira utilizar somente um tema: */}
      {/* <ThemeProvider theme={light}> */}
      <GlobalStyles />
      <Home />
      {/* </ThemeProvider> */}
    </ThemeProviderContext>
  );
}

export default App;
