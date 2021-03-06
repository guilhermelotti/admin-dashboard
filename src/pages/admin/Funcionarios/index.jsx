import { Link } from "react-router-dom";

const employees = [
  { name: "Ana Laura", id: 1 },
  { name: "Samuel", id: 2 },
];

export function Funcionarios() {
  return (
    <div style={{ color: "black", fontSize: "50px" }}>
      <span>Funcionarios:</span>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {employees.map(({ id, name }) => (
          <Link to={`/admin/client/${id}`} key={id}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
