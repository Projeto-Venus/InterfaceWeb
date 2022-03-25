import './register.css';
import { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Logo from '../../assets/logo-venus.png';
import medicafundo from '../../assets/clinica-medica-chamada.jpg';


export default function Register() {
  const [formValues,setFormValues] = useState({});
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm();


  const handleInputChange =(e)=>{
    const {target} = e;

    const {name,value} = target; 
    //console.log('*handleinput*',name,value );
    setFormValues({...formValues,[name]:value});

  }

  useEffect(()=>{
    api.get('/getusers').then((response)=>{
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
      <form className='formularioConta' onSubmit={handleSubmit(onSubmit)}>

      <div margin-right="450px">
     <label>Nome</label><input className='inputT' type="text"  {...register("nome")} />
     </div>
     <label>Nome Social</label><input className='inputT' type="text"    {...register("nomesocial")}/>

     <div>
     <label>Email</label><input className='inputT' type="email" name="login"  {...register("login")} />
     </div>

     <div>
     <label>Nome</label><input className='inputT' type="text" name="numero_cartao" {...register("numero_cartao")}  size="20" maxLength="40"/>
     </div>

      <div className='select-raca'>
      <label>Raça</label> <select type='text'  name='raca' {...register("raca")}>
        <option value='preto'>Preto</option>
        <option value='parda' selected >Parda</option>
        <option value='branco'>Branco</option>
        </select>
        </div>

        <div className="input-senha">
     <label>Senha</label> <input className='inputT' type="password" name="senha"  size="20" maxLength="20"   {...register("senha")} />
      </div>

      <div>
      <label>CPF</label><input className='inputT' name='cpf' type="text" size='11' {...register("cpf")} />
      </div>

      <div>
     <label>Data Nascimento</label><input className='inputT'  type='date' name='datanasc'   {...register("datanasc")} />
     </div>

    <div>
    <label>Naturalidade</label> <input className='inputT' type="text" name="naturalidade"  size="20" maxLength="40"  {...register("naturalidade")} />
     </div>

     <div>
     <label>Endereço</label><input className='inputT' type="text" name="endereco"  size="20" maxLength="40"  {...register("endereco")}/>
     </div>

     <div>
     <label>Bairro</label><input className='inputT' type="text" name="bairro"  size="20" maxLength="40"  {...register("bairro")} />
     </div>

      <div>
     <label>Cidade</label><input className='inputT' type="text" name="cidade"  size="20" maxLength="40"  {...register("cidade")} />
     </div>

     <div>
     <label>CEP</label><input className='inputT' type="text" name="cep"  size="20" maxLength="40"  {...register("cep")} />
     </div>

     <div >
      <label>UF</label> <select className='select-estado' type='text'  name='estado' {...register("estado")}>
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
        <button className='btncadastro' type='submit'>Confirmar cadastro</button>
        </form>
       
    </div>

    </>
  );
}