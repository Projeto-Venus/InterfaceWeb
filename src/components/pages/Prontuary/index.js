import React from 'react'
import { useEffect, useState } from 'react';
import Headerhome from '../../Headerhome';
import Listgroup from '../../Listgroup';
import { useForm, useFieldArray } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../../services/api';
import { useStateMachine } from 'little-state-machine';
import './prontuary.css'


export default function Prontuary(props) {
    const [fields, setFilelds] = useState([])

    useEffect(() => {

        const token = localStorage.getItem('token')
        api.defaults.headers.Authorization = `Bearer ${token}`


        api.get(`/users/register`).then(response => {


          
            setFilelds(response.data)
            console.log(fields)
            console.log(fields[0].register[0].nome_cadastro)
      
        }).catch(err => {
            console.error('usuario invalido!')


        })
    },[])



    return (

        <div className='content-prontuarypage'>
            <Listgroup />

            <div className='content-prontuary'>
                <Headerhome />
                <form>
                    <table className="table table-bordered">
                        <thead  >
                            <tr>
                                <td colSpan="6" style={{ textAlign: "left" }}><h4>Prontuário</h4></td>
                            </tr>
                            <tr>
                                <th style={{ textAlign: "center" }}>Nome da Paciente</th>
                                <th>Data Nascimento</th>
                                <th>CPF</th>
                                <th>CNS</th>
                                <th>Data última Consulta</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody >
                            {fields.map((item, index) => (
                                
                                <tr key={index}>

                                    <td>{fields[index].register[0].nome_cadastro}</td>
                                    <td>{fields[index].register[0].data_nasc}</td>
                                    <td>{fields[index].cpf}</td>
                                    <td>{fields[index].register[0].num_cartao}</td>
                                    <td>{}</td>
                                    <td>{<button type='button' className='btn btn-primary' onClick='' > Editar</button>}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                    <button type='button' className='btn btn-primary' onClick='' > + Adicionar</button>
                   
                </form>
            </div>
        </div>

    )
}