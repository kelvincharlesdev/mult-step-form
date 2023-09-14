import { ToggleButton } from "../../components/ToggleButton";

import * as Styled from "./styles";
const Home = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <span>LOGO</span>
        <ToggleButton />
      </Styled.Header>
      <Styled.Content>
        Conteúdo para o nosso site muito legal Conteúdo para o nosso site muito
      </Styled.Content>
      <Styled.Footer>Turma Raro Academy</Styled.Footer>
    </Styled.Container>
  );
};

export default Home;
