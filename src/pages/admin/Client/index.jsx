import { useParams } from "react-router-dom";

export function Client() {
  const { clientId } = useParams();

  return (
    <div style={{ color: "black", fontSize: "50px" }}>client {clientId}</div>
  );
}
