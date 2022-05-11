
import './listgroup.css';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth';
import { useNavigate } from 'react-router-dom';


export default function Listgroup() {

    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }
    return (
        <>
            <div className="list-group col-md-2">
                <button type="button"
                    onClick={() => navigate('/home/dadospessoais')}
                    className="list-group-item list-group-item-action">Dados Pessoais</button>
                <button type="button" onClick={() => navigate('/home/dadoscomplementares')} className="list-group-item list-group-item-action">
                    Dados Complementares
                </button>
                <button type="button" className="list-group-item list-group-item-action">
                    Relátorios
                </button>
                <button type="button" className="list-group-item list-group-item-action">
                    Dashboard
                </button>
                <button type="button" className="list-group-item list-group-item-action">
                    Conta
                </button>
                <button className='btn-logout' onClick={handleLogout}>Sair</button>

            </div>
        </>
    )
}