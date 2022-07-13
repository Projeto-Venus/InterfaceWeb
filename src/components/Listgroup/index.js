
import './listgroup.css';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { GiTooth } from 'react-icons/gi';
import { ImProfile } from 'react-icons/im'
import { GrLocation } from 'react-icons/gr'
import { ImNewspaper } from 'react-icons/im'
import { FaUserEdit } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import {BsLayoutTextWindow} from 'react-icons/bs'
import Logo from '../../assets/logo-venus.png'

export default function Listgroup() {

    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }
    return (

        <div className='content-listgroup'>
            <img className='logo-listhome' src={Logo} />
            <div className="list-group" id="list-tab" role="tablist">

                <a className="list-group-item list-group-item-action active" id="list-home-list"
                    data-bs-toggle="list" href="/home" role="tab" aria-controls="list-home">
                    <AiOutlineHome /> &nbsp;Home
                </a>
                <a className="list-group-item list-group-item-action" id="list-dadospessoais-list"
                    data-bs-toggle="list" href="/home/dadospessoais" role="tab" aria-controls="list-profile">
                    <FaRegUser /> &nbsp;Identificação
                </a>
                <a className="list-group-item list-group-item-action" id="list-dadoscomplementares-list"
                    data-bs-toggle="list" href="/home/dadoscomplementares"
                    role="tab" aria-controls="list-messages"> <BsLayoutTextWindow/> &nbsp;Registros</a>
                <a className="list-group-item list-group-item-action" id="list-dadoscomplementares-list"
                    data-bs-toggle="list" href="/home/prontuario"
                    role="tab" aria-controls="list-messages"> <ImProfile /> &nbsp;Prontuário</a>
                <a className="list-group-item list-group-item-action" id="list-settings-list"
                    data-bs-toggle="list" href="/home/ficha-odonto" role="tab" aria-controls="list-settings">
                    <GiTooth /> &nbsp;Ficha Odontológica</a>
                <a className="list-group-item list-group-item-action" id="list-settings-list"
                    data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">
                    <GrLocation />  &nbsp;Agenda</a>
                <a className="list-group-item list-group-item-action" id="list-settings-list"
                    data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">
                    <FaUserEdit /> &nbsp;Meu Perfil</a>
                <a className="list-group-item list-group-item-action" id="list-settings-list"
                    data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings" >
                    <ImNewspaper /> &nbsp;Notícias</a>
                <a className="list-group-item list-group-item-action" id="list-settings-list"
                    style={{ backgroundColor: 'blueviolet' }}
                    data-bs-toggle="list" role="tab" onClick={handleLogout} aria-controls="list-settings">
                    <BiLogOut /> &nbsp;Sair</a>
            </div>
        </div>

    )
}