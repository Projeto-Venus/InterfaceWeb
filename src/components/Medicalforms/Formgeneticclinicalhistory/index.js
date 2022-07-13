import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateActions from '../../pages/DatacomplementaryPage/updateActions';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validation';


export default function Formgeneticclinicalhistory(props) {

  const { actions, state } = useStateMachine({ updateActions })
  const { register, handleSubmit, formState:{errors} } = useForm({
    defaultValues: state.yourDetail ,resolver:yupResolver(schema)
  });


  const onValue = (data) => {
    actions.updateActions(data)
    console.log(data)
    props.event()

  }


  return (
    <>

      <form onSubmit={handleSubmit(onValue)} >
        <div className='row g-3 ms-4 mt-3'>
          <h4>Antecedentes Clínicos-Ginecológicos</h4>
          <div className="col-md-4">
            <label className='form-label'>Menarca</label>
            <input className='form-control' type="text" inputMode="text" name='menarca' {...register("menarca")} />
            <span>{errors.menarca?.message}</span>
          </div>

          <div className="col-md-4">
            <label className="form-label">Menopausa</label>
            <input className='form-control' type="text" inputMode="text" name='menopausa' {...register("menopausa")} />
            <span>{errors.menopausa?.message}</span>
          </div>

          <div className="col-md-3 ">
            <label className="form-label" >Temperatura (T)</label>
            <input className='form-control' type="text" inputMode="text" name='temperatura' {...register("temperatura")} />
            <span>{errors.temperatura?.message}</span>
          </div>

          <fieldset className="col-md-4">
            <legend className="col-form-label">Ciclo Menstrual:</legend>
            <div className="col-sm-10">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="ciclo_menstrual" value="regular" {...register('ciclo_menstrual')}/>
                <label className="form-check-label">
                  Regular
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="ciclo_menstrual" value="irregular" {...register('ciclo_menstrual')} />
                <label className="form-check-label">
                  Irregular
                </label>
              </div>
            </div>
            <span>{errors.ciclo_menstrual?.message}</span>
          </fieldset>

        </div>


        <div className='row g-3 ms-4 mt-1'>
          <h5>Antropométricos:</h5>

          <div className='col-md-4'>
            <label className="form-label">Peso</label>
            <input className='form-control' type="text" inputMode="text" name='peso' {...register("peso")} />
            <span>{errors.peso?.message}</span>
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

          <div className='row g-5 ms-2 mt-4'>
            <div className='col-md-4 '>
              <button type='button' className='btn-main' onClick={() => props.event2()}  >Voltar Página</button>
            </div>

            <div className='col-md-4 offset-md-4' >
              <button type='submit' className='btn-main' >Salvar</button>
            </div>
          </div>

        </div>
      </form>
    </>
  )
}