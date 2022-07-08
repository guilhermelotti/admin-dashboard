import { Link } from "react-router-dom";

const providers = [
  { name: "João", id: 1 },
  { name: "Paula", id: 2 },
];

export function Fornecedores() {
  return (
    <div style={{ color: "black", fontSize: "50px" }}>
      <span>Fornecedores:</span>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {providers.map(({ id, name }) => (
          <Link to={`/admin/client/${id}`} key={id}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
