import { useState } from "react";
import * as Styled from "./styles";
import { StepTwo } from "../StepTwo";
import { api } from "../../service/api";
import { StepThree } from "../StepThree";
import { ProgressBar } from "../ProgressSteps";
import { FormDados } from "../../Utils/structure";
import { StepOne } from "../StepOne";

const dataForm: FormDados = {
  name: "",
  email: "",
  birthdate: "",
  phone: "",
  role: "",
  bio: "",
  links: [],
  states: [],
  city_id: "",
  softskill_ids: [],
  selectedSkills: [],
  ability_ids: [],
  tech_ids: [],
  hasExperience: "não",
  hasCompetence: "nao",
  experiences_attributes: [
    // {
    //   title: "",
    //   company_name: "",
    //   start_date: "",
    //   end_date: "",
    //   function_performed: "",
    // },
  ],
  studies_attributes: [
    // {
    //   title: "",
    //   institution: "",
    //   link: "",
    //   start_date: "",
    //   end_date: "",
    // },
  ],
};

export const MultiStepForm = () => {
  const [data, setData] = useState<FormDados>(dataForm);
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = async (formData: FormDados) => {
    console.log("form submit", formData);

    try {
      const response = await api.post("/profiles", {
        profile: formData,
      });

      const pdf = await api.get(`/profiles/${response.data.id}/download`);
      const url = window.URL.createObjectURL(new Blob([pdf.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "perfil.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.log(error);
    }
  };

  const HandleNextStep = (newData: Partial<FormDados>, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest({ ...data, ...newData });
    }

    setCurrentStep((prev) => prev + 1);
  };

  const HandlePrevStep = (newData: Partial<FormDados>) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne next={HandleNextStep} data={data} />,
    <StepTwo next={HandleNextStep} prev={HandlePrevStep} data={data} />,
    <StepThree next={HandleNextStep} prev={HandlePrevStep} data={data} />,
  ];

  console.log("data", data);

  return (
    <Styled.ContentForm>
      <ProgressBar currentStep={currentStep} totalSteps={steps.length} />
      {steps[currentStep]}
    </Styled.ContentForm>
  );
};
