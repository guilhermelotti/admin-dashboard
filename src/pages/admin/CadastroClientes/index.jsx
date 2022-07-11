import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  addNewClient,
  getAddClientRequestStatus,
} from "../../../redux/features/clients/clientsSlice";

import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Spinner } from "../../../components/Spinner";

import * as S from "./styles";

export function CadastroClientes() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cpf, setCPF] = useState("");
  const [city, setCity] = useState("");

  const addClientRequestStatus = useSelector(getAddClientRequestStatus);

  const dispatch = useDispatch();

  const isAllFieldsFilled = [name, surname, phoneNumber, cpf, city].every(
    Boolean
  );

  const canSave = isAllFieldsFilled && addClientRequestStatus !== "loading";

  function handleSubmit(e) {
    e.preventDefault();

    if (canSave) {
      dispatch(addNewClient({ name, surname, cpf, phoneNumber, city }));
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
        <S.Header>Cadastro de clientes</S.Header>
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
            {addClientRequestStatus === "loading" ? (
              <Spinner />
            ) : (
              <span>Salvar</span>
            )}
          </Button>
          <Button type="button">Limpar</Button>
        </S.FooterContainer>
      </S.Form>
    </>
  );
}
