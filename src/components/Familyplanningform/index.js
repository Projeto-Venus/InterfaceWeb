import { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { StateMachineProvider, createStore, useStateMachine } from 'little-state-machine';
import './planningform.css';


export default function Familyplanningform(props) {

    const { register, handleSubmit, control } = useForm();
    const { actions, state } = useStateMachine({ updateName })
    const {fields, append, remove} = useFieldArray({
        control,
        name:'planfamiliar'
    })


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

      const onValue = (data) => {
        actions.updateName({data})
        console.log(data)
        props.event()
    }

    const [inputFields, setInputFields] = useState([
        {data:'', metodo: '', inicio: '', orientacoes: '', termino: '' },


    ])

    const handleInputChange = (index, e) => {
        e.preventDefault();
        const values = [...inputFields];
        values[index][e.target.name] = e.target.value;
        setInputFields(values)
        console.log(index, e.target.name)
    }

    const handleSubmitt = (e) => {
        e.preventDefault();
        console.log('InputFild', inputFields)
    }

    return (
        <>
             <form onSubmit={handleInputChange} >
            <div className='familyplanning-content'>
                <table className="table table-bordered" style={{ border: "3px solid #BAADF1" }} >
                    <thead style={{ border: "3px solid #BAADF1" }} >
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
                        <tr >
                            <th><input type='date' name='data_nasc' /></th>
                            <td></td>
                            <td><input type='date' name='data_nasc' /></td>
                            <td></td>
                        </tr>

                        {fields.map((item, index) => (
                                <tr key={item.id}>

                                    <td><input ref={register(`planfamiliar.${index}.data`)} className='form-control' type='date' name={`planfamiliar.${index}.data_cit`}/></td>
                                    <td><input ref={register(`planfamiliar.${index}.metodo`)} className='form-control' type="text" name={`planfamiliar.${index}.result_cit`} /></td>
                                    <td><input ref={register(`planfamiliar.${index}.inicio`)} className='form-control' type="date" name={`planfamiliar.${index}.data_ex`}/></td>
                                    <td><input ref={register(`planfamiliar.${index}.intercorrencias`)} className='form-control' type="text" name={`planfamiliar.${index}.intercorrencias`}  /></td>
                                    <td><input ref={register(`planfamiliar.${index}.termino`)} className='form-control' type="text" name={`planfamiliar.${index}.termino`}  /></td>
                                </tr>
                            ))}
                        
                        
                    </tbody>
                </table>
                <button type='button' className='btn btn-primary' onClick={()=>append({data_cit:'', result_cit:'', data_ex:'', result_ex:''})}>[Nova Linha]</button>
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