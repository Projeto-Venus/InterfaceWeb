import React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './formpersonalbackground.css';
import { useStateMachine } from 'little-state-machine';
import updateActions from '../../pages/DatacomplementaryPage/updateActions';
import schema from './validation';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Formpersonalbackground(props) {


  const { actions, state } = useStateMachine({ updateActions })
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: state.yourDetail, resolver:yupResolver(schema)
  });



  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };


  const onSubmit = (data) => {
    actions.updateActions(data)
    console.log(data)
    props.event()
  }



  return (
    <>


      <form className='row g-3 ms-4 mt-3' onSubmit={handleSubmit(onSubmit)} >
        
          <h4>Antecedentes Pessoais e/ou problemas atuais</h4>
      
          <strong>Doenças Crônicas:</strong>
      
        <div className="col-md-6 mt-2">
          <input className="form-check-input" name="diabetes" type="checkbox" {...register("diabetes")} />
          <label className="form-check-label ms-3">Diabetes Mellitus (DM)</label>
        </div>

        <div className="col-md-6 mt-2">
          <input className="form-check-input" name="hipertensao" type="checkbox" {...register('hipertensao')} />
          <label className="form-check-label ms-3">Hipertenção Arterial Sistêmica (HAS)</label>
        </div>

        <div className="col-md-6 mt-2">
          <input className="form-check-input" name="insuficiencia" type="checkbox" {...register('insuficiencia')} />
          <label className="form-check-label ms-3">Insuficiência Renal Crônica (IRS)</label>
        </div>

        <div className="col-md-6 mt-2">
          <input className="form-check-input" name="epilepsia" type="checkbox" {...register('epilepsia')} />
          <label className="form-check-label ms-3">Epilepsia</label>
        </div>

        <div className="col-md-6 mt-2">
          <input className="form-check-input" name="sifilis" type="checkbox" {...register('sifilis')} />
          <label className="form-check-label ms-3">Sífilis</label>
        </div>

        <div className="col-md-6 mt-2">
          <input className="form-check-input" name="tuberculose" type="checkbox" {...register('tuberculose')} />
          <label className="form-check-label ms-3">Tuberculose</label>
        </div>

  
        <div className="col-md-6 mt-2">
          <input className="form-check-input" name="malaria" type="checkbox" {...register('malaria')} />
          <label className="form-check-label ms-3">Malária</label>
        </div>

        <div className="col-md-6 mt-2">
          <input className="form-check-input" name="rubeola" type="checkbox" {...register('rubeola')} />
          <label className="form-check-label ms-3">Rúbeola</label>
        </div>

        <div className="col-md-6 mt-2">
          <input className="form-check-input" name="obesidade" type="checkbox" {...register('obesidade')} />
          <label className="form-check-label ms-3">Obesidade</label>
        </div>

        <div className="col-md-6 mt-2">
          <input className="form-check-input" name="doencas_resp" type="checkbox" {...register('doencas_resp')} />
          <label className="form-check-label ms-3">Doenças Respiratórias</label>
        </div>

        <div className="col-md-6 mt-2">
          <input className="form-check-input" name="hanseniase" type="checkbox" {...register('hanseniase')} />
          <label className="form-check-label ms-3">Hanseníase</label>
        </div>

        <div className="col-md-6 mt-2">
          <input className="form-check-input" name="cardio" type="checkbox" {...register('cardio')} />
          <label className="form-check-label ms-3">Cardiopatias</label>
        </div>

        <div className="col-md-6 mt-2">
          <input className="form-check-input" name="infeccao_urinaria" type="checkbox" {...register('infeccao_urinaria')} />
          <label className="form-check-label ms-3">Infecção do trato urinário</label>
        </div>

        <div className="col-md-6 mt-2">
          <input className="form-check-input" name="hemorragia" type="checkbox" {...register('hemorragia')} />
          <label className="form-check-label ms-3">Hemorragia/sangramento</label>
        </div>

        <div className="col-md-6 mt-2">
          <input className="form-check-input" name="doencas_neurologicas" type="checkbox" {...register('doencas_neurologicas')} />
          <label className="form-check-label ms-3">Doenças neurológicas e psiquiátricas</label>
        </div>

        <div className="col-md-6 mt-2">
          <input className="form-check-input" name="doencas_neoplasicas" type="checkbox" {...register('doencas_neoplasicas')} />
          <label className="form-check-label ms-3">Doenças neoplásicas</label>
        </div>

        
        <div className="col-md-6 mt-2">
          <input className="form-check-input" name="portadora_hiv" type="checkbox" {...register('portadora_hiv')} />
          <label className="form-check-label ms-3">Portadora de infecção HIV</label>
        </div>

        <div className="col-md-6 mt-2">
          <input className="form-check-input" name="dificuldade_visao" type="checkbox" {...register('dificuldade_visao')} />
          <label className="form-check-label ms-3">Dificuldade de adaptar visão a noite</label>
        </div>

        
        <div className="col-md-6 mt-2">
          <input className="form-check-input" name="covid" type="checkbox" {...register('covid')} />
          <label className="form-check-label ms-3">COVID-19</label>
        </div>

        
        <div className="col-md-6 mt-2">
          <input className="form-check-input" name="transfusoes" type="checkbox" {...register('transfusoes')} />
          <label className="form-check-label ms-3">Transfusões de sangue</label>
        </div>

      
        <div className="col-md-12 mt-2">
          <input className="form-check-input" name="tireoide" type="checkbox" {...register('tireoide')} />
          <label className="form-check-label ms-3">Doenças de tireóide e outras endocrinopatias</label>
        </div>

        <div className="col-md-12 mt-2">
          <input className="form-check-input" name="anemias" type="checkbox" {...register('anemias')} />
          <label className="form-check-label ms-3">Anemias e deficiências de nutrientes específicos</label>
        </div>

        <div className="col-md-12 mt-2">
          <input className="form-check-input" name="outras" type="checkbox" {...register('outras')} />
          <label className="form-check-label ms-3">Outras Doenças</label>
        </div>


        <fieldset className="col-md-3">
          <legend className="col-form-label">Alergias:</legend>
          <div className="col-sm-10">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="alergia" value="sim"  {...register('alergia')} />
              <label className="form-check-label">
                Sim
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="alergia" value="nao" {...register('alergia')} />
              <label className="form-check-label">
                Não
              </label>
            </div>

          </div>
        </fieldset>
        <span>{errors.alergia?.message}</span>

        <fieldset className="col-md-3">
          <legend className="col-form-label">Uso de Medicamentos:</legend>
          <div className="col-sm-10">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="medicamentos" value="sim" {...register('medicamentos')} />
              <label className="form-check-label">
                Sim
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="medicamentos" value="nao" {...register('medicamentos')} />
              <label className="form-check-label">
                Não
              </label>
            </div>
          </div>
        </fieldset>
        <span>{errors.medicamentos?.message}</span>

          <div className='col-md-8 offset-8' >
            <button type='submit' className='btn-main'  >Salvar</button>

          </div>     
      </form>
    </>
  )
}
