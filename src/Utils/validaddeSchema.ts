import * as Yup from "yup";

export const stepOneValidationSchema = Yup.object({
    name: Yup.string()
      .min(4, "Nome deve ter no minimo 4 carcacteres")
      .required("Nome é um campo obrigatorio"),
    email: Yup.string()
      .test("email", "Formato de email inválido", (value) => {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value || "");
      })
      .required("Campo obrigatório"),
    birthdate: Yup.date()
      .max(new Date(), "A data de nascimento não pode estar no futuro")
      .required("A data de nascimento é obrigatória")
      .typeError("Por favor, insira uma data válida"),
    phone: Yup.string()
      .matches(
        /^\d{11}$/,
        "O número de telefone deve conter exatamente 10 dígitos"
      )
      .required("O número de telefone é obrigatório"),
    bio: Yup.string()
      .required("O campo de comentário é obrigatório")
      .min(50, "O comentário deve ter pelo menos 50 caracteres"),
    links: Yup.array()
      .of(Yup.string().url("Insira um URL válido"))
      .transform((originalValue) => {
        if (originalValue === null || originalValue === "") {
          return null;
        }
        if (typeof originalValue === "string") {
          return [originalValue];
        }
  
        return originalValue;
      }),
  });


  export const stepTwoValidationSchema = Yup.object({
    role: Yup.string()
      .required("Selecione um cargo válido.")
      .oneOf(
        ["frontend", "backend", "fullstack", "mobile", "designer", "qa"],
        "Selecione um cargo válido."
      ),
      tech_ids: Yup.array()
      .of(Yup.string())
      .min(1, "Selecione pelo menos uma tecnologia válida."),
    softskill_ids: Yup.array()
      .min(3, "Selecione exatamente 3 softskills.")
      .max(3, "Selecione exatamente 3 softskills."),
    ability_ids: Yup.array()
      .required("Selecione pelo menos uma habilidade.")
      .min(1, "Selecione pelo menos uma habilidade."),
  });
  

  export const stepThreeValidationSchema = Yup.object().shape({
    experiences_attributes: Yup.array().when("hasExperience", {
      is: "sim",
      then: (schema) => schema.of(
        Yup.object().shape({
          company_name: Yup.string().required("Nome da empresa obrigatório"),
          start_date: Yup
          .date()
          .max(new Date(), "A data de nascimento não pode estar no futuro"),
          end_date: Yup.date().min(Yup.ref('start_date'), 'A data final não pode ser anterior à data inicial'),
          title: Yup.string().required("Campo obrigatório"),
          function_performed: Yup.string().required("Função  obrigatória"),
        })
      ),
   
    }),
    studies_attributes: Yup.array().when("hasCompetence", {
      is: "sim",
      then: (schema) => schema.of(
        Yup.object().shape({
          title: Yup.string().required("Título obrigatório"),
          institution: Yup.string().required("Instituição obrigatória"),
          start_date: Yup.date().max(new Date(), "A data de nascimento não pode estar no futuro"),
          end_date: Yup.date()
          .min(Yup.ref('start_date'), 'A data final não pode ser anterior à data inicial'),
          link: Yup.string().url("URL inválida"),
        })
      ),
  
    }),
  });


