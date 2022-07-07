import { useState } from "react";

import {
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

import { useLocation } from "react-router-dom";

import * as S from "./styles";

export function SidebarDropdown({ icon, label, subItems }) {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(hasOneSubItemSelected);

  function hasOneSubItemSelected() {
    return subItems.some((subItem) => subItem.to === pathname);
  }

  return (
    <>
      <S.LabelContainer onClick={() => setIsOpen((prevState) => !prevState)}>
        <S.ContentWrapper>
          {icon}
          <span>{label}</span>
        </S.ContentWrapper>
        {isOpen ? <RiArrowUpSLine size={20} /> : <RiArrowDownSLine size={20} />}
      </S.LabelContainer>
      <S.SubItemsWrapper isOpen={isOpen} aria-hidden={!isOpen}>
        {subItems.map((subItem) => (
          <S.SubItemLabel
            key={subItem.label}
            isActive={pathname === subItem.to}
          >
            <S.StyledLink to={subItem.to}>
              <span>{subItem.label}</span>
              <RiArrowRightSLine className="arrow-right-icon" size={20} />
            </S.StyledLink>
          </S.SubItemLabel>
        ))}
      </S.SubItemsWrapper>
    </>
  );
}
