import { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import updateActions from '../../pages/DatacomplementaryPage/updateActions'
import { useStateMachine } from 'little-state-machine';


export default function Vitaldatacontrolform(props) {


    const { actions, state } = useStateMachine({ updateActions })
    const { register, handleSubmit, control } = useForm({
        defaultValues:state.yourDetail
        
    });
  
    const {fields, append, remove} = useFieldArray({
        control,
        name:'controlesvitais'
    })

    useEffect(()=>{ 
            append({data:'', glicemia: '', ta: ''})
      
    },[])


      const onValue = (data) => {
        actions.updateActions(data)
        console.log(data)
        props.event()
    }

    return (
        <>
             <form onSubmit={handleSubmit(onValue)}  >
                <table className="table table-bordered">
                    <thead >
                        <tr>
                            <td colSpan="5" style={{ textAlign: "center" }} ><h4>Controle de dados vitais</h4></td>
                        </tr>

                        <tr>
                            <th style={{ textAlign: "center" }}>Data</th>
                            <th>Glicemia</th>
                            <th>T.A</th>
                        </tr>
                    </thead>
                    <tbody >
                        {fields.map((item, index) => (
                                <tr key={item.id}>

                                    <td><input {...register(`controlesvitais.${index}.data`)} className='form-control' name={`controlesvitais.${index}.data`} type='date'/></td>
                                    <td><input {...register(`controlesvitais.${index}.glicemia`)} className='form-control' type="text" name={`controlesvitais.${index}.glicemia`} /></td>
                                    <td><input {...register(`controlesvitais.${index}.ta`)} className='form-control' type="text" name={`controlesvitais.${index}.ta`}/></td>               
                                </tr>
                            ))}
                        
                        
                    </tbody>
                </table>
                <button type='button' className='btn btn-primary' onClick={()=>append({data:'', glicemia: '', ta: ''})}>[Nova Linha]</button>
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