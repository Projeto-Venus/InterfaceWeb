import React from 'react';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateActions from '../../pages/DatacomplementaryPage/updateActions'


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
            <form className='row g-3 ms-5 mt-2' onSubmit={handleSubmit(onValue)} >
                <h4>Antecedentes Familiares</h4>

                <div className="col-md-6 mt-2">
                    <input className="form-check-input" name="diabetes_fa" type="checkbox" {...register('diabetes_fa')} />
                    <label className="form-check-label ms-3">Diabetes Mellitus (DM)</label>
                </div>

                <div className="col-md-6 mt-2">
                    <input className="form-check-input" name="hipertencao_fa" type="checkbox" {...register('hipertencao_fa')} />
                    <label className="form-check-label ms-3">Hipertenção Arterial Sistêmica (HAS)</label>
                </div>

                <div className="col-md-6 mt-2">
                    <input className="form-check-input" name="insuficiencia_fa" type="checkbox" {...register('insuficiencia_fa')} />
                    <label className="form-check-label ms-3">Insuficiência Renal Crônica (IRS)</label>
                </div>

                <div className="col-md-6 mt-2">
                    <input className="form-check-input" name="neoplasias_fa" type="checkbox" {...register('neoplasias_fa')} />
                    <label className="form-check-label ms-3">Neoplasias</label>
                </div>

                <div className="col-md-6 mt-2">
                    <input className="form-check-input" name="obesidade_fa" type="checkbox" {...register('obesidade_fa')} />
                    <label className="form-check-label ms-3">Obesidade</label>
                </div>

                <div className="col-md-6 mt-2">
                    <input className="form-check-input" name="doencas_resp_fa" type="checkbox" {...register('doencas_resp_fa')} />
                    <label className="form-check-label ms-3">Doenças Respiratórias</label>
                </div>

                <div className="col-md-6 mt-2">
                    <input className="form-check-input" name="doenca_chagas" type="checkbox" {...register('doenca_chagas_fa')} />
                    <label className="form-check-label ms-3">Doença de Chagas</label>
                </div>

                <div className="col-md-6 mt-2">
                    <input className="form-check-input" name="cardio_fa" type="checkbox" {...register('cardio_fa')} />
                    <label className="form-check-label ms-3">Cardiopatias</label>
                </div>

                <div className="col-md-6 mt-2">
                    <input className="form-check-input" name="malformacoes" type="checkbox" {...register('malformacoes_fa')} />
                    <label className="form-check-label ms-3">Malformações congênitais</label>
                </div>

                <div className="col-md-6 mt-2">
                    <input className="form-check-input" name="cancer_mama" type="checkbox" {...register('cancer_mama_fa')} />
                    <label className="form-check-label ms-3">Câncer de Mama e/ou do colo uterino</label>
                </div>

                <div className="col-md-6 mt-2">
                    <input className="form-check-input" name="gemelaridade" type="checkbox" {...register('gemelaridade_fa')} />
                    <label className="form-check-label ms-3">Gemelaridade</label>
                </div>

                <div className="col-md-6 mt-2">
                    <input className="form-check-input" name="hanseniase" type="checkbox" {...register('hanseniase_fa')} />
                    <label className="form-check-label ms-3">hanseníase</label>
                </div>


                <div className="col-md-6 mt-2">
                    <input className="form-check-input" name="tuberculose" type="checkbox" {...register('tuberculose_fa')} />
                    <label className="form-check-label ms-3">Tuberculose</label>
                </div>

                <div className="col-md-6 mt-2">
                    <input className="form-check-input" name="outras_fa" type="checkbox" {...register('outras_fa')} />
                    <label className="form-check-label ms-3">Outras</label>
                </div>

                <div className='row g-5 mt-5'>
                    <div className='col-md-4'>
                        <button type='button' className='btn-main' onClick={() => props.event2()}  >Voltar Página</button>
                    </div>

                    <div className='col-md-3 offset-md-4 mt-5' >
                        <button type='submit' className='btn-main' >Próxima Página</button>
                    </div>
                </div>

            </form>



        </>
    )
}

