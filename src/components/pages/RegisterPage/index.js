import './register.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../services/api'
import { yupResolver } from '@hookform/resolvers/yup';
import Headerhome from '../../Headerhome';
import * as yup from "yup";
import Footer from '../../Footer';
import Listgroup from '../../Listgroup';


export default function EditregisterPage() {
  const [formValues, setFormValues] = useState({});
  const [formAcept, setFormacept] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user'));
    const user_id = user.id;

    api.defaults.headers.Authorization = `Bearer ${token}`

    api.get(`/users/${user_id}/register`).then(response => {
      console.log(response)
      setFormValues({ ...response.data[0] });
      console.log(formValues)


    }).catch(err => {
      console.log(err)
    })

  }, [])

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
    cep: yup.string().length(8, "O campo deve possuir 8 números!").matches(/^[0-9]{8}/, "CEP Inválido").required("Campo Obrigatório!")

  }).required();

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({ resolver: yupResolver(schema) });
  console.log(formValues);


  /*const handleInputChange = (e) => {
    const { target } = e;

    const { name, value } = target;
    //console.log('*handleinput*',name,value );
    //setFormValues({...formValues,[name]:value});

  }*/

  const onSubmit = async (dataform) => {

    console.log(dataform);

    const { nome_cadastro, nome_social_cad, email, num_cartao, data_nasc,
      raca, naturalidade, endereco, bairro, cidade,
      estado, cep } = dataform;

    const token = localStorage.getItem('token')
    const id = formValues.id;
    console.log(id)

    api.defaults.headers.Authorization = `Bearer ${token}`

    //console.log('Formulario:', formValues);
    await api.put(`/users/${id}/register`, {
      nome_cadastro, nome_social_cad, email, num_cartao, data_nasc,
      raca, naturalidade, endereco, bairro, cidade,
      estado, cep
    }).then(response => {
      setFormacept(true);
      console.log(response);
    }).catch(err => {
      console.log(err);
    })

  }


  return (
    <>
      <Headerhome />
      <Listgroup/>

      <div className="register">

        <h1>DADOS PESSOAIS</h1>
        {formAcept ? (<div className='formaccepted'><h2>Registro atualizado com Sucesso!</h2>
          <button className='btn-login' label='Home' onClick={() => navigate('/home')} >Voltar</button>
        </div>) : (

          <form className="row g-2" onSubmit={handleSubmit(onSubmit)}>

            <div className="col-md-5 offset-md-1">
              <label className="form-label">Nome</label>
              <input className='form-control' type="text" inputMode="text" name='nome_cadastro' {...register("nome_cadastro")} />
              {setValue('nome_cadastro', formValues.nome_cadastro)}
              <span>{errors.nome_cadastro?.message}</span>
            </div>

            <div className="col-md-5 ms-3">
              <label className="form-label">Nome Social</label>
              <input className="form-control" type="text" name='nome_social_cad'    {...register("nome_social_cad")} />
              {setValue('nome_social_cad', formValues.nome_social_cad)}
              <span>{errors.nome_social_cad?.message}</span>
            </div>

            <div className='col-md-6 offset-md-1'>
              <label className='form-label'>Email</label>
              <input className="form-control" type="email" name="email"  {...register("email")} />
              {setValue('email', formValues.email)}
            </div>

            <div className="col-md-6 offset-md-1">
              <label className='form-label'>Número CSN</label>
              <input className="form-control" type="text" name="num_cartao" inputMode="numeric" {...register("num_cartao")} />
              {setValue('num_cartao', formValues.num_cartao)}
              <span>{errors.num_cartao?.message}</span>
            </div>

            <div className="col-md-4 ms-3" >
              <label className='form-label'>Raça</label>
              <select className='form-select' type='text' name='raca' {...register("raca")}>
                <option value='preto'>Preto</option>
                <option value='parda'  >Parda</option>
                <option value='branco'>Branco</option>
              </select>
              {setValue('raca', formValues.raca)}
            </div>

            <div className="col-md-4 offset-md-1">
              <label className='form-label'>Data Nascimento</label>
              <input className='form-control' type='date' name='data_nasc'  {...register("data_nasc")} />
              {setValue('data_nasc', formValues.data_nasc)}
              <span>{errors.data_nasc?.message}</span>
            </div>

            <div className='col-md-4'>
              <label className='form-label'>Naturalidade</label>
              <input className='form-control' type="text" name="naturalidade"  {...register("naturalidade")} />
              {setValue('naturalidade', formValues.naturalidade)}
              <span>{errors.naturalidade?.message}</span>
            </div>

            <div className='col-md-10 offset-md-1'>
              <label className='form-label'>Endereço</label>
              <input className='form-control' type="text" name="endereco"   {...register("endereco")} />
              {setValue('endereco', formValues.endereco)}
              <span>{errors.endereco?.message}</span>
            </div>

            <div className='col-md-6 offset-md-1'>
              <label className='form-label'>Bairro</label><input className='form-control' type="text" name="bairro"   {...register("bairro")} />
              {setValue('bairro', formValues.bairro)}
              <span>{errors.bairro?.message}</span>
            </div>

            <div className="col-md-4 ms-1" >
              <label className='form-label'>Cidade</label><input className='form-control' type="text" name="cidade"    {...register("cidade")} />
              {setValue('cidade', formValues.cidade)}
              <span>{errors.cidade?.message}</span>
            </div>

            <div className='col-md-4 offset-md-1'>
              <label className='form-label'>CEP</label><input className='form-control' type="text" name="cep"  {...register("cep")} />
              {setValue('cep', formValues.cep)}
              <span>{errors.cep?.message}</span>
            </div>

            <div className="col-md-2  offset-md-2" >
              <label className='form-label'>UF</label>
              <select className='form-select' type='text' name='estado' {...register("estado")}>
                <option value="AC" >AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </select>
              {setValue('estado', formValues.estado)}
            </div>

            <div className='col-12 offset-md-1 gy-4 '>
              <button className='btncadastro' type='submit'>Confirmar cadastro</button>
            </div>
          </form>)}

      </div>
      <Footer />
    </>
  );
}