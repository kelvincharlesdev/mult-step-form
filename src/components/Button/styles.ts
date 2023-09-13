import { styled } from "styled-components";

interface ButtonProps {
  background: "primary" | "secondary";
  color: "primary" | "secondary";
}

export const Button = styled.button<ButtonProps>`
  ${({ background, color }) => `
    background: ${background === "primary" ? "green" : "orange"};
    color: ${color === "primary" ? "orange" : "green"};
  `}
  border: none;
  cursor: pointer;
  padding: 12px;
`;
