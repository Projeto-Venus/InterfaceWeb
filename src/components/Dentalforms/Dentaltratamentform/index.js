import React from 'react'
import { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useStateMachine } from 'little-state-machine';
import updateActions from '../../pages/OdontoPage/updateActions';


export default function Dentaltratamentform(props) {
    const { actions, state } = useStateMachine({ updateActions })
    const { register, handleSubmit, control } = useForm({
        defaultValues:state.yourDetail
        
    });
  
    const {fields, append, remove} = useFieldArray({
        control,
        name:'dentaltratamento'
    })

    useEffect(()=>{ 
            append({ data: '', dente: '', trabalho: '', rubrica:'' })
      
    },[])


      const onValue = (data) => {
        actions.updateActions(data)
        console.log(data)
        props.nextstep()
    }

    return (
        <>
            <form onSubmit={handleSubmit(onValue)} >
                    <table className="table table-bordered">
                        <thead  >
                            <tr>
                                <td colSpan="4" style={{ textAlign: "left" }}><h4>Ficha Clínica Odontólogica</h4></td>
                            </tr>

                            <tr style={{ textAlign: "center" }}>
                                <td colSpan="4"><h5>Tratamento</h5></td>
                            </tr>
                            <tr>
                                <th style={{ textAlign: "center" }}>Data</th>
                                <th>Dente</th>
                                <th>Trabalho Realizado</th>
                                <th>Rúbrica</th>
                            </tr>
                        </thead>


                        <tbody >
                            {fields.map((item, index) => (
                                <tr key={item.id}>

                                    <td><input {...register(`dentaltratamento.${index}.data`)} className='form-control' name={`dentaltratamento.${index}.data`} type='date' /></td>
                                    <td><input {...register(`dentaltratamento.${index}.dente`)} className='form-control' type="text" name={`dentaltratamento.${index}.dente`} /></td>
                                    <td><input {...register(`dentaltratamento.${index}.trabalho`)} className='form-control' type="text" name={`dentaltratamento.${index}.trabalho`} /></td>
                                    <td><input {...register(`dentaltratamento.${index}.rubrica`)} className='form-control' type="text" name={`dentaltratamento.${index}.rubrica`} /></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                    <button type='button' className='btn btn-primary' onClick={() => append({ data: '', dente: '', trabalho: '', rubrica:'' })}>[Nova Linha]</button>
                        <div className='row g-3 ms-3 mt-3'>
                            <div className='col-md-5 '>
                                <button type='button' className='btn-main' onClick={() => props.back()}  >Voltar Página</button>
                            </div>

                            <div className='col-md-4 offset-md-3' >
                                <button type='submit' className='btn-main' >Salvar Dados</button>
                            </div>
                        </div>
            </form>
        </>
    )
}