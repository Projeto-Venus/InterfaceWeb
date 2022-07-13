import React from 'react'
import { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useStateMachine } from 'little-state-machine';
import updateActions from '../../pages/DatacomplementaryPage/updateActions'
import './perinatalform.css';


export default function Perinatalhistoryform(props) {
    const { actions, state } = useStateMachine({ updateActions})
    const { register, handleSubmit, control } = useForm({
        defaultValues:state.yourDetail
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'perinatais'
    })

    useEffect(() => {
        append({ data: '', evolucao: '', tipoParto: '', estadoAtual: '' })
    }, [])


    const onValue = (data) => {
        actions.updateActions(data)
        console.log(data)
        props.event()
    }

    return (
        <>
            <form onSubmit={handleSubmit(onValue)}>
                    <table className="table table-bordered ">
                        <thead >
                            <tr>
                                <th colSpan="4" style={{ textAlign: "center" }}><h4>Antecedentes Perinatais</h4></th>
                            </tr>

                            <tr style={{ textAlign: "center" }}>
                                <th>Data</th>
                                <th>Evolução/Nativivo/Natimorto/Aborto</th>
                                <th>Tipo de Parto</th>
                                <th>Estado atual do concepto</th>
                            </tr>
                        </thead>
                        <tbody >

                            {fields.map((item, index) => (
                                <tr key={item.id}>

                                    <td><input {...register(`perinatais.${index}.data`)} className='form-control' type='date' name={`perinatais.${index}.data`} /></td>
                                    <td><input {...register(`perinatais.${index}.evolucao`)} className='form-control' type="text" name={`perinatais.${index}.evolucao`} /></td>
                                    <td><input {...register(`perinatais.${index}.tipoParto`)} className='form-control' type="text" name={`perinatais.${index}.tipoParto`} /></td>
                                    <td><input {...register(`perinatais.${index}.estadoAtual`)} className='form-control' type="text" name={`perinatais.${index}.estadoAtual`} /></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                    <div>
                        <button type='button' className='btn btn-primary'
                            onClick={() => append({ data: '', evolucao: '', tipoParto: '', estadoAtual: '' })}>[Nova Linha]
                        </button>

                    </div>
                    <div className='row g-3 ms-3 mt-3'>
                        <div className='col-md-5 '>
                            <button type='button' className='btn-main' onClick={() => props.event2()}>Voltar Página</button>
                        </div>

                        <div className='col-md-4 offset-md-3' >
                            <button type='submit' className='btn-main' >Próxima Página</button>
                        </div>
                    </div>
            </form>
        </>
    )
}