import * as Styled from "./styles";

interface StepFormProps {
  title: string;
  nextStep?: () => void;
  previousStep?: () => void;
  children: React.ReactNode;
}

export const StepForm = ({
  title,
  nextStep,
  previousStep,
  children,
}: StepFormProps) => {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      {children}
      <Styled.Actions>
        {previousStep ? <button onClick={previousStep}>Anterior</button> : null}
        {nextStep ? <button onClick={nextStep}>Próximo</button> : null}
      </Styled.Actions>
    </Styled.Container>
  );
};
