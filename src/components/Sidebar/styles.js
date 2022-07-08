import styled from "styled-components";

export const Container = styled.aside`
  position: relative;
  left: 0;
  width: 31.2rem;
  height: 80vh;
  padding: 2rem;
  background: white;
  border: 5px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;
`;

export const SidebarItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 1rem;
`;
