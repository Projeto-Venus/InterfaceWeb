import * as yup from "yup";

const getFormatedDate = (currentDate) => {
    return currentDate.split('/').reverse().join('-');
  }


  const schema = yup.object({
    nome_cadastro: yup.string().min(10, "O campo deve conter no minimo 10 caracters").matches(/^[aA-zZ\s]+$/, "Nome inválido!").required("Campo Obrigatório!"),
    nome_social_cad: yup.string().min(4, "O campo deve conter no minimo 4 caracters").required("Campo Obrigtório!"),
    email: yup.string().email().required("Campo Obrigtório!"),
    num_cartao: yup.string().length(8, "O campo deve conter 8 números!").matches(/^[0-9]{8}/, "Número Inválido").required("Campo Obrigatório!"),
    data_nasc: yup.date().min(getFormatedDate('01/01/1950'), "data inválida!").max(getFormatedDate('31/12/2005'), "data inválida!").required("Campo obrigatório"),
    naturalidade: yup.string().matches(/^[aA-zZ\s]+$/, "Nome inválido!").required("Campo Obrigatório!"),
    endereco: yup.string().min(10, "O campo deve conter no minimo 10 caracters").matches(/^[aA-zZ\s]+$/, "Nome inválido!").required("Campo Obrigatório!"),
    bairro: yup.string().matches(/^[aA-zZ\s]+$/, "Nome inválido!").required("Campo Obrigatório!"),
    cidade: yup.string().matches(/^[aA-zZ\s]+$/, "Nome inválido!").required("Campo Obrigatório!"),
    cep: yup.string().length(8, "O campo deve possuir 8 números!").matches(/^[0-9]{8}/, "CEP Inválido").required("Campo Obrigatório!"),

  }).required();

  export default schema;