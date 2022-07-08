import styled from "styled-components";

export const Wrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 0;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: 700;
  font-size: 2.4rem;
  padding: 0.8rem 2.2rem;
  text-decoration: none;
  letter-spacing: 1px;
  &:focus {
    box-shadow: 0 0 0 3px lightgray;
  }
`;
