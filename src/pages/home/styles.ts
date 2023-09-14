import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background: blue;
  padding: ${({ theme }) => theme.spacing.large + " " + theme.spacing.medium};

  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.main`
  background: green;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.large};

  background: ${({ theme }) => theme.colors.background.main};
  color: ${({ theme }) => theme.colors.text.main};
`;

export const Footer = styled.footer`
  /* background: ${({ theme }) => theme.colors.background.main}; */
  display: flex;
  justify-content: center;
  background: blue;
  padding: ${({ theme }) => theme.spacing.small};
  background: yellow;

  background: ${({ theme }) => theme.colors.background.dark};
  color: ${({ theme }) => theme.colors.text.main};
`;
