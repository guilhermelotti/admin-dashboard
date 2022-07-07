import styled from "styled-components";

export const ItemLabel = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  border-radius: 5px;
  font-size: 1.6rem;
  font-weight: 600;
  justify-content: space-between;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : "white"};
  color: ${({ isActive }) => (isActive ? "white" : "black")};

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
  display: flex;
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;

    & > svg {
      display: block;
    }
  }

  & > svg {
    display: none;
  }
`;
