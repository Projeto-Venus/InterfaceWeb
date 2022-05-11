import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { StateMachineProvider , createStore, useStateMachine } from 'little-state-machine';
import updateActions from '../pages/DatacomplementaryPage/updateActions';

export default function Formphysicalexams(props) {

  const { actions, state } = useStateMachine({updateActions})
  const { register, handleSubmit } = useForm({defaultValues:state.yourDetail
  });

  
  const onValue = (data) => {
    actions.updateActions(data)
    console.log(data)
    props.event()
   
  }

  /*
   ref= {register({required:{value:true, message:'por favor informe o campo!'}})}
       <span>{errors.pressao_arterial?.message}</span>
     */
  return (
    <>
      <h4>Exames Físicos</h4>

        <form onSubmit={handleSubmit(onValue)}>
        <div className='row g-3 ms-1'>

          <h4>Sinais Vitais (SSVV):</h4>

          <div className="col-md-4">
            <label className='form-label'>Pressão Arterial(PA)</label>
            <input className='form-control' type="text"
              name='pressao_arterial' {...register("pressao_arterial", {required:true})}/>

          </div>

          <div className="col-md-4">
            <label className="form-label">Temperatura(T)</label>
            <input className='form-control' type="text" inputMode="text" name='temperatura' {...register("temperatura")} />
          </div>


          <div className="col-md-3 ">
            <label className="form-label" >Frequência Respiratória(FR)</label>
            <input className='form-control' type="text" inputMode="text" name='frequencia_resp' {...register("frequencia_resp")} />
          </div>

          <div className="col-md-4 ">
            <label className="form-label">Frequência Cardáca(FC)</label>
            <input className='form-control' type="text" inputMode="text" name='frequencia_card' {...register("frequencia_card")} />
          </div>
        </div>
    
        <div className='row g-3 ms-1 mt-1'>
          <h4>Antropométricos:</h4>

          <div className='col-md-4'>
            <label className="form-label">Peso</label>
            <input className='form-control' type="text" inputMode="text" name='peso' {...register("peso")} />
          </div>


          <div className='col-md-4'>
            <label className="form-label">Altura</label>
            <input className='form-control' type="text" inputMode="text" name='altura' {...register("altura")} />
          </div>


          <div className='col-md-3'>
            <label className="form-label">Perímetro Cefálico (PC)</label>
            <input className='form-control' type="text" inputMode="text" name='perimetro_cef' {...register("perimetro_cef")} />
          </div>

          <div className='col-md-4'>
            <label className="form-label">Perímetro Torácico (PT)</label>
            <input className='form-control' type="text" inputMode="text" name='perimetro_toracico' {...register("perimetro_toracico")} />
          </div>

          <div className='col-md-3 '>
            <label className="form-label">Cintura</label>
            <input className='form-control' type="text" inputMode="text" name='cintura' {...register("cintura")} />
          </div>

          <div className='col-md-4'>
            <label className="form-label ">Quadril</label>
            <input className='form-control' type="text" inputMode="text" name='quadril' {...register("quadril")} />
          </div>

          <div className='row g-3 ms-3 mt-3'>
            <div className='col-md-5 '>
              <button type='button' className='btncadastro' onClick={()=>props.event2()}  >Voltar Página</button>
            </div>

            <div className='col-md-4 offset-md-2' >
              <button type='submit' className='btncadastro' >Próxima Página</button>
            </div>
          </div>

        </div>
      </form>



    </>
  )
}

