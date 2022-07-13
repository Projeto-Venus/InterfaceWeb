import React from 'react';
import { useState } from 'react';
import './datacomplement.css';
import Footer from '../../Footer/index'
import Headerhome from '../../Headerhome';
import Formpersonalbackground from '../../Medicalforms/Formpersonalbackground';
import Demographicform from '../../Medicalforms/Demographicform';
import Formfamilybackground from '../../Medicalforms/Formfamilybackground';
import Formphysicalexams from '../../Medicalforms/Formphysicalexams';
import Formgeneticclinicalhistory from '../../Medicalforms/Formgeneticclinicalhistory';
import Perinatalhistoryform from '../../Medicalforms/Perinatalhistoryform';
import Inquiryform from '../../Medicalforms/Inquiryform';
import Familyplanningform from '../../Medicalforms/Familyplanningform';
import Cancerpreventiveform from '../../Medicalforms/Cancerpreventiveform';
import Listgroup from '../../Listgroup';
import Outpatientchartform from '../../Medicalforms/Outpatientchartform';
import Vitaldatacontrolform from '../../Medicalforms/Vitaldatacontrolform';
import Sexualhistoryform from '../../Medicalforms/Sexualhistoryform';
import { StateMachineProvider } from 'little-state-machine';
import { CgFileDocument } from 'react-icons/cg'
import { RiHeartPulseLine } from 'react-icons/ri'
import { SiHandshake } from 'react-icons/si'
import { BiLocationPlus } from 'react-icons/bi'
import { BsGenderFemale } from 'react-icons/bs'
import { GiMedicalPackAlt } from 'react-icons/gi'
import { FaMicroscope } from 'react-icons/fa'
import { api } from '../../../services/api';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {GiCancer} from 'react-icons/gi'

export default function DatacomplementaryPage() {
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('')
    const [datans, setDatans] = useState('')

    const [formStep, setFormstep] = useState(1)

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

    const validationPacient = () => {
        if (nome !== 'Usuario Não encontrado ou Inválido') {
            return <div id='name-user'> <h6 >Nome: <span>{nome}</span></h6> &nbsp;<h6 >Nascimento: <span>{datans}</span></h6></div>
        } else {
            return <div id='name-user'><h6><span>Usúario não encontrado ou inválido!</span></h6></div>
        }
    }


    return (
        <>
            <div className='content-datacomplemetarypage'>
                <Listgroup />
                <div className='content-datacomplemetary'>

                    <Headerhome />
                    <div className='content-indentification'>

                        <form onSubmit={handle} className='row g-2 ms-3' >
                            <h5 className="col-md-10 ">Identificação do Paciente</h5>
                            <div className="col-md-8" >
                                <input className='form-control' type='text' name='cpf' placeholder='CPF' value={cpf} onChange={(e) => setCpf(e.target.value)} />
                            </div>
                            <div className='col-md-4'>
                                <button type="submit" className='btn-primary btn-large'>Pesquisar</button>
                            </div>
                            {validationPacient()}
                        </form>
                    </div>


                    <div className='nav-icons'>

                        <div onClick={() => setFormstep(1)}>
                            <h5><BsFillPersonLinesFill /></h5>
                            <h6>Antecedentes Pessoais</h6>
                        </div>

                        <div onClick={() => setFormstep(2)}>
                            <h5><CgFileDocument /></h5>
                            <h6>Dados Demográficos</h6>
                        </div>

                        <div onClick={() => setFormstep(3)}>
                            <h5> <SiHandshake /></h5>
                            <h6>Histórico Familiar</h6>
                        </div>

                        <div onClick={() => setFormstep(4)}>

                            <h5><FaMicroscope /></h5>
                            <h6>Exames Físicos</h6>
                        </div>

                        <div onClick={() => setFormstep(5)}>

                            <h5> <BiLocationPlus /></h5>
                            <h6>Antecedentes ginecológicos</h6>
                        </div>

                        <div onClick={() => setFormstep(6)}>
                            <h5><RiHeartPulseLine /></h5>
                            <h6>Ambulatorioal</h6>
                        </div>

                        <div onClick={() => setFormstep(7)}>

                            <h5><BsGenderFemale /></h5>
                            <h6>Dados reprodutivos</h6>
                        </div>

                        <div onClick={() => setFormstep(8)}>

                            <h5><GiMedicalPackAlt /></h5>
                            <h6>Consultas realizadas</h6>
                        </div>

                        <div onClick={() => setFormstep(9)}>
                            <h5><RiHeartPulseLine /></h5>
                            <h6>Antecedentes Perinatais</h6>
                        </div>

                        <div onClick={() => setFormstep(10)}>
                            <h5><SiHandshake /></h5>
                            <h6>Planejamento Familiar</h6>
                        </div>

                        <div onClick={() => setFormstep(11)}>
                            <h5><GiCancer/></h5>
                            <h6>Preventivo do Câncer</h6>
                        </div>

                        <div onClick={() => setFormstep(12)}>
                            <h5><RiHeartPulseLine /></h5>
                            <h6>Dados vitais</h6>
                        </div>

                    </div>
                    <div className='prontuary-form'>

                        <StateMachineProvider>

                            {
                                (() => {
                                    switch (formStep) {
                                        case 1:
                                            return <Formpersonalbackground event={handleClick} />
                                        case 2:
                                            return <Demographicform event={handleClick} event2={handleClickBack} />
                                        case 3:
                                            return <Formfamilybackground event={handleClick} event2={handleClickBack} />
                                        case 4:
                                            return <Formphysicalexams event={handleClick} event2={handleClickBack} />

                                        case 5:
                                            return <Formgeneticclinicalhistory event={handleClick} event2={handleClickBack} />
                                        case 6:
                                            return <Outpatientchartform event={handleClick} event2={handleClickBack} />
                                        case 7:
                                            return <Sexualhistoryform event={handleClick} event2={handleClickBack} />

                                        case 8:
                                            return <Inquiryform event={handleClick} event2={handleClickBack} />
                                        case 9:
                                            return <Perinatalhistoryform event={handleClick} event2={handleClickBack} />

                                        case 10:
                                            return <Familyplanningform event={handleClick} event2={handleClickBack} />

                                        case 11:

                                            return <Cancerpreventiveform event={handleClick} event2={handleClickBack} />
                                        case 12:
                                            return <Vitaldatacontrolform event={handleClick} event2={handleClickBack} />

                                        default:
                                            return <Formpersonalbackground event={handleClick} />
                                    }
                                })()}

                        </StateMachineProvider>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}