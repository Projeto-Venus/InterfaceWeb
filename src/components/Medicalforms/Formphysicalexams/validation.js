import * as yup from "yup";

  const schema = yup.object({
  pressao_arterial: yup.string().matches(/^-?\d*\.?\d*$/, "Entrada Inválido!").required("Campo Obrigatório!"),
  temperatura: yup.string().matches(/^-?\d*\.?\d*$/, "Entrada Inválido!").required("Campo Obrigatório!"),
  freq_resp: yup.string().matches(/^-?\d*\.?\d*$/, "Entrada Inválido!").required("Campo Obrigatório!"),
  freq_card: yup.string().matches(/^-?\d*\.?\d*$/, "Entrada Inválido!").required("Campo Obrigatório!"),
  peso: yup.string().matches(/^-?\d*\.?\d*$/, "Entrada Inválido!").required("Campo Obrigatório!"),
  altura: yup.string().matches(/^-?\d*\.?\d*$/, "Entrada Inválido!").required("Campo Obrigatório!"),
  perimetro_cef: yup.string().matches(/^-?\d*\.?\d*$/, "Entrada Inválido!").required("Campo Obrigatório!"),
  perimetro_toracico: yup.string().matches(/^-?\d*\.?\d*$/, "Entrada Inválido!").required("Campo Obrigatório!"),
  cintura: yup.string().matches(/^-?\d*\.?\d*$/, "Entrada Inválido!").required("Campo Obrigatório!"),
  quadril: yup.string().matches(/^-?\d*\.?\d*$/, "Entrada Inválido!").required("Campo Obrigatório!"),
 
  
  //  data_nasc: yup.date().min(getFormatedDate('01/01/1950'), "data inválida!").max(getFormatedDate('31/12/2005'), "data inválida!").required("Campo obrigatório"),
   // naturalidade: yup.string().matches(/^[aA-zZ\s]+$/, "Nome inválido!").required("Campo Obrigatório!"),
   // endereco: yup.string().min(10, "O campo deve conter no minimo 10 caracters").matches(/^[aA-zZ\s]+$/, "Nome inválido!").required("Campo Obrigatório!"),
   //bairro: yup.string().matches(/^[aA-zZ\s]+$/, "Nome inválido!").required("Campo Obrigatório!"),
    //cidade: yup.string().matches(/^[aA-zZ\s]+$/, "Nome inválido!").required("Campo Obrigatório!"),
    //cep: yup.string().length(8, "O campo deve possuir 8 números!").matches(/^[0-9]{8}/, "CEP Inválido").required("Campo Obrigatório!")

  })

  export default schema;