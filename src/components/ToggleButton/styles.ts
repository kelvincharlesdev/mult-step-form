import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { styled } from "styled-components";

export const Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 8px;
  background: transparent;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.primary.main};

  color: ${({ theme }) => theme.colors.white};
`;

export const Moon = styled(MoonIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const Sun = styled(SunIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
`;
