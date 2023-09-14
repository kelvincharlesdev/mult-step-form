import { styled } from "styled-components";

export const Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 8px;
  background: transparent;

  color: ${({ theme }) => theme.colors.text.main};
`;
