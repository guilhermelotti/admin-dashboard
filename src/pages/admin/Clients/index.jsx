import { Link } from "react-router-dom";

const clients = [
  { name: "Angela", id: 1 },
  { name: "Pedro", id: 2 },
];

export function Clients() {
  return (
    <div style={{ color: "black", fontSize: "50px" }}>
      <span>Clients:</span>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {clients.map(({ id, name }) => (
          <Link to={`/admin/client/${id}`} key={id}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
