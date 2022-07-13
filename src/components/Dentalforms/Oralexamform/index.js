import React from 'react'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useStateMachine } from 'little-state-machine';
import updateActions from '../../pages/DatacomplementaryPage/updateActions';
import './oralform.css'



export default function Oralexamform(props) {
    const { actions, state } = useStateMachine({ updateActions })
    const { register, handleSubmit, control } = useForm({
        defaultValues: state.yourDetail
    });


    const onValue = (data) => {
        actions.updateActions(data)
        console.log(data)
        
    }

    return (
        <>
            <form onSubmit={handleSubmit(onValue)} >
                <div className='oralexam-form'>
                    <table className="table table-bordered" >
                        <thead >
                            <tr>
                                <th colSpan="4"><h4>Ficha Clínica Odontólogica</h4></th>
                            </tr>

                            <tr >
                                <h5>Exame Físico</h5>
                            </tr>
                            <tr >
                                <h5>Lábios</h5>
                            </tr>
                            <tr >
                                <h5>Língua</h5>
                            </tr>
                            <tr >
                                <h5>Bocheca</h5>
                            </tr>
                            <tr>
                                <h5>Palato</h5>
                            </tr>
                            <tr>
                                <h5>Observações</h5>
                                <textarea {...register('observacoes_bucal')} name='observacoes_bucal'  
                                className="form-control" rows="3"></textarea>
                            </tr>
                        </thead>
                        <tbody >
                          

                            <div className='row g-3 ms-3 mt-3'>
                                <div className='col-md-5 '>
                                    <button type='button' className='btn-main' onClick={() => props.back()}  >Voltar Página</button>
                                </div>

                                <div className='col-md-4 offset-md-3' >
                                    <button type='submit' className='btn-main' >Salvar</button>
                                </div>
                            </div>

                        </tbody>
                    </table>
                </div>
            </form>
        </>
    )
}