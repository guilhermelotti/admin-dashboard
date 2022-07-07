import * as S from "./styles";

import { Link, useLocation } from "react-router-dom";

export function SidebarLink({ icon, label, to }) {
  const { pathname } = useLocation();

  return (
    <Link style={{ textDecoration: "none", color: "black" }} to={to}>
      <S.ItemLabel isActive={pathname === to}>
        <S.ContentWrapper>
          {icon}
          <span>{label}</span>
        </S.ContentWrapper>
      </S.ItemLabel>
    </Link>
  );
}
