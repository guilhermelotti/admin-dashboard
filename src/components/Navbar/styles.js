import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3.6rem;
  background-color: ${({ theme }) => theme.colors.secondary}; ;
`;

export const Heading = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: white;
`;

export const AvatarContainer = styled.div`
  border-radius: 20px;
  width: 6.5rem;
  height: 6.5rem;
  background: #b34fff;
`;
