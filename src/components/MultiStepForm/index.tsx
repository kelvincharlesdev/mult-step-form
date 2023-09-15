import { useState } from "react";
import { StepForm } from "../StepForm";

export const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    // cria a lógica para atualizar o estado de acordo com o step
  };

  const handleSubmit = () => {
    // cria o profile e com a response, disponibilizar o id para baixar o pdf
  };

  switch (step) {
    case 1:
      return (
        <StepForm title="Passo 1">
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Nome"
          />
          <button onClick={prevStep}>Anterior</button>
          <button onClick={nextStep}>Próximo</button>
        </StepForm>
      );
    default:
      return null;
  }
};
