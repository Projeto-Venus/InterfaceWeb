
import './headerhome.css'
import Logo from '../../assets/logo-venus.png'

export default function Headerhome(){
    return(
        <>
        <header className='header-home'>
            <ul type="disc">
                <li>Painel</li>
                <li>Agenda</li>
                <li>Pacientes</li>
                 <li>Outros</li>
            </ul>
             <img src={Logo} className='logo-header' alt='logo-venus' ></img>
        </header>
        </>
    )
}