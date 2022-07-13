
import './headerhome.css'

import { HiUserCircle } from 'react-icons/hi';

export default function Headerhome() {
    return (
        <>
            <nav className="content-nav">
                    <div id='user-id'>
                    <h6>Olá, Tassio Neves Santos</h6>
                    <p>CPF: 0756910532 <br/> CNS: 075694343410532</p>
                    
                    </div>
                   
                    <div id='icons-header'>
                        <h1><HiUserCircle /></h1>
                    </div>
            </nav>
        </>
    )
}