import { Outlet } from "react-router-dom";

import { Navbar } from "../../../components/Navbar";
import { Sidebar } from "../../../components/Sidebar";

import * as S from "./styles";

export function Home() {
  return (
    <>
      <Navbar />
      <S.Container>
        <Sidebar />
        <S.OutletContainer>
          <Outlet />
        </S.OutletContainer>
      </S.Container>
    </>
  );
}
