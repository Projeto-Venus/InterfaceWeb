import { useEffect, useState } from 'react';
import './registerlogin.css';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {api} from '../../../services/api'
import Logo from '../../../assets/logo-venus.png';
import medicafundo from '../../../assets/clinica-medica-chamada.jpg';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


export default function RegisterLoginPage() {
  const [formValues,setFormValues] = useState({});
  const navigate = useNavigate();



  const schema = yup.object({
    cpf:yup.string().length(11,"Cpf inválido!").matches(/^[0-9]{3}?[0-9]{3}?[0-9]{3}?[0-9]{2}/,"Cpf inválido!").required("Campo obrigatório!")
   
  }).required();

  const {register, handleSubmit ,formState: { errors }} = useForm({resolver:yupResolver(schema)});



  const handleInputChange =(e)=>{
    const {target} = e;

    const {name,value} = target; 
    //console.log('*handleinput*',name,value );
    setFormValues({...formValues,[name]:value});

  }

/*  useEffect(()=>{
    api.get('/users').then((response)=>{
      console.log(response.data);
    }).catch(err=>{
      console.log(err);
    })
  },[])*/


  const onSubmit = async (dadosform)=>{
 console.log(dadosform);
 const {cpf, password} = dadosform;

    await api.post('/users', {cpf, password}).then((response)=>{
      console.log(response);
    }).catch(err=>{
      console.log(err);
    })
  }

  return (
    <>
    <footer>
      <ul type="disc" >
        <li>Painel</li>
        <li>Contato</li>
        <li>Blog</li>
        <li>Entrar</li>
      </ul>
    <img src={Logo} className='logo-footer' alt='logo-venus' ></img>
    </footer>
   

   
    <img src={medicafundo} className="image-fundo" alt="img-fundo"></img>
    <div className="registerlogin">
    <h1>Cadastrar acesso</h1>
    <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>

    <div className="col-md-8 ms-3">
      <label className='form-label'>CPF</label>
      <input className="form-control" name='cpf' type="text" size='11'  {...register("cpf")} />
      <span>{errors.cpf?.message}</span>
      </div>


        <div className="col-md-8 ms-3">
      <label className='form-label'>Senha</label> 
      <input className='form-control' type="password" name="password"  size="20" maxLength="20"   {...register("password")} />
      </div>

        <div className='col-12 ms-3 gy-4 '>
        <button className='btncadastro' type='submit'>Confirmar cadastro</button>
        </div>
        </form>

          </div>

    </>
  );
}