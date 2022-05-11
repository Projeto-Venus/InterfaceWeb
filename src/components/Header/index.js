
import Logo from '../../assets/logo-venus.png';
import { useNavigate } from 'react-router-dom';
import './header.css'

export default function Header(){
    const navigate = useNavigate();
    return(
        <>
         <header className='header-main'>
        <ul type='disc'>
            <li>Painel</li>
            <li>Contato</li>
            <li>Blog</li>
            <li onClick={()=>navigate('/')}>Entrar</li>
       </ul>
        <img src={Logo} className='logo-header' alt='logo-venus' ></img>
         </header>
        </>
    )
}