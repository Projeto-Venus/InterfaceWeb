import React from 'react';
import { useState } from 'react';
import './datacomplement.css';
import Footer from '../../Footer/index'
import Headerhome from '../../Headerhome';
import Formpersonalbackground from '../../Formpersonalbackground';
import Formfamilybackground from '../../Formfamilybackground';
import Formphysicalexams from '../../Formphysicalexams';
import Formgeneticclinicalhistory from '../../Formgeneticclinicalhistory';
import Perinatalhistoryform from '../../Perinatalhistoryform';
import Inquiryform from '../../Inquiryform';
import Familyplanningform from '../../Familyplanningform';
import Cancerpreventiveform from '../../Cancerpreventiveform';
import Listgroup from '../../Listgroup';
import Outpatientchartform from '../../Outpatientchartform';
import { StateMachineProvider, createStore, DevTool } from 'little-state-machine';
import { api } from '../../../services/api';

export default function DatacomplementaryPage() {
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('')
    const [datans, setDatans] = useState('')

    const [formStep, setFormstep] = useState(8)

    const handleClick = () => {
        setFormstep(formStep + 1)
    }

    const handleClickBack = () => {
        setFormstep(formStep - 1)
    }
    const handle = async (e) => {
        e.preventDefault();
    
        const token = localStorage.getItem('token')
        api.defaults.headers.Authorization = `Bearer ${token}`
    
     
            await api.get(`/users/register`).then(response => {
                let userData = response.data.filter(user => user.cpf === cpf)
            console.log(userData[0].register[0].nome_cadastro)
            console.log(response.data)
    
                setNome(userData[0].register[0].nome_cadastro)
                let newData = userData[0].register[0].data_nasc
                let valueDate = newData.split('-').reverse().join('/')
                setDatans(valueDate)
         
             }).catch(err => {
                 console.error('usuario invalido!')
                 setNome("Usuario Não encontrado ou Inválido")
                 setDatans('')
             })
    
    
    }


    return (
        <>
            <Headerhome />
            
            
            <h4 className='title-form'>Prontuário</h4>
           {nome!=='' && <div id='name-user'> <h5 >Nome: <span>{nome}</span></h5> <h5 >Nascimento: <span>{datans}</span></h5></div> }
            
            <Listgroup />
            <StateMachineProvider>

                {(() => {
                    switch (formStep) {
                        case 1:
                            return <div className='content-data-complementary'>
                                <h4 className="col-md-4 offset-md-1  ms-4 mt-4">Identificação do Paciente</h4>

                                <form onSubmit={handle} className='row g-2 ms-4' >
                                    <div className="col-md-4" >
                                        <input className='form-control' type='text' name='cpf' placeholder='CPF' value={cpf} onChange={(e) => setCpf(e.target.value)} /><br />

                                    </div>
                                    <div className='col-md-4'>
                                        <button type="submit" className='btn-primary btn-large' style={{ height: "63%", border: "none" }}>Pesquisar</button>
                                    </div>

                                </form>
                                <Formpersonalbackground event={handleClick} /></div>
                        case 2:
                            return <div className='content-data-complementary'>
                                <Formfamilybackground event={handleClick} event2={handleClickBack} />
                            </div>

                        case 3:
                            return <div className='content-data-complementary'>
                                <Formphysicalexams event={handleClick} event2={handleClickBack} />
                            </div>
                        case 4:
                            return <Inquiryform event={handleClick} event2={handleClickBack} />

                        case 5:
                            return <Perinatalhistoryform event={handleClick} event2={handleClickBack} />

                        case 6:
                            return <Familyplanningform event={handleClick} event2={handleClickBack} />
                        case 7:
                            return <div className='content-data-complementary'>
                                <Formgeneticclinicalhistory event={handleClick} event2={handleClickBack} /></div>

                        case 8:
                            return <Cancerpreventiveform event={handleClick} event2={handleClickBack} />

                        case 9:
                            return <div className='content-data-complementary'>
                                <Outpatientchartform event={handleClick} event2={handleClickBack} /></div>

                        default:
                            return null
                    }
                })()}

            </StateMachineProvider>

            <Footer />
        </>

    )
}