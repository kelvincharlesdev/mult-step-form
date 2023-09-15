import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  flex: 1;
  margin: 2rem;

  border-radius: 0.5rem;
  border-color: ${({ theme }) => theme.colors.background.light};
  background: ${({ theme }) => theme.colors.background.dark};
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

export const Actions = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`;
