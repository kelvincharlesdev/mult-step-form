import styled from "styled-components";

export const Container = styled.div`
  background: gray;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background: green;
`;

export const ButtonUppercase = styled(Button)`
  text-transform: uppercase;
  background: blue;
  padding: 10px;
`;
