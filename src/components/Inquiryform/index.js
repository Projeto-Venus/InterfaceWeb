import { React, useState } from 'react';
import { useForm, useFieldArray , useWatch } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { StateMachineProvider, createStore, useStateMachine } from 'little-state-machine';
import './inquiryform.css'


export default function Inquiryform(props) {

    const { register, handleSubmit, control } = useForm({
        
    });
    const { actions, state } = useStateMachine({ updateName })
    const {fields, append, remove} = useFieldArray({
        control,
        name:'consultas'
    })


    const [inputFields, setInputFields] = useState([
        { data: '', peso: '', pa: '', intercorrencias: '' },


    ])

    createStore({
        yourDetail: { name: '' },
      });
      
      
      function updateName(state, payload) {
        return {
          ...state,
          yourDetail: {
            ...state.yourDetail,
            ...payload,
          },
        };
      }
      

    /*const handleInputChange = (index, e) => {
        e.preventDefault();
        const values = [...inputFields];
        values[index][e.target.name] = e.target.value;
        setInputFields(values)
        console.log(index, e.target.name)
    }*/


    const onValue = (data) => {
        actions.updateName({data})
        console.log(data)
        props.event()
    }

    return (
        <>
            <form onSubmit={handleSubmit(onValue)}>
            <div className='inquiryform-content'>
                <table className="table table-bordered " style={{ borderColor: "blue" }} >
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

                                    <td><input ref={register(`consultas.${index}.data`)} className='form-control' type='date' name={`consultas.${index}.data`}/></td>
                                    <td><input ref={register(`consultas.${index}.peso`)} className='form-control' type="text" name={`consultas.${index}.peso`} /></td>
                                    <td><input ref={register(`consultas.${index}.pa`)} className='form-control' type="text" name={`consultas.${index}.pa`}/></td>
                                    <td><input ref={register(`consultas.${index}.intercorrencias`)} className='form-control' type="text" name={`consultas.${index}.intercorrencias`}  /></td>
                                </tr>
                            ))}

                    </tbody>
                </table>
                <div>
                        <button type='button' className='btn btn-primary' onClick={()=>append({data:'', peso:'', pa:'', intercorrencias:''})}>[Nova Linha]</button>
                       

                    </div>
                <div className='row g-3 ms-3 mt-3'>
                    <div className='col-md-5 '>
                        <button type='button' className='btncadastro' onClick={() => props.event2()}  >Voltar Página</button>
                    </div>

                    <div className='col-md-4 offset-md-3' >
                        <button type='submit' className='btncadastro' >Próxima Página</button>
                    </div>
                </div>

            </div>
            </form>
        </>
    )
}