import { Outlet } from "react-router-dom";
import { Sidebar } from "../../../components/Sidebar";

import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <Sidebar />
      <Outlet />
    </S.Container>
  );
}
