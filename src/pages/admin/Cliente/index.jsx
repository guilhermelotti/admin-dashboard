import { useParams } from "react-router-dom";

export function Cliente() {
  const { clientId } = useParams();

  return (
    <div style={{ color: "black", fontSize: "50px" }}>cliente {clientId}</div>
  );
}
