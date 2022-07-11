import { useEffect } from "react";

import * as S from "./styles";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchClients,
  deleteClient,
  selectAllClients,
  getFetchClientsRequestStatus,
} from "../../../redux/features/clients/clientsSlice";

import { Button } from "../../../components/Button";
import { Spinner } from "../../../components/Spinner";

import { FiEdit as EditIcon } from "react-icons/fi";
import { RiDeleteBin6Line as DeleteIcon } from "react-icons/ri";

import { useNavigate } from "react-router-dom";

// TODO: caso fosse necessário fazer as outras telas eu criaria um componente separado para reutilizar
function ClientList({
  clients,
  handleDelete,
  handleEdit,
  fetchClientsRequestStatus,
}) {
  const requestSucceeded = fetchClientsRequestStatus === "succeeded";
  const requestFailed = fetchClientsRequestStatus === "failed";

  if (clients.length > 0 && requestSucceeded) {
    return (
      <S.Table>
        <S.THead>
          <S.Tr>
            <S.Th>NOME</S.Th>
            <S.Th>CPF</S.Th>
            <S.Th>TELEFONE</S.Th>
            <S.Th>CIDADE</S.Th>
            <S.Th>AÇÕES</S.Th>
          </S.Tr>
        </S.THead>
        <S.TBody>
          {clients.map(({ id, name, surname, cpf, phoneNumber, city }) => (
            <S.Tr key={id}>
              <S.Td>{name + " " + surname}</S.Td>
              <S.Td>{cpf}</S.Td>
              <S.Td>{phoneNumber}</S.Td>
              <S.Td>{city}</S.Td>
              <S.Td>
                <Button
                  size="small"
                  minimal
                  onClick={() => handleDelete(id, `${name} ${surname}`)}
                >
                  <DeleteIcon size={22} />
                </Button>
                <Button size="small" minimal onClick={() => handleEdit(id)}>
                  <EditIcon size={22} />
                </Button>
              </S.Td>
            </S.Tr>
          ))}
        </S.TBody>
      </S.Table>
    );
  }

  if (clients.length <= 0 && requestSucceeded) {
    return (
      <S.NoClientsFound>
        Nenhum cliente foi encontrado no banco de dados
      </S.NoClientsFound>
    );
  }

  if (requestFailed) {
    return <S.RequestFailed>Erro ao acessar o servidor</S.RequestFailed>;
  }
}

export function Clientes() {
  const clients = useSelector(selectAllClients);
  const fetchClientsRequestStatus = useSelector(getFetchClientsRequestStatus);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleDelete(id, clientName) {
    dispatch(deleteClient({ id, clientName }));
  }

  function handleEdit(id) {
    navigate(`editar/${id}`, { replace: true });
  }

  useEffect(() => {
    if (fetchClientsRequestStatus === "idle") {
      dispatch(fetchClients());
    }
  }, [fetchClientsRequestStatus, dispatch]);

  return (
    <>
      <S.HeaderContainer>
        <S.Header>Clientes:</S.Header>
        <Button>
          <S.StyledLink to="cadastro">Cadastrar cliente</S.StyledLink>
        </Button>
      </S.HeaderContainer>
      {fetchClientsRequestStatus === "loading" ? (
        <S.SpinnerWrapper>
          <Spinner size={80} />
        </S.SpinnerWrapper>
      ) : (
        <ClientList
          fetchClientsRequestStatus={fetchClientsRequestStatus}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          clients={clients}
        />
      )}
    </>
  );
}
