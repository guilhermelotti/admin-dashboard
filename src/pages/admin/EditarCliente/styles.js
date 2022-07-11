import { Link } from "react-router-dom";
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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  gap: 2.2rem;
  margin-bottom: 2.2rem;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
