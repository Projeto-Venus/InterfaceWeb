
import React,{ useContext } from 'react';
import { useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const {authenticated, logout} = useContext(AuthContext)

    const handleLogout = ()=>{
        logout();
    }

    const navigate = useNavigate();
    return(
        <>
        <h1>HomePage</h1>
        <button onClick={()=>navigate('/home/register')}>Registrar dados pessoais</button>
        <button onClick={()=>navigate('/home/editregister')}>Editar dados pessoais</button>
        <p>{String(authenticated)}</p>
        <button onClick={handleLogout}>Logout</button>
        </>

    )
}