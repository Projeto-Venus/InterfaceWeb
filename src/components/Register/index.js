import './register.css';
import { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Logo from '../../assets/logo-venus.png';
import medicafundo from '../../assets/clinica-medica-chamada.jpg';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


export default function Register() {
  const [formValues,setFormValues] = useState({});
  const navigate = useNavigate();

  const getFormatedDate = (currentDate) => {
    return currentDate.split('/').reverse().join('-');
  }

  const schema = yup.object({
    nome: yup.string().min(10,"O campo deve conter no minimo 10 caracters").matches(/^[aA-zZ\s]+$/,"Nome inválido!").required("Campo Obrigatório!"),
    nomesocial: yup.string().min(4,"O campo deve conter no minimo 4 caracters").required("Campo Obrigtório!"),
    numero_cartao: yup.string().length(8,"O campo deve conter 8 números!").matches(/^[0-9]{8}/,"Número Inválido").required("Campo Obrigtório!"),
    datanasc:yup.date().min(getFormatedDate('01/01/1950'),"data inválida!").max(getFormatedDate('31/12/2005'), "data inválida!").required("Campo obrigatório"),
    cpf:yup.string().length(11,"Cpf inválido!").matches(/^[0-9]{3}?[0-9]{3}?[0-9]{3}?[0-9]{2}/,"Cpf inválido!").required("Campo obrigatório!")
   
  }).required();

  const {register, handleSubmit ,formState: { errors }} = useForm({resolver:yupResolver(schema)});



  const handleInputChange =(e)=>{
    const {target} = e;

    const {name,value} = target; 
    //console.log('*handleinput*',name,value );
    setFormValues({...formValues,[name]:value});

  }

  useEffect(()=>{
    api.get('/users').then((response)=>{
      console.log(response.data);
    }).catch(err=>{
      console.log(err);
    })
  },[])

  

  /*const handleRegister = data=>{
    
    //navigate('/');
    //console.log(data.FormData);
    console.log(data);
    axios.post("http://localhost:3001",{
      nome_cadastro: formValues.nome,
      nome_social_cadastro:formValues.nomesocial,
      login:formValues.login,
      senha:formValues.senha,
      num_cartao_nacional: formValues.numero_cartao,
      cpf: formValues.cpf,
      data_nascimento:formValues.datanasc,
      raca: formValues.raca,
      naturalidade:formValues.naturalidade,
      endereco:formValues.endereco,
      bairro: formValues.bairro,
      cidade: formValues.cidade,
      estado: formValues.estado,
      cep: formValues.cep,

    }).then((response)=>{
      
    })
  }*/

  const  onSubmit =(dados)=>{
 console.log(dados);

    //console.log('Formulario:', formValues);
    api.post('/users', {dados}).then((response)=>{
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
    <input className='form-control' type="text" inputMode="text"  {...register("nome")} />
    <span>{errors.nome?.message}</span>
    </div>

    <div className="col-md-5 ms-3">
    <label className="form-label">Nome Social</label>
    <input className="form-control" type="text"    {...register("nomesocial")}/>
    <span>{errors.nomesocial?.message}</span>
    </div>

    <div className='col-md-6 offset-md-1'>
    <label className='form-label'>Email</label>
    <input className="form-control" type="email" name="login"  {...register("login")} />
    </div>

    <div className="col-md-6 offset-md-1">
    <label className='form-label'>Número CSN</label>
    <input className="form-control" type="text" name="numero_cartao" inputMode="numeric" {...register("numero_cartao")}  size="20" maxLength="40"/>
    <span>{errors.numero_cartao?.message}</span>
    </div>

      <div className="col-md-4 ms-3" >
      <label className='form-label'>Raça</label> 
      <select className='form-select' type='text'  name='raca' {...register("raca")}>
        <option value='preto'>Preto</option>
        <option value='parda' selected >Parda</option>
        <option value='branco'>Branco</option>
        </select>
        </div>

        <div className="col-md-6 offset-md-1">
      <label className='form-label'>Senha</label> 
      <input className='form-control' type="password" name="senha"  size="20" maxLength="20"   {...register("senha")} />
      </div>

      <div className="col-md-4 ms-3">
      <label className='form-label'>CPF</label>
      <input className="form-control" name='cpf' type="text" size='11'  {...register("cpf", {pattern:"^[0-9]{3}?[0-9]{3}?[0-9]{3}?[0-9]{2}"})} />
      <span>{errors.cpf?.message}</span>
      </div>

      <div className="col-md-4 offset-md-1">
      <label className='form-label'>Data Nascimento</label>
      <input className='form-control'  type='date' name='datanasc'  {...register("datanasc")} />
      <span>{errors.datanasc?.message}</span>
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
      <select className='form-select' type='text'  name='estado' {...register("estado")}>
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