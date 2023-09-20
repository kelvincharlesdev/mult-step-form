import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Styled from "./styles";
import { FormDados } from "../../Utils/structure";
import { stepThreeValidationSchema } from "../../Utils/validaddeSchema";

export const StepThree = (props: {
  data: FormDados;
  next: (values: FormDados, final: boolean) => void;
  prev: (values: FormDados) => void;
}) => {
  if (props.data.hasExperience === "não") {
    props.data.experiences_attributes = [];
  }

  if (props.data.hasCompetence === "não") {
    props.data.studies_attributes = [];
  }

  const handleSubmit = (values: FormDados) => {
    props.next(values, true);
  };

  return (
    <Formik<FormDados>
      initialValues={props.data}
      onSubmit={handleSubmit}
      validationSchema={stepThreeValidationSchema}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form>
          <Styled.Title>Experiência</Styled.Title>
          {
            <>
              <Styled.Field>
                <label>Você possui experiência profissional?</label>
                <Field as="select" name="hasExperience">
                  <option value="não">Não</option>
                  <option value="sim">Sim</option>
                </Field>
              </Styled.Field>

              {values.hasExperience === "sim" && (
                <Styled.ContentExperience>
                  <h2>Experiência Profissional</h2>
                  {values.experiences_attributes.map((_, index) => (
                    <div className="content-map" key={index}>
                      <label>Nome da empresa:</label>
                      <Field
                        type="text"
                        name={`experiences_attributes[${index}].company_name`}
                      />

                      <div className="error-mesage">
                        <ErrorMessage
                          name={`experiences_attributes[${index}].company_name`}
                        />
                      </div>

                      <Styled.ExperiencePeriod>
                        <div className="content-date">
                          <label>Período (Data de início):</label>
                          <Field
                            type="date"
                            name={`experiences_attributes[${index}].start_date`}
                          />

                          <div className="error-mesage">
                            <ErrorMessage
                              name={`experiences_attributes[${index}].start_date`}
                            />
                          </div>
                        </div>
                        <div className="content-date">
                          <label>Período (Data de fim):</label>
                          <Field
                            type="date"
                            name={`experiences_attributes[${index}].end_date`}
                          />

                          <div className="error-mesage">
                            <ErrorMessage
                              name={`experiences_attributes[${index}].end_date`}
                            />
                          </div>
                        </div>
                      </Styled.ExperiencePeriod>

                      <label>Cargo:</label>
                      <Field
                        type="text"
                        name={`experiences_attributes[${index}].title`}
                      />

                      <div className="error-mesage">
                        <ErrorMessage
                          name={`experiences_attributes[${index}].title`}
                        />
                      </div>

                      <label>Função:</label>
                      <Field
                        type="text"
                        name={`experiences_attributes[${index}].function_performed`}
                      />

                      <div className="error-mesage">
                        <ErrorMessage
                          name={`experiences_attributes[${index}].function_performed`}
                        />
                      </div>

                      <Styled.ButtonRemove>
                        <button
                          className="btn"
                          type="button"
                          onClick={() => {
                            const updatedExperiences = [
                              ...values.experiences_attributes,
                            ];
                            updatedExperiences.splice(index, 1);
                            setFieldValue(
                              "experiences_attributes",
                              updatedExperiences
                            );
                          }}
                        >
                          Remover Experiência
                        </button>
                      </Styled.ButtonRemove>
                    </div>
                  ))}
                  <Styled.Button
                    type="button"
                    onClick={() =>
                      setFieldValue("experiences_attributes", [
                        ...values.experiences_attributes,
                        {
                          title: "",
                          company_name: "",
                          start_date: "",
                          end_date: "",
                          function_performed: "",
                          institution: "",
                          link: "",
                        },
                      ])
                    }
                  >
                    Adicionar Experiência
                  </Styled.Button>
                </Styled.ContentExperience>
              )}

              <Styled.Field>
                <label>Você possui formação acadêmica?</label>
                <Field as="select" name="hasCompetence">
                  <option value="não">Não</option>
                  <option value="sim">Sim</option>
                </Field>
              </Styled.Field>

              {values.hasCompetence === "sim" && (
                <Styled.ContentFormAcadmy>
                  <h2>Formação Acadêmica</h2>
                  {values.studies_attributes.map((_, index) => (
                    <div className="content-map" key={index}>
                      <Styled.Field>
                        <label htmlFor={`studies_attributes[${index}].title`}>
                          Título:
                        </label>
                        <Field
                          type="text"
                          name={`studies_attributes[${index}].title`}
                        />

                        <div className="error-mesage">
                          <ErrorMessage
                            name={`studies_attributes[${index}].title`}
                          />
                        </div>

                        <label
                          htmlFor={`studies_attributes[${index}].institution`}
                        >
                          Instituição:
                        </label>
                        <Field
                          type="text"
                          name={`studies_attributes[${index}].institution`}
                        />

                        <div className="error-mesage">
                          <ErrorMessage
                            name={`studies_attributes[${index}].institution`}
                          />
                        </div>

                        <Styled.AcademyPeriod>
                          <div className="content-date">
                            <label>Período (Data de início):</label>
                            <Field
                              type="date"
                              name={`studies_attributes[${index}].start_date`}
                            />
                            <div className="error-mesage">
                              <ErrorMessage
                                name={`studies_attributes[${index}].start_date`}
                              />
                            </div>
                          </div>

                          <div className="content-date">
                            <label>Período (Data de fim):</label>
                            <Field
                              type="date"
                              name={`studies_attributes[${index}].end_date`}
                            />

                            <div className="error-mesage">
                              <ErrorMessage
                                name={`studies_attributes[${index}].end_date`}
                              />
                            </div>
                          </div>
                        </Styled.AcademyPeriod>
                      </Styled.Field>

                      <Styled.Field>
                        <label htmlFor={`studies_attributes[${index}].link`}>
                          Link (opcional):
                        </label>
                        <Field
                          type="text"
                          name={`studies_attributes[${index}].link`}
                        />

                        <div className="error-mesage">
                          <ErrorMessage
                            name={`studies_attributes[${index}].link`}
                          />
                        </div>
                      </Styled.Field>

                      <Styled.ButtonRemove>
                        <button
                          className="btn"
                          type="button"
                          onClick={() => {
                            const updatedAcademy = [
                              ...values.studies_attributes,
                            ];
                            updatedAcademy.splice(index, 1);
                            setFieldValue("studies_attributes", updatedAcademy);
                          }}
                        >
                          Remover Formação
                        </button>
                      </Styled.ButtonRemove>
                    </div>
                  ))}
                  <Styled.Button
                    type="button"
                    onClick={() =>
                      setFieldValue("studies_attributes", [
                        ...values.studies_attributes,
                        {
                          title: "",
                          institution: "",
                          link: "",
                          start_date: "",
                          end_date: "",
                        },
                      ])
                    }
                  >
                    Adicionar Formação Acadêmica
                  </Styled.Button>
                </Styled.ContentFormAcadmy>
              )}
            </>
          }

          <Styled.ContentButtons>
            <div className="contentButtons">
              <button
                className="buttonBack"
                type="button"
                onClick={() => props.prev(values)}
              >
               Voltar
              </button>
              <button
                className="buttonSubmit"
                type="submit"
                disabled={isSubmitting}
              >
                Enviar e Baixar CV
              </button>
            </div>
          </Styled.ContentButtons>
        </Form>
      )}
    </Formik>
  );
};
