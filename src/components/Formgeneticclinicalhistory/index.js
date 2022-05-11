import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';



export default function Formgeneticclinicalhistory(props) {

  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <>
     

      <form >
        <div className='row g-3 ms-1'>
        <h4>Antecedentes Clínicos-Ginecológicos</h4>
          <div className="col-md-4">
            <label className='form-label'>Menarca</label>
            <input className='form-control' type="text" inputMode="text" name='menarca' {...register("menarca")} />
          </div>

          <div className="col-md-4">
            <label className="form-label">Menopausa</label>
            <input className='form-control' type="text" inputMode="text" name='menopausa' {...register("menopausa")} />
          </div>

          <div className="col-md-3 ">
            <label className="form-label" >Temperatura(T)</label>
            <input className='form-control' type="text" inputMode="text" name='temperatura' {...register("temperatura")} />
          </div>

          <fieldset className="col-md-4">
          <legend className="col-form-label">Ciclo Menstrual:</legend>
          <div className="col-sm-10">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gridRadios" value="regular" {...register('ciclo_menstrual')} checked />
              <label className="form-check-label">
                Regular
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gridRadios" value="irregular" {...register('ciclo_menstrual')} />
              <label className="form-check-label">
                Irregular
              </label>
            </div>
          </div>
        </fieldset>

        </div>
      

        <div className='row g-3 ms-2 mt-1'>
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