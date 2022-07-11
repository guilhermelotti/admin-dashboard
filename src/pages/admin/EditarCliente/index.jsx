import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getUpdateClientRequestStatus,
  updateClient,
} from "../../../redux/features/clients/clientsSlice";

import * as S from "./styles";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../../../components/Spinner";

export function EditarCliente() {
  const { clientId } = useParams();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cpf, setCPF] = useState("");
  const [city, setCity] = useState("");

  const updateClientsRequestStatus = useSelector(getUpdateClientRequestStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    setId(clientId);
  }, [clientId]);

  const isAllFieldsFilled = [name, surname, phoneNumber, cpf, city].every(
    Boolean
  );

  const canSave = isAllFieldsFilled && updateClientsRequestStatus !== "loading";

  function handleSubmit(e) {
    e.preventDefault();

    if (canSave) {
      dispatch(updateClient({ id, name, surname, cpf, phoneNumber, city }));
      setName("");
      setSurname("");
      setPhoneNumber("");
      setCPF("");
      setCity("");
    }
  }

  return (
    <>
      <S.HeaderContainer>
        <S.Header>Editar cliente</S.Header>
        <Button>
          <S.StyledLink to="/admin/clientes">Voltar</S.StyledLink>
        </Button>
      </S.HeaderContainer>
      <S.Form onSubmit={(e) => handleSubmit(e)}>
        <S.Flex>
          <Input
            label="Nome"
            name="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Sobrenome"
            name="sobrenome"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </S.Flex>
        <S.Flex>
          <Input
            label="Telefone"
            name="telefone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Input
            label="CPF"
            name="cpf"
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
          />
          <Input
            label="Cidade"
            name="cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </S.Flex>
        <S.FooterContainer>
          <Button type="submit" disabled={!canSave}>
            {updateClientsRequestStatus === "loading" ? (
              <Spinner />
            ) : (
              <span>Salvar</span>
            )}
          </Button>
          <Button type="button">Limpar</Button>
          {/* {clientsError && <h1>Alguma coisa deu errado!</h1>} */}
        </S.FooterContainer>
      </S.Form>
    </>
  );
}
