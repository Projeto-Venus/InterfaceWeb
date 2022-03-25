import './login.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo-venus.png';
import {AiOutlineUser} from 'react-icons/ai';
import {BsLock} from 'react-icons/bs';
export default function Login() {
  const navigate = useNavigate();
  
  return (
    <>
    
    <div className='border-elipse'>
      </div>
    
    <div className='login'>

     
    <form className='formulario'>
      <h1>Bem Vindos</h1><br/><hr width='300px'/>
      
      <label><AiOutlineUser/></label><input  type='email' placeholder='Email'></input><br/>
      <label><BsLock/></label><input  type='password' placeholder='Senha'></input><br/>
      <button className='btnsubmit' type='submit' label='Entrar'>ENTRAR</button>
      <h3>Esqueceu a senha?</h3>
      <button className='btnnewconta'  label='Entrar' onClick={()=>navigate('/register')} >CRIAR NOVA CONTA</button>

    </form>
    </div>
    <img className='logo-login' src={Logo} alt='logo-venus' ></img>
    </>
  );
}