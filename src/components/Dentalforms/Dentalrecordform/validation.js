import * as yup from "yup";

  const schema = yup.object({
    prob_sistemico: yup.string().nullable().required("Campo Obrigatório!"),
    medicacao: yup.string().nullable().required("Campo Obrigatório!"),
    hipersensibilidade: yup.string().nullable().required('O campo não pode ser nulo!'),
    hipersen_anestesico: yup.string().nullable().required('O campo não pode ser nulo!'),
    hemorragia: yup.string().nullable().required('O campo não pode ser nulo!'),

  })

  export default schema;