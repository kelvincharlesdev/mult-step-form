import { ThemeProviderContext } from "./contexts/ThemeContext";
import Home from "./pages/home";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <ThemeProviderContext>
      <GlobalStyles />
      <Home />
    </ThemeProviderContext>
  );
}

export default App;
