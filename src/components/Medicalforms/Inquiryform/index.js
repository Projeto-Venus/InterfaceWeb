import { React, useState, useEffect } from 'react';
import { useForm, useFieldArray} from 'react-hook-form';
import {  useStateMachine } from 'little-state-machine';
import updateActions from '../../pages/DatacomplementaryPage/updateActions'
import './inquiryform.css'


export default function Inquiryform(props) {

    const { actions, state } = useStateMachine({ updateActions })
    const { register, handleSubmit, control } = useForm({

    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'consultas'
    })

    useEffect(() => {
        append({ data: '', peso: '', pa: '', intercorrencias: '' })
    }, [])

    const onValue = (data) => {
        actions.updateActions(data)
        console.log(data)
        props.event()
    }

    return (
        <>
            <form onSubmit={handleSubmit(onValue)}>
                <table className="table table-bordered">
                    <thead >
                        <tr>
                            <td colSpan="4" style={{ textAlign: "center" }} ><h4>Consultas</h4></td>
                        </tr>

                        <tr>
                            <th style={{ textAlign: "center" }}>Data</th>
                            <th>Peso</th>
                            <th>PA</th>
                            <th>Intercorrências/Orientações</th>
                        </tr>
                    </thead>
                    <tbody >

                        {fields.map((item, index) => (
                            <tr key={item.id}>

                                <td><input {...register(`consultas.${index}.data`)} className='form-control' type='date' name={`consultas.${index}.data`} /></td>
                                <td><input {...register(`consultas.${index}.peso`)} className='form-control' type="text" name={`consultas.${index}.peso`} /></td>
                                <td><input {...register(`consultas.${index}.pa`)} className='form-control' type="text" name={`consultas.${index}.pa`} /></td>
                                <td><input {...register(`consultas.${index}.intercorrencias`)} className='form-control' type="text" name={`consultas.${index}.intercorrencias`} /></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                <div>
                    <button type='button' className='btn btn-primary' onClick={() => append({ data: '', peso: '', pa: '', intercorrencias: '' })}>[+]</button>


                </div>
                <div className='row g-3 ms-3 mt-3'>
                    <div className='col-md-5 '>
                        <button type='button' className='btn-main' onClick={() => props.event2()}  >Voltar Página</button>
                    </div>

                    <div className='col-md-4 offset-md-3' >
                        <button type='submit' className='btn-main' >Salvar</button>
                    </div>
                </div>
            </form>
        </>
    )
}