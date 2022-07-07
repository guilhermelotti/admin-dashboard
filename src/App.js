import { ThemeProvider } from "styled-components";
import { Sidebar } from "./components/Sidebar";
import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Sidebar />
      </ThemeProvider>
    </>
  );
}

export default App;
