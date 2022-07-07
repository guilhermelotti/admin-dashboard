import { Link } from "react-router-dom";
import styled from "styled-components";

export const LabelContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  border-radius: 5px;
  font-size: 1.6rem;
  font-weight: 600;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const SubItemsWrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 0.6rem;
  align-items: flex-end;
`;

export const SubItemLabel = styled.div`
  display: flex;
  width: 90%;
  gap: 1rem;
  padding: 1rem;
  border-radius: 5px;
  font-size: 1.6rem;
  font-weight: 600;
  justify-content: space-between;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : "white"};
  color: ${({ isActive }) => (isActive ? "white" : "black")};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;

    .arrow-right-icon {
      display: block;
    }
  }

  .arrow-right-icon {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;
