import React from "react";

import {
  ProgressBarContainer,
  StepCircle,
  StepText,
} from "./styles";


export const ProgressBar: React.FC<{ currentStep: number; totalSteps: number }> = ({
    currentStep,
    totalSteps,
  }) => {
    return (
      <ProgressBarContainer>
        {Array.from({ length: totalSteps }, (_, index) => (
          <div key={index}>
            <StepCircle $filled={index < currentStep}>{index + 1}</StepCircle>
            <StepText>Step {index + 1}</StepText>
          </div>
        ))}
      </ProgressBarContainer>
    );
  };


