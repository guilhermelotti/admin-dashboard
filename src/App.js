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

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { CadastroClientes } from "./pages/admin/CadastroClientes";
import { EditarCliente } from "./pages/admin/EditarCliente";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route path="admin" element={<Home />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route exact path="clientes" element={<Clientes />} />
                <Route
                  path="clientes/cadastro"
                  element={<CadastroClientes />}
                />
                <Route
                  path="clientes/editar/:clientId"
                  element={<EditarCliente />}
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
          <ToastContainer style={{ fontSize: "1.6rem" }} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
