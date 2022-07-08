import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";

import { theme } from "./styles/theme";

import { Home } from "./pages/admin/Home";
import { Dashboard } from "./pages/admin/Dashboard";
import { Clientes } from "./pages/admin/Clientes";
import { Cliente } from "./pages/admin/Cliente";
import { Funcionarios } from "./pages/admin/Funcionarios";
import { Fornecedores } from "./pages/admin/Fornecedores";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="admin" element={<Home />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route exact path="clientes" element={<Clientes />} />
              <Route
                path="clientes/cadastro"
                element={
                  <div style={{ fontSize: "2rem" }}>Cadastro Clientes</div>
                }
              />
              <Route path="fornecedores" element={<Fornecedores />} />
              <Route path="funcionarios" element={<Funcionarios />} />
              <Route path="usuarios" element={<div>Usuários</div>} />
              <Route path="perfil" element={<div>Perfil</div>} />

              <Route path="cliente/:clientId" element={<Cliente />} />
            </Route>
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
