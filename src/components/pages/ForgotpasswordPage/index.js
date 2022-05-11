import { useEffect, useState } from 'react';
import './forgotpassword.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../Header/index'

export default function ForgotpasswordPage() {
    const navigate = useNavigate();
    return(
        <>
        <Header/>
        <div className="forgotpassword">
        <h1>Redefinir Senha</h1>
        <form className="row" >
        <p>Lhe enviaremos um e-mail com mais informações sobre como redefinir sua senha</p>
            <div className='col-md-6 ms-3'>
        
            <label className='form-label'>Email</label>
            <input className="form-control" name='cpf' type="text" size='11'  />
            </div>

            <div className='col-md-4 gy-4' >
            <button className='btncadastro' type='submit'>Enviar email</button>
            </div>
        
            </form>

            </div>
        </>

    )
}