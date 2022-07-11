import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

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

export const Table = styled.table`
  text-align: left;
  width: 100%;
  border-spacing: 0;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 1rem;
`;

export const THead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 1rem;
  font-size: 1.8rem;
  color: white;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const TBody = styled.tbody``;

export const Td = styled.td`
  font-size: 1.4rem;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const BaseMessageStyles = css`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
`;

export const NoClientsFound = styled.div`
  ${BaseMessageStyles}
`;

export const RequestFailed = styled.div`
  ${BaseMessageStyles}
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
