import { MultiStepForm } from "../../components/MultiStepForm";
import { ToggleButton } from "../../components/ToggleButton";

import * as Styled from "./styles";
const Home = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <h1>Cadastre seu perfil de desenvolvedor</h1>
        <ToggleButton />
      </Styled.Header>
      <Styled.Content>
        <MultiStepForm />
      </Styled.Content>
      <Styled.Footer>Turma Raro Academy</Styled.Footer>
    </Styled.Container>
  );
};

export default Home;
