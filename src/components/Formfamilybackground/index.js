import React from 'react';
import { useForm } from 'react-hook-form';
import { useStateMachine, StateMachineProvider } from 'little-state-machine';
import updateActions from '../pages/DatacomplementaryPage/updateActions';


export default function Formfamilybackground(props) {

    const { actions, state } = useStateMachine({ updateActions })
    const { register, handleSubmit } = useForm({
        defaultValues: state.yourDetail
    });

    const onValue = (data) => {
        actions.updateActions(data)
        console.log(data)
        props.event()
    }

    return (

        <>
            <form className='row g-2 ms-5' onSubmit={handleSubmit(onValue)} >
                <h4>Antecedentes Familiares (citar grau de parentesco)</h4>

                <div className="col-md-12 mt-3">
                    <input className="form-check-input" name="diabetemellitus_fa" type="checkbox" {...register('diabetemellitus_fa')} />
                    <label className="form-check-label">Diabetes Mellitus (DM)</label>
                </div>

                <div className="col-md-12 mt-4">
                    <input className="form-check-input" name="hipertencao_fa" type="checkbox" {...register('hipertencao_fa')} />
                    <label className="form-check-label">Hipertenção Arterial Sistêmica (HAS)</label>
                </div>

                <div className="col-md-12 mt-4">
                    <input className="form-check-input" name="insuficiencia_fa" type="checkbox" {...register('insuficiencia_fa')} />
                    <label className="form-check-label">Insuficiência Renal Crônica (IRS)</label>
                </div>

                <div className="col-md-12 mt-4">
                    <input className="form-check-input" name="neoplasias_fa" type="checkbox" {...register('neoplasias_fa')} />
                    <label className="form-check-label">Neoplasias</label>
                </div>

                <div className="col-md-12 mt-4">
                    <input className="form-check-input" name="obesidade_fa" type="checkbox" {...register('obesidade_fa')} />
                    <label className="form-check-label">Obesidade</label>
                </div>

                <div className="col-md-12 mt-4">
                    <input className="form-check-input" name="doencas_resp_fa" type="checkbox" {...register('doencas_resp_fa')} />
                    <label className="form-check-label">Doenças Respiratórias</label>
                </div>

                <div className="col-md-12 mt-4">
                    <input className="form-check-input" name="cardiopatias_fa" type="checkbox" {...register('cardiopatias_fa')} />
                    <label className="form-check-label">Cardiopatias</label>
                </div>

                <div className="col-md-12 mt-4">
                    <input className="form-check-input" name="outras_fa" type="checkbox" {...register('outras_fa')} />
                    <label className="form-check-label">Outras</label>
                </div>

                <div className='row g-3 ms-3 mt-3'>
                    <div className='col-md-5 '>
                        <button type='button' className='btncadastro' onClick={() => props.event2()}  >Voltar Página</button>
                    </div>

                    <div className='col-md-4 offset-md-2' >
                        <button type='submit' className='btncadastro' >Próxima Página</button>
                    </div>
                </div>

            </form>



        </>
    )
}

