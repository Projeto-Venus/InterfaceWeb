import { useEffect, useState } from 'react';
import './forgotpassword.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../Header/index'

export default function ForgotpasswordPage() {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <div className="forgotpassword">

                <form className="row" >

                    <div className='col-md-7 '>
                        <div>
                            <h1>Redefinir Senha</h1>
                            <p>Enviaremos um e-mail com mais informações sobre como redefinir sua senha</p>
                        </div>
                        <div>
                            <label className='form-label'>Email</label>
                            <input className="form-control" name='email' type="text" size='11' />
                            <button className='btn-main' type='submit'>Enviar email</button>
                        </div>
                    </div>

                </form>

            </div>
        </>

    )
}