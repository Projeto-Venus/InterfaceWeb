import * as yup from "yup";

  const schema = yup.object({
   // nome_cadastro: yup.string().min(10, "O campo deve conter no minimo 10 caracters").matches(/^[aA-zZ\s]+$/, "Nome inválido!").required("Campo Obrigatório!"),
   grau_escolar: yup.string().nullable().required('O campo não pode ser nulo!'),
   estado_civil: yup.string().nullable().required('O campo não pode ser nulo!'),
   renda_familiar: yup.string().nullable().required('O campo não pode ser nulo!'),
   profissao: yup.string().matches(/^[aA-zZ\s]+$/, "profissão inválida!").nullable().required('O campo não pode ser nulo!'),
   moradia: yup.string().nullable().required('O campo não pode ser nulo!'),
   comodos: yup.string().nullable().required('O campo não pode ser nulo!'),
   tipo_agua: yup.string().nullable().required('O campo não pode ser nulo!'),
   rede_esgoto: yup.string().nullable().required('O campo não pode ser nulo!'),
   coleta_lixo: yup.string().nullable().required('O campo não pode ser nulo!'),
  //  email: yup.string().email().required("Campo Obrigtório!"),
 
  //  data_nasc: yup.date().min(getFormatedDate('01/01/1950'), "data inválida!").max(getFormatedDate('31/12/2005'), "data inválida!").required("Campo obrigatório"),
   // naturalidade: yup.string().matches(/^[aA-zZ\s]+$/, "Nome inválido!").required("Campo Obrigatório!"),
   // endereco: yup.string().min(10, "O campo deve conter no minimo 10 caracters").matches(/^[aA-zZ\s]+$/, "Nome inválido!").required("Campo Obrigatório!"),
   //bairro: yup.string().matches(/^[aA-zZ\s]+$/, "Nome inválido!").required("Campo Obrigatório!"),
    //cidade: yup.string().matches(/^[aA-zZ\s]+$/, "Nome inválido!").required("Campo Obrigatório!"),
    //cep: yup.string().length(8, "O campo deve possuir 8 números!").matches(/^[0-9]{8}/, "CEP Inválido").required("Campo Obrigatório!")

  })

  export default schema;