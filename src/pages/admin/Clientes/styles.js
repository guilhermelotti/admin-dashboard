import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 6.5rem;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3.6rem;
  font-weight: 700;
`;
