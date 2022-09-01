import Background from "./components/Background";
import { ThemeProvider } from "./ThemeContext";
import Toggle from "./ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <Background>
        <Toggle />
      </Background>
    </ThemeProvider>
  );
}

export default App;
