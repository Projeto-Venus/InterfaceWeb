import * as yup from "yup";

  const schema = yup.object({
    atividade_sex: yup.string().nullable().required("Campo Obrigatório!"),
    homossex: yup.string().nullable().required("Campo Obrigatório!"),
    historia_menarca: yup.string().nullable().required('O campo não pode ser nulo!'),
    historia_gestacao: yup.string().nullable().required('O campo não pode ser nulo!'),
    riscos_gravidicos: yup.string().nullable().required('O campo não pode ser nulo!'),
    historia_menopausa: yup.string().nullable().required('O campo não pode ser nulo!'),
    prevencao_ca: yup.string().nullable().required('O campo não pode ser nulo!'),

  })

  export default schema;