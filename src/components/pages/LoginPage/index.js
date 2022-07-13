import './login.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Logo from '../../../assets/logo-venus.png';
import { AiOutlineUser } from 'react-icons/ai';
import { AuthContext } from '../../contexts/auth';
import { useForm } from 'react-hook-form';
import { BsLock } from 'react-icons/bs';
import { yupResolver } from '@hookform/resolvers/yup';
import Footer from '../../Footer/index';
import * as yup from "yup";

export default function LoginPage() {
  const navigate = useNavigate();

  const { login, msgerror } = useContext(AuthContext)

  const schema = yup.object({
    cpf: yup.string().length(11, "CPF inválido!").matches(/^[0-9]{3}?[0-9]{3}?[0-9]{3}?[0-9]{2}/, "CPF Incorreto!").required("Campo obrigatório!")

  }).required();

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (dadosform) => {

    console.log(dadosform);
    const { cpf, password } = dadosform;
    console.log(cpf, password);
    login(cpf, password);

  }
  return (
    <>

      <div className='border-elipse'>
      <img className='logo-login' src={Logo} alt='logo-venus' ></img>
      </div>
    
        <form className='form-login' onSubmit={handleSubmit(onSubmit)}>
          
          <h1>Bem Vindos</h1>

          <div>
            <label><AiOutlineUser /></label>
            <input type='text' placeholder='CPF'{...register("cpf")}></input><br/>
            <span>{errors.cpf?.message}</span><br/>
          </div>

          <div>
            <label><BsLock /></label>
            <input type='password' placeholder='Senha' {...register("password")}></input>
          </div>
          <span>{msgerror}</span><br/>

          <button className='btn-login' type='submit' label='Entrar'>ENTRAR</button>
          <h3 onClick={() => navigate('/redefinirsenha')}>Esqueceu a senha?</h3>
          <button className='btn-login' label='Entrar' onClick={() => navigate('/registerlogin')} >NOVA CONTA</button>

        </form>
    
     
      <Footer />
    </>
  );
}