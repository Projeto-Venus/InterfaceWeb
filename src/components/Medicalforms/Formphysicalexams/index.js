import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateActions from '../../pages/DatacomplementaryPage/updateActions';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validation';

export default function Formphysicalexams(props) {

  const { actions, state } = useStateMachine({ updateActions })
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: state.yourDetail, resolver:yupResolver(schema)
  });
 

  const onSubmit = (data) => {
  
    actions.updateActions(data)
    console.log(data)
    props.event()
  }


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row g-3 ms-3 mt-2'>
          <h4>Exames Físicos</h4>

          <h5>Sinais Vitais (SSVV):</h5>

          <div className="col-md-4">
            <label className='form-label'>Pressão Arterial (PA)</label>
            <input className='form-control' type="text"
              name='pressao_arterial' {...register("pressao_arterial")} />
              <span>{errors.pressao_arterial?.message}</span>

          </div>

          <div className="col-md-3">
            <label className="form-label">Temperatura (T)</label>
            <input className='form-control' type="text" inputMode="text" name='temperatura' {...register("temperatura")} />
            <span>{errors.temperatura?.message}</span>
          </div>


          <div className="col-md-4 ">
            <label className="form-label" >Frequência Respiratória (FR)</label>
            <input className='form-control' type="text" inputMode="text" name='freq_resp' {...register("freq_resp")} />
            <span>{errors.freq_resp?.message}</span>
          </div>

          <div className="col-md-4 ">
            <label className="form-label">Frequência Cardáca (FC)</label>
            <input className='form-control' type="text" inputMode="text" name='freq_card' {...register("freq_card")} />
            <span>{errors.freq_card?.message}</span>
          </div>
        </div>

        <div className='row g-3 ms-3 mt-1'>
          <h5>Antropométricos:</h5>

          <div className='col-md-4'>
            <label className="form-label">Peso</label>
            <input className='form-control' type="text" inputMode="text" name='peso' {...register("peso")} />
            <span>{errors.peso?.message}</span>
          </div>


          <div className='col-md-4'>
            <label className="form-label">Altura</label>
            <input className='form-control' type="text" inputMode="text" name='altura' {...register("altura")} />
            <span>{errors.altura?.message}</span>
          </div>


          <div className='col-md-3'>
            <label className="form-label">Perímetro Cefálico (PC)</label>
            <input className='form-control' type="text" inputMode="text" name='perimetro_cef' {...register("perimetro_cef")} />
            <span>{errors.perimetro_cef?.message}</span>
          </div>

          <div className='col-md-4'>
            <label className="form-label">Perímetro Torácico (PT)</label>
            <input className='form-control' type="text" inputMode="text" name='perimetro_toracico' {...register("perimetro_toracico")} />
            <span>{errors.perimetro_toracico?.message}</span>
          </div>

          <div className='col-md-3 '>
            <label className="form-label">Cintura</label>
            <input className='form-control' type="text" inputMode="text" name='cintura' {...register("cintura")} />
            <span>{errors.cintura?.message}</span>
          </div>

          <div className='col-md-4'>
            <label className="form-label ">Quadril</label>
            <input className='form-control' type="text" inputMode="text" name='quadril' {...register("quadril")} />
            <span>{errors.quadril?.message}</span>
          </div>

          <div className='row g-4 ms-2 mt-1'>
            <div className='col-md-5'>
              <button type='button' className='btn-main' onClick={() => props.event2()}  >Voltar Página</button>
            </div>

            <div className='col-md-2 offset-md-3' >
              <button type='submit' className='btn-main' >Salvar</button>
            </div>
          </div>
        </div>
      </form>

    </>
  )
}

