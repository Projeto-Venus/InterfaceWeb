import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateActions from '../../pages/DatacomplementaryPage/updateActions'
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validation';

export default function Outpatientchartform(props) {

    const { actions, state } = useStateMachine({ updateActions })
    const { register, handleSubmit , formState:{errors} } = useForm({
        defaultValues: state.yourDetail ,resolver:yupResolver(schema)
    });


    const onValue = (data) => {
        
        actions.updateActions(data)
        props.event()

    }

    return (
        <>
            <form onSubmit={handleSubmit(onValue)} >
                <div className='row g-3 ms-1'>
                    <h4>Ambulatorial</h4>
                    <div className="mb-3">
                        <label className="form-label">Queixa Principal(motivo consulta)</label>
                        <textarea {...register('queixa')} name='queixa'  className="form-control" rows="3"></textarea>
                        <span>{errors.queixa?.message}</span>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">História da doença atual</label>
                        <textarea {...register('historia')} name='historia' className="form-control" rows="3"></textarea>
                        <span>{errors.historia?.message}</span>
                    </div>

                    <div className="mb-3">
                        <label  className="form-label">Interrogatório Sintomatológico</label>
                        <textarea {...register('interrogatorio')} name='interrogatorio' className="form-control" rows="3"></textarea>
                        <span>{errors.interrogatorio?.message}</span>
                    </div>


                    <div className='row g-3 ms-3 mt-3'>
                        <div className='col-md-5 '>
                            <button type='button' className='btn-main' onClick={() => props.event2()}  >Voltar Página</button>
                        </div>

                        <div className='col-md-4 offset-md-3' >
                            <button type='submit' className='btn-main' >Salvar</button>
                        </div>
                    </div>

                </div>

            </form>



        </>
    )
}