import React, { useState, useEffect } from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";

import * as Styled from "./styles";
import { FormDados, IResponse } from "../../Utils/structure";
import { api } from "../../service/api";
import { ErrorMessageSpan } from "../ErrorMessage";
import { stepOneValidationSchema } from "../../Utils/validaddeSchema";

export interface IState extends IResponse {
  name: string;
  state_id: number;
}

interface ICity extends IResponse {
  name: string;
  acronym: string;
}

export interface StepOneProps {
  data: FormDados;
  next: (values: Partial<FormDados>) => void;
}

export const StepOne: React.FC<StepOneProps> = ({ data, next }) => {
  const [cities, setCities] = useState<ICity[] | undefined>();
  const [states, setStates] = useState<IState[] | undefined>();

  const handleSubmit = (values: FormDados) => {
    next(values);
  };

  useEffect(() => {
    const fetchState = async () => {
      try {
        const responseState = await api.get("/states");
        setStates(responseState.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchState();
  }, []);

  const onChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    setFieldValue: FormikHelpers<FormDados>["setFieldValue"],
    setCities: React.Dispatch<React.SetStateAction<ICity[] | undefined>>
  ) => {
    const selectedStateId = e.target.value;

    setFieldValue("state", selectedStateId);
    const fetchCities = async () => {
      try {
        if (selectedStateId) {
          const response = await api.get(`/states/${selectedStateId}/cities`);
          setCities(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCities();
  };

  return (
    <Formik
      validationSchema={stepOneValidationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form>
          <Styled.Title> Dados Pessoais</Styled.Title>
          <Styled.Field>
            <label htmlFor="name">Nome: </label>
            <Field type="text" name="name" placeholder="Digite seu nome" />
            <ErrorMessageSpan message={touched.name && errors.name} />
          </Styled.Field>
          <Styled.Field>
            <label htmlFor="email">Email: </label>
            <Field type="email" name="email" placeholder="Digite seu email" />
            <ErrorMessageSpan message={touched.email && errors.email} />
          </Styled.Field>
          <Styled.Field>
            <label htmlFor="birthdate">Data de Nascimento: </label>
            <Field
              type="date"
              name="birthdate"
              placeholder="Data de Nascimento"
            />
            <ErrorMessageSpan message={touched.birthdate && errors.birthdate} />
          </Styled.Field>
          <Styled.Field>
            <label htmlFor="phone">Telefone: </label>
            <Field
              type="number"
              name="phone"
              placeholder="Insira seu telefone"
            />
            <ErrorMessageSpan message={touched.phone && errors.phone} />
          </Styled.Field>
          <Styled.Field>
            <label htmlFor="bio">Bio: </label>
            <Field
              as="textarea"
              name="bio"
              placeholder="Digite sua bio"
              minLength="50"
            />
            <ErrorMessageSpan message={touched.bio && errors.bio} />
          </Styled.Field>
          <Styled.Field>
            <label htmlFor="links">Links: </label>
            <Field type="text" name="links" placeholder="Insira seus links" />
            <ErrorMessageSpan message={touched.links && errors.links} />
          </Styled.Field>
          <Styled.Field>
            <label htmlFor="state">Selecione um estado:</label>
            <Field
              as="select"
              name="state"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                onChange(e, setFieldValue, setCities)
              }
              disabled={!states}
            >
              <option value="" disabled>
                Selecione um estado
              </option>
              {states
                ? states.map((state: IState) => (
                    <option key={state.id} value={state.id}>
                      {state.name}
                    </option>
                  ))
                : null}
            </Field>
            <ErrorMessageSpan message={touched.states && errors.states} />
          </Styled.Field>
          <Styled.Field>
            <label htmlFor="city">Cidade:</label>
            <Field as="select" name="city_id" disabled={!cities}>
              <option value="" disabled>
                Selecione uma cidade
              </option>
              {cities
                ? cities.map((city: ICity) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))
                : null}
            </Field>
            <ErrorMessageSpan message={touched.city_id && errors.city_id} />
          </Styled.Field>

          <Styled.ContentButtons>
            <div className="contentButtons">
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
