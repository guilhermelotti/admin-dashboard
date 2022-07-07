import React from "react";
import * as S from "./styles";

import { SidebarDropdown } from "../SidebarDropdown";
import { SidebarLink } from "../SidebarLink";

import { data } from "./data";

export function Sidebar() {
  return (
    <S.Container>
      <S.SidebarItemsWrapper>
        {data.map((item) =>
          item.to ? (
            <SidebarLink
              key={item.label}
              label={item.label}
              to={item.to}
              icon={item.icon}
            />
          ) : (
            <SidebarDropdown
              key={item.label}
              label={item.label}
              icon={item.icon}
              subItems={item.subItems}
            />
          )
        )}
      </S.SidebarItemsWrapper>
    </S.Container>
  );
}
