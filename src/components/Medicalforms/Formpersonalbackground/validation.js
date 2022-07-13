import * as yup from "yup";

  const schema = yup.object({
   // nome_cadastro: yup.string().min(10, "O campo deve conter no minimo 10 caracters").matches(/^[aA-zZ\s]+$/, "Nome inválido!").required("Campo Obrigatório!"),
   alergia: yup.string().nullable().required('O campo não pode ser nulo!'),
   medicamentos: yup.string().nullable().required('O campo não pode ser nulo!'),

  })

  export default schema;