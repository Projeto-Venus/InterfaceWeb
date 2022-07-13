import { useForm, useFieldArray } from 'react-hook-form';
import {useEffect} from 'react'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { StateMachineProvider, createStore, useStateMachine } from 'little-state-machine';
import updateActions from '../../pages/DatacomplementaryPage/updateActions'
import './preventiveform.css'


export default function Cancerpreventiveform(props) {

    const { register, handleSubmit, control } = useForm();
    const { actions, state } = useStateMachine({ updateActions })
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'preventcancer'
    })

    useEffect(() => {
        append({ data_cit: '', result_cit: '', data_ex: '', result_ex: '' })

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
                                <td colSpan="4" style={{ textAlign: "center" }} ><h4>Preventivo do Câncer</h4></td>
                            </tr>

                            <tr>
                                <td colSpan="2" style={{ textAlign: "center" }} ><h4>Citologia</h4></td>
                                <td colSpan="2" style={{ textAlign: "center" }} ><h4>Exame de mama</h4></td>
                            </tr>

                            <tr>
                                <th style={{ textAlign: "center" }}>Data</th>
                                <th>Resultado</th>
                                <th>Data</th>
                                <th>Resultado</th>
                            </tr>
                        </thead>
                        <tbody >

                            {fields.map((item, index) => (
                                <tr key={item.id}>

                                    <td><input {...register(`preventcancer.${index}.data_cit`)} className='form-control' type='date' name={`preventcancer.${index}.data_cit`} /></td>
                                    <td><input {...register(`preventcancer.${index}.result_cit`)} className='form-control' type="text" name={`preventcancer.${index}.result_cit`} /></td>
                                    <td><input {...register(`preventcancer.${index}.data_ex`)} className='form-control' type="date" name={`preventcancer.${index}.data_ex`} /></td>
                                    <td><input {...register(`preventcancer.${index}.result_ex`)} className='form-control' type="text" name={`preventcancer.${index}.result_ex`} /></td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                    <button type='button' className='btn btn-primary' onClick={() => append({ data_cit: '', result_cit: '', data_ex: '', result_ex: '' })}>[Nova Linha]</button>
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