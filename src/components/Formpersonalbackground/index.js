import React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './formpersonalbackground.css';
import { StateMachineProvider, createStore, useStateMachine } from 'little-state-machine';
import updateActions from '../pages/DatacomplementaryPage/updateActions';


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

export default function Formpersonalbackground(props) {
  

  const { actions, state } = useStateMachine({ updateName })
  const { register, handleSubmit } = useForm({
    defaultValues: state.yourDetail
  });




  const onValue = (data) => {
    actions.updateName(data)
    console.log(data)
    props.event()

  }

  return (
    <>
      

      <form className='row g-2 ms-4' onSubmit={handleSubmit(onValue)} >


        <div className="col-md-12">
          <h4>Antecedentes Pessoais</h4>
        </div>

        <div>
          <strong>Doenças Crônicas:</strong>
        </div>

        <div>
          <input className="form-check-input" name="diabetemellitus" type="checkbox" {...register("diabetemellitus")} />
          <label className="form-check-label">Diabetes Mellitus (DM)</label>
        </div>

        <div>
          <input className="form-check-input" name="hipertensao" type="checkbox" {...register('hipertensao')} />
          <label className="form-check-label">Hipertenção Arterial Sistêmica (HAS)</label>
        </div>

        <div>
          <input className="form-check-input" name="insuficiencia" type="checkbox" {...register('insuficiencia')} />
          <label className="form-check-label">Insuficiência Renal Crônica (IRS)</label>
        </div>

        <div>
          <input className="form-check-input" name="neoplasias" type="checkbox" {...register('neoplasias')} />
          <label className="form-check-label">Neoplasias</label>
        </div>

        <div>
          <input className="form-check-input" name="obesidade" type="checkbox" {...register('obesidade')} />
          <label className="form-check-label">Obesidade</label>
        </div>

        <div>
          <input className="form-check-input" name="doencasresp" type="checkbox" {...register('doencasresp')} />
          <label className="form-check-label">Doenças Respiratórias</label>
        </div>

        <div>
          <input className="form-check-input" name="cardiopatias" type="checkbox" {...register('cardiopatias')} />
          <label className="form-check-label">Cardiopatias</label>
        </div>

        <div>
          <input className="form-check-input" name="outras" type="checkbox" {...register('outras')} />
          <label className="form-check-label">Outras</label>
        </div>


        <fieldset className="col-md-4">
          <legend className="col-form-label">Alergias:</legend>
          <div className="col-sm-10">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gridRadios" value="sim" {...register('alergia')} />
              <label className="form-check-label">
                Sim
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gridRadios" value="nao" {...register('alergia')} />
              <label className="form-check-label">
                Não
              </label>
            </div>
          </div>
        </fieldset>

        <fieldset className="col-md-4">
          <legend className="col-form-label">Ciclo Menstrual:</legend>
          <div className="col-sm-10">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gridRadios" value="regular" {...register('ciclo_menstrual')} />
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

        <fieldset className="col-md-4">
          <legend className="col-form-label">Uso de Medicamentos:</legend>
          <div className="col-sm-10">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gridRadios" value="sim" {...register('medicamentos')} />
              <label className="form-check-label">
                Sim
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gridRadios" value="nao" {...register('medicamentos')} />
              <label className="form-check-label">
                Não
              </label>
            </div>
          </div>
        </fieldset>



        <div className='row g-2 ms-3 mt-1'>

          <div className='col-md-1 offset-md-9' >
            <button type='submit' className='btncadastro'  >Próxima Página</button>

          </div>
        </div>

      </form>
    </>
  )
}
