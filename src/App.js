import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";

import { theme } from "./styles/theme";

import { Home } from "./pages/admin/Home";
import { Dashboard } from "./pages/admin/Dashboard";
import { Clients } from "./pages/admin/Clients";
import { Client } from "./pages/admin/Client";
import { Providers } from "./pages/admin/Providers";
import { Employees } from "./pages/admin/Employees";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="admin" element={<Home />}>
              <Route path="clients" element={<Clients />} />
              <Route path="providers" element={<Providers />} />
              <Route path="employees" element={<Employees />} />
              <Route path="users" element={<div>User registration</div>} />
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
