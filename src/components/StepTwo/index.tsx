import React, { useEffect, useState } from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";

import * as Styled from "./styles";
import { api } from "../../service/api";
import { FormDados, IResponse } from "../../Utils/structure";
import { ErrorMessageSpan } from "../ErrorMessage";
import { stepTwoValidationSchema } from "../../Utils/validaddeSchema";

interface StepTwoProps {
  data: FormDados;
  next: (newData: Partial<FormDados>, final?: boolean) => void;
  prev: (newData: Partial<FormDados>) => void;
}

interface ITech extends IResponse {
  name: string;
}

interface ISoftSkills extends IResponse {
  name: string;
}

interface IAbility extends IResponse {
  name: string;
  role: string;
  description: string;
}

export const StepTwo: React.FC<StepTwoProps> = ({ data, next, prev }) => {
  const [role, setRole] = useState<string>("");
  const [techs, setTechs] = useState<ITech[] | undefined>();
  const [abilities, setAbilities] = useState<IAbility[] | undefined>();
  const [softSkills, setSoftSkills] = useState<ISoftSkills[] | undefined>();

  const handleSubmit = (values: Partial<FormDados>) => {
    next(values);
  };

  useEffect(() => {
    const fetchTechs = async () => {
      try {
        const response = await api.get("/techs");
        setTechs(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSoftSkills = async () => {
      try {
        const response = await api.get("/softskills");
        setSoftSkills(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSoftSkills();
    fetchTechs();
    fetchAbilities("frontend");
  }, []);

  const fetchAbilities = async (selectedRole: string) => {
    try {
      const response = await api.get("/abilities", {
        params: { role: selectedRole },
      });
      setAbilities(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChandeRole = (
    e: React.ChangeEvent<HTMLSelectElement>,
    setFieldValue: FormikHelpers<FormDados>["setFieldValue"]
  ) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    fetchAbilities(selectedRole);
    setFieldValue("role", selectedRole);
  };

  return (
    <Formik
      validationSchema={stepTwoValidationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, setFieldValue, values }) => (
        <Form>
          <Styled.Title>Dados Técnicos</Styled.Title>
          <Styled.Field>
            <label htmlFor="select">Selecione seu cargo:</label>
            <Field
              as="select"
              name="role"
              value={values.role}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                handleChandeRole(e, setFieldValue);
              }}
            >
              <option value="" disabled>
                Selecione seu cargo
              </option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Fullstack</option>
              <option value="mobile">Mobile</option>
              <option value="designer">Designer</option>
              <option value="qa">QA</option>
            </Field>
            <ErrorMessageSpan message={touched.role && errors.role} />
          </Styled.Field>

          <Styled.CheckboxField>
            <span>Escolha suas competências: </span>
            <Styled.CheckboxContent>
              {abilities?.map((ability) => (
                <div key={ability.id}>
                  <Field
                    type="checkbox"
                    name="ability_ids"
                    value={String(ability.id)}
                    checked={values.ability_ids.includes(String(ability.id))}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const skillId = String(ability.id);
                      const isChecked = e.target.checked;
                      if (isChecked) {
                        setFieldValue("ability_ids", [
                          ...values.ability_ids,
                          skillId,
                        ]);
                      } else {
                        setFieldValue(
                          "ability_ids",
                          values.ability_ids.filter((id) => id !== skillId)
                        );
                      }
                    }}
                  />
                  {ability.name}
                </div>
              ))}
            </Styled.CheckboxContent>
            <ErrorMessageSpan
              message={touched.ability_ids && errors.ability_ids}
            />
          </Styled.CheckboxField>

          <Styled.Field>
            <label htmlFor="techs">Selecione uma Tecnologia:</label>
            <Field
              as="select"
              name="tech_ids"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setFieldValue("tech_ids", [e.target.value])
              }
              disabled={!techs}
            >
              <option value="" disabled>
                Selecione uma tecnologia
              </option>
              {techs
                ? techs.map((tech: ITech) => (
                    <option key={tech.id} value={tech.id}>
                      {tech.name}
                    </option>
                  ))
                : null}
            </Field>
            <ErrorMessageSpan message={touched.tech_ids && errors.tech_ids} />
          </Styled.Field>
          <Styled.CheckboxField>
            <span>Escolha 3 soft skills </span>

            <Styled.CheckboxContent>
              {softSkills?.map((skill) => (
                <div key={skill.id}>
                  <Field
                    type="checkbox"
                    name="softskill_ids"
                    value={String(skill.id)}
                    checked={values.softskill_ids.includes(String(skill.id))}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const skillId = String(skill.id);
                      const isChecked = e.target.checked;
                      if (isChecked) {
                        setFieldValue("softskill_ids", [
                          ...values.softskill_ids,
                          skillId,
                        ]);
                      } else {
                        setFieldValue(
                          "softskill_ids",
                          values.softskill_ids.filter((id) => id !== skillId)
                        );
                      }
                    }}
                  />
                  {skill.name}
                </div>
              ))}
            </Styled.CheckboxContent>
            <ErrorMessageSpan
              message={touched.softskill_ids && errors.softskill_ids}
            />
          </Styled.CheckboxField>

          <Styled.ContentButtons>
            <div className="contentButtons">
              <button
                className="buttonBack"
                type="button"
                onClick={() => prev(values)}
              >
                Voltar
              </button>
              <button className="buttonNext" type="submit">
                Próximo
              </button>
            </div>
          </Styled.ContentButtons>
        </Form>
      )}
    </Formik>
  );
};
