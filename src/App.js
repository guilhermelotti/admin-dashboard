import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";

import { Home as HomeLayout } from "./pages/admin/Home";
import { Dashboard } from "./pages/admin/Dashboard";
import { Clients } from "./pages/admin/Clients";
import { Client } from "./pages/admin/Client";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="admin" element={<HomeLayout />}>
              <Route path="clients" element={<Clients />} />
              <Route path="client/:clientId" element={<Client />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
