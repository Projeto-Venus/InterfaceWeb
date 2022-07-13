import { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { StateMachineProvider, createStore, useStateMachine } from 'little-state-machine';
import updateActions from '../../pages/DatacomplementaryPage/updateActions'
import './planningform.css';


export default function Familyplanningform(props) {
    const { actions, state } = useStateMachine({ updateActions })
    const { register, handleSubmit, control } = useForm({
        defaultValues:state.yourDetail
    });
    const {fields, append, remove} = useFieldArray({
        control,
        name:'planfamiliar'
    })

    useEffect(()=>{
        append({data:'', metodo: '', inicio: '', intercorrencias: '', termino: '' })
    },[])

      const onValue = (data) => {
        actions.updateActions(data)
        console.log(data)
        props.event()
    }


    return (
        <>
             <form onSubmit={handleSubmit(onValue)} >
                <table className="table table-bordered" >
                    <thead  >
                        <tr>
                            <td colSpan="5" style={{ textAlign: "center" }} ><h4>Planejamento Familiar</h4></td>
                        </tr>

                        <tr>
                            <th style={{ textAlign: "center" }}>Data</th>
                            <th>Método</th>
                            <th>Início</th>
                            <th>Intercorrências/Orientações</th>
                            <th>Término</th>
                        </tr>
                    </thead>
                    <tbody >
                        {fields.map((item, index) => (
                                <tr key={item.id}>

                                    <td><input {...register(`planfamiliar.${index}.data`)} className='form-control' type='date' name={`planfamiliar.${index}.data`}/></td>
                                    <td><input {...register(`planfamiliar.${index}.metodo`)} className='form-control' type="text" name={`planfamiliar.${index}.metodo`} /></td>
                                    <td><input {...register(`planfamiliar.${index}.inicio`)} className='form-control' type="text" name={`planfamiliar.${index}.inicio`}/></td>
                                    <td><input {...register(`planfamiliar.${index}.intercorrencias`)} className='form-control' type="text" name={`planfamiliar.${index}.intercorrencias`}  /></td>
                                    <td><input {...register(`planfamiliar.${index}.termino`)} className='form-control' type="text" name={`planfamiliar.${index}.termino`}  /></td>
                                </tr>
                            ))}
                        
                        
                    </tbody>
                </table>
                <button type='button' className='btn btn-primary' onClick={()=>append({data:'', metodo: '', inicio: '', intercorrencias: '', termino: '' })}>[Nova Linha]</button>
                <div className='row g-3 ms-3 mt-3'>
                    <div className='col-md-5 '>
                        <button type='button' className='btn-main' onClick={() => props.event2()}  >Voltar Página</button>
                    </div>

                    <div className='col-md-4 offset-md-3' >
                        <button type='submit' className='btn-main' >Próxima Página</button>
                    </div>
                </div>
            </form>
        </>
    )
}