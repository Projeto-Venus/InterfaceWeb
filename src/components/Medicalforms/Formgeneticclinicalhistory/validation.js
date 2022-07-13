import * as yup from "yup";

  const schema = yup.object({
 
  menarca: yup.string().matches(/^-?\d*\.?\d*$/, "Entrada Inválido!").required("Campo Obrigatório!"),
  temperatura: yup.string().matches(/^-?\d*\.?\d*$/, "Entrada Inválido!").required("Campo Obrigatório!"),
  menopausa: yup.string().matches(/^-?\d*\.?\d*$/, "Entrada Inválido!").required("Campo Obrigatório!"),
  peso: yup.string().matches(/^-?\d*\.?\d*$/, "Entrada Inválido!").required("Campo Obrigatório!"),
  altura: yup.string().matches(/^-?\d*\.?\d*$/, "Entrada Inválido!").required("Campo Obrigatório!"),
  perimetro_cef: yup.string().matches(/^-?\d*\.?\d*$/, "Entrada Inválido!").required("Campo Obrigatório!"),
  perimetro_toracico: yup.string().matches(/^-?\d*\.?\d*$/, "Entrada Inválido!").required("Campo Obrigatório!"),
  cintura: yup.string().matches(/^-?\d*\.?\d*$/, "Entrada Inválido!").required("Campo Obrigatório!"),
  quadril: yup.string().matches(/^-?\d*\.?\d*$/, "Entrada Inválido!").required("Campo Obrigatório!"),
 
  })

  export default schema;