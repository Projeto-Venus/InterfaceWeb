import { useEffect, useState } from 'react';
import './registerlogin.css';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {api} from '../../../services/api'
import medicafundo from '../../../assets/clinica-medica-chamada.jpg';
import Header from '../../Header/index'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Footer from '../../Footer';


export default function RegisterLoginPage() {
  //const [formValues,setFormValues] = useState({});
  const [formAccepted, setFormaccepted ] = useState(false);
  const navigate = useNavigate();



  const schema = yup.object({
    cpf:yup.string().length(11,"CPF inválido!").matches(/^[0-9]{3}?[0-9]{3}?[0-9]{3}?[0-9]{2}/,"CPF inválido!").required("Campo obrigatório!"),
    password:yup.string().min(8, "A senha deve conter no mínimo 8 caracteres").required("Campo obrigatório!"),
   
  }).required();

  const {register, handleSubmit ,formState: { errors }} = useForm({resolver:yupResolver(schema)});



 /* const handleInputChange =(e)=>{
    const {target} = e;

    const {name,value} = target; 
    //console.log('*handleinput*',name,value );
    setFormValues({...formValues,[name]:value});

  }*/

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
      setFormaccepted(true);
      console.log(response);
    }).catch(err=>{
      setFormaccepted(false);
      console.log(err);
    })
  }

  return (
    <>
   <Header/>
    <img src={medicafundo} className="image-fundo" alt="img-fundo"></img>
    <div className="registerlogin">
    {formAccepted ? 
    (<div className='formaccepted'>
      <h2>Cadastro realizado com Sucesso!</h2>
      <button className='btn-login' label='Home' onClick={()=>navigate('/')} >Voltar</button>
    </div>)
    
    :(<form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
      <h1>Cadastrar acesso</h1>
    <div className="col-md-8 ms-3">
      <label className='form-label'>CPF</label>
      <input className="form-control" name='cpf' type="text" size='11'  {...register("cpf")} />
      <span>{errors.cpf?.message}</span>
      </div>


        <div className="col-md-8 ms-3">
      <label className='form-label'>Senha</label> 
      <input className='form-control' type="password" name="password"  size="20" maxLength="20"   {...register("password")} />
      <span>{errors.password?.message}</span>
      </div>

        <div className='col-12 ms-3 gy-4 '>
        <button className='btn-login' type='submit'>Confirmar cadastro</button>
        </div>
        </form>)}

          </div>
        <Footer/>
    </>
  );
}