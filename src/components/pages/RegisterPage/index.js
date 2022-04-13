import './register.css';
import { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {api} from '../../../services/api'
import Logo from '../../../assets/logo-venus.png';
import medicafundo from '../../../assets/clinica-medica-chamada.jpg';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


export default function RegisterPage() {
  const [formValues,setFormValues] = useState({});
  const navigate = useNavigate();

  const getFormatedDate = (currentDate) => {
    return currentDate.split('/').reverse().join('-');
  }

  const schema = yup.object({
    nome_cadastro: yup.string().min(10,"O campo deve conter no minimo 10 caracters").matches(/^[aA-zZ\s]+$/,"Nome inválido!").required("Campo Obrigatório!"),
    nome_social_cad: yup.string().min(4,"O campo deve conter no minimo 4 caracters").required("Campo Obrigtório!"),
    email:yup.string().email().required("Campo Obrigtório!"),
    num_cartao: yup.string().length(8,"O campo deve conter 8 números!").matches(/^[0-9]{8}/,"Número Inválido").required("Campo Obrigatório!"),
    data_nasc:yup.date().min(getFormatedDate('01/01/1950'),"data inválida!").max(getFormatedDate('31/12/2005'), "data inválida!").required("Campo obrigatório"),
    cep:yup.string().length(8,"O campo deve possuir 8 números!").matches(/^[0-9]{8}/,"CEP Inválido").required("Campo Obrigatório!")
  
  }).required();

  const {register, handleSubmit ,formState: { errors }} = useForm({resolver:yupResolver(schema)});



  const handleInputChange =(e)=>{
    const {target} = e;

    const {name,value} = target; 
    //console.log('*handleinput*',name,value );
    setFormValues({...formValues,[name]:value});

  }

 /* useEffect(()=>{
    api.get('/users').then((response)=>{
      console.log(response.data);
    }).catch(err=>{
      console.log(err);
    })
  },[])*/

  const  onSubmit = async(dataform)=>{
 
 const {nome_cadastro, nome_social_cad, email, num_cartao, data_nasc,  
  raca,naturalidade, endereco, bairro, cidade,
estado, cep} = dataform;
console.log(dataform)

const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user'));
    const user_id = user.id;
    console.log(user_id)
    api.defaults.headers.Authorization = `Bearer ${token}`
    //console.log('Formulario:', formValues);
   await api.post(`/users/${user_id}/register`, {nome_cadastro, nome_social_cad, email, num_cartao, data_nasc,  
    raca,naturalidade, endereco, bairro, cidade,
estado, cep}).then(response=>{
      console.log(response);
    }).catch(err=>{
      console.log(err);
    })
    
  }

  return (
    <>
    <footer>
      <ul type='disc'>
        <li>Painel</li>
        <li>Contato</li>
        <li>Blog</li>
        <li>Entrar</li>
      </ul>
    <img src={Logo} className='logo-footer' alt='logo-venus' ></img>
    </footer>
   

   
    <img src={medicafundo} className="image-fundo" alt="img-fundo"></img>
    <div className="register">
    <h1>DADOS PESSOAIS</h1>
    <form className="row g-2" onSubmit={handleSubmit(onSubmit)}>

    <div className="col-md-5 offset-md-1">
    <label className="form-label">Nome</label>
    <input className='form-control' type="text" inputMode="text"  {...register("nome_cadastro")} />
    <span>{errors.nome_cadastro?.message}</span>
    </div>

    <div className="col-md-5 ms-3">
    <label className="form-label">Nome Social</label>
    <input className="form-control" type="text"    {...register("nome_social_cad")}/>
    <span>{errors.nome_social_cad?.message}</span>
    </div>

    <div className='col-md-6 offset-md-1'>
    <label className='form-label'>Email</label>
    <input className="form-control" type="email" name="email"  {...register("email")} />
    <span>{errors.email?.message}</span>
    </div>

    <div className="col-md-6 offset-md-1">
    <label className='form-label'>Número CSN</label>
    <input className="form-control" type="text" name="num_cartao" inputMode="numeric" {...register("num_cartao")}  size="20" maxLength="40"/>
    <span>{errors.num_cartao?.message}</span>
    </div>

      <div className="col-md-4 ms-3" >
      <label className='form-label'>Raça</label> 
      <select className='form-select' type='text'  name='raca' {...register("raca")}>
        <option value='preto'>Preto</option>
        <option value='parda' selected >Parda</option>
        <option value='branco'>Branco</option>
        </select>
        </div>

      <div className="col-md-4 offset-md-1">
      <label className='form-label'>Data Nascimento</label>
      <input className='form-control'  type='date' name='data_nasc'  {...register("data_nasc")} />
      <span>{errors.data_nasc?.message}</span>
      </div>

      <div className='col-md-4'>
      <label className='form-label'>Naturalidade</label> 
      <input className='form-control' type="text" name="naturalidade"  size="20" maxLength="40"  {...register("naturalidade")} />
      </div>

      <div className='col-md-10 offset-md-1'>
      <label className='form-label'>Endereço</label>
      <input className='form-control' type="text" name="endereco"  size="20" maxLength="40"  {...register("endereco")}/>
      </div>

      <div className='col-md-6 offset-md-1'>
      <label className='form-label'>Bairro</label><input className='form-control' type="text" name="bairro"  size="20" maxLength="40"  {...register("bairro")} />
      </div>

      <div className="col-md-4 ms-1" >
      <label className='form-label'>Cidade</label><input className='form-control' type="text" name="cidade"  size="20" maxLength="40"  {...register("cidade")} />
      </div>

      <div className='col-md-4 offset-md-1'>
      <label className='form-label'>CEP</label><input className='form-control' type="text" name="cep"  size="20" maxLength="40"  {...register("cep")} />
      </div>

      <div className="col-md-2  offset-md-2" >
      <label className='form-label'>UF</label> 
      <select className='form-select' type='text'  name='estado'  {...register("estado")}>
        <option value='BA' selected >BA</option>
        <option value='SP'>SP</option>
        <option value='RJ'>RJ</option>
        <option value='AM'>AM</option>
        <option value='DF'>DF</option>
        <option value='TO'>TO</option>
        <option value='PB'>PB</option>
        <option value='SC'>SC</option>
        <option value='MT'>MT</option>
        <option value='MG'>MG</option>
        <option value='SC'>SC</option>
        </select>
        </div>
       
        <div className='col-12 offset-md-1 gy-4 '>
        <button className='btncadastro' type='submit'>Confirmar cadastro</button>
        </div>
        </form>

          </div>

    </>
  );
}