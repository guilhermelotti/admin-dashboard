import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  clients: [],
  /* caso eu use algo como RTK Query talvez eu não precise disso */
  fetchClientsRequestStatus: "idle",
  updateClientsRequestStatus: "idle",
  addClientRequestStatus: "idle",
  errorMessage: "",
};

const CLIENTS_URL = "http://localhost:3004/clientes";

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchClients.pending, (state) => {
        state.fetchClientsRequestStatus = "loading";
      })
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.fetchClientsRequestStatus = "succeeded";
        const loadedClients = action.payload;
        state.clients = state.clients.concat(loadedClients);
      })
      .addCase(fetchClients.rejected, (state) => {
        state.fetchClientsRequestStatus = "failed";
        state.error = true;
      })
      .addCase(addNewClient.pending, (state) => {
        state.addClientRequestStatus = "loading";
      })
      .addCase(addNewClient.fulfilled, (state, action) => {
        state.addClientRequestStatus = "succeeded";
        const createdClient = action.payload;
        state.clients.push(createdClient);
      })
      .addCase(addNewClient.rejected, (state) => {
        state.addClientRequestStatus = "failed";
      })
      .addCase(updateClient.pending, (state) => {
        state.updateClientsRequestStatus = "loading";
      })
      .addCase(updateClient.fulfilled, (state, action) => {
        state.updateClientsRequestStatus = "succeeded";
        const { id } = action.payload;
        const clients = state.clients.filter((client) => client.id !== id);
        state.clients = [...clients, action.payload];
      })
      .addCase(updateClient.rejected, (state) => {
        state.updateClientsRequestStatus = "failed";
        // TODO: talvez disparar um toast message aqui ?
        // para disparar aqui  eu acho que vou ter que criar
        // uma ação somente para disparar os toasts
      })
      .addCase(deleteClient.fulfilled, (state, action) => {
        const { id } = action.payload;
        const clients = state.clients.filter((client) => client.id !== id);
        state.clients = clients;
      });
  },
});

// createAsyncThunk generates pending/fulfilled/rejected action types automatically
export const fetchClients = createAsyncThunk(
  "clients/fetchClients",
  async () => {
    const response = await axios.get(CLIENTS_URL);
    return response.data;
  }
);

export const addNewClient = createAsyncThunk(
  "clients/addNewClient",
  async (initialClient) => {
    const client = {
      id: nanoid(),
      ...initialClient,
    };

    const loadingToastNotification = toast.loading("Adicionando cliente...");
    try {
      const response = await axios.post(CLIENTS_URL, client);
      toast.update(loadingToastNotification, {
        render: `Cliente adicionado com sucesso!`,
        type: "success",
        isLoading: false,
        autoClose: true,
      });
      return response.data;
    } catch {
      toast.update(loadingToastNotification, {
        render: `Ocorreu um erro ao adicionar o cliente`,
        type: "error",
        isLoading: false,
        autoClose: true,
      });
    }
  }
);

export const deleteClient = createAsyncThunk(
  "posts/deleteClient",
  async (initialClient) => {
    const { id, clientName } = initialClient;
    const loadingToastNotification = toast.loading("Deletando cliente...");
    try {
      await axios.delete(`${CLIENTS_URL}/${id}`);
      toast.update(loadingToastNotification, {
        render: `Cliente ${clientName} deletado com sucesso!`,
        type: "success",
        isLoading: false,
        autoClose: true,
      });
      return { id };
    } catch (err) {
      toast.update(loadingToastNotification, {
        render: `Ocorreu um erro ao deletar`,
        type: "error",
        isLoading: false,
        autoClose: true,
      });
    }
  }
);

export const updateClient = createAsyncThunk(
  "clients/updateClient",
  async (initialClient) => {
    const { id } = initialClient;
    try {
      const response = await axios.put(`${CLIENTS_URL}/${id}`, initialClient);
      toast.success(`Dados atualizados com sucesso!`);
      return response.data;
    } catch {
      toast.error("Ocorreu um erro ao atualizar os dados do cliente");
    }
  }
);

//TODO: arrumar os nomes para select ao invés de  get
export const getFetchClientsRequestStatus = (state) =>
  state.clients.fetchClientsRequestStatus;

export const getUpdateClientRequestStatus = (state) =>
  state.clients.updateClientsRequestStatus;

export const getAddClientRequestStatus = (state) =>
  state.clients.addClientRequestStatus;

export const selectAllClients = (state) => state.clients.clients;
export const selectClientById = (state, clientId) =>
  state.clients.clients.find((client) => client.id === clientId);

export const { clientAdded } = clientsSlice.actions;

export default clientsSlice.reducer;
