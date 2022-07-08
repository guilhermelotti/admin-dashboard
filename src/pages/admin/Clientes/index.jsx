import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";

import * as S from "./styles";

const clients = [
  { name: "Angela", id: 1 },
  { name: "Pedro", id: 2 },
];

export function Clientes() {
  return (
    <>
      <S.HeaderContainer>
        <S.Header>Clientes:</S.Header>
        <Button>Cadastrar cliente</Button>
      </S.HeaderContainer>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {clients.map(({ id, name }) => (
          <Link to={`/admin/client/${id}`} key={id}>
            {name}
          </Link>
        ))}
      </div>
    </>
  );
}
