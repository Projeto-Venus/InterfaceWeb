import { useForm, useFieldArray } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { StateMachineProvider, createStore, useStateMachine } from 'little-state-machine';
import './preventiveform.css'


export default function Cancerpreventiveform(props) {

    const { register, handleSubmit, control } = useForm();
    const { actions, state } = useStateMachine({ updateName })
    const {fields, append, remove} = useFieldArray({
        control,
        name:'preventcancer'
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
    return (
        <>
            <form onSubmit={handleSubmit(onValue)}>
            <div className='cancerpreventiveform-content'>
                <table className="table table-bordered " style={{ border: "3px solid #BAADF1" }} >
                    <thead >
                        <tr>
                            <td colSpan="4" style={{ textAlign: "center" }} ><h5>Preventivo do Câncer</h5></td>
                        </tr>

                        <tr>
                            <td colSpan="2" style={{ textAlign: "center" }} ><h5>Citologia</h5></td>
                            <td colSpan="2" style={{ textAlign: "center" }} ><h5>Exame de mama</h5></td>
                        </tr>

                        <tr>
                            <th style={{ textAlign: "center" }}>Data</th>
                            <th>Resultado</th>
                            <th>Data</th>
                            <th>Resultado</th>
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

                                    <td><input ref={register(`preventcancer.${index}.data_cit`)} className='form-control' type='date' name={`preventcancer.${index}.data_cit`}/></td>
                                    <td><input ref={register(`preventcancer.${index}.result_cit`)} className='form-control' type="text" name={`preventcancer.${index}.result_cit`} /></td>
                                    <td><input ref={register(`preventcancer.${index}.data_ex`)} className='form-control' type="date" name={`preventcancer.${index}.data_ex`}/></td>
                                    <td><input ref={register(`preventcancer.${index}.result_ex`)} className='form-control' type="text" name={`preventcancer.${index}.result_ex`}  /></td>
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