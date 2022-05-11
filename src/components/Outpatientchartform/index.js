import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { StateMachineProvider, createStore, useStateMachine } from 'little-state-machine';
import updateActions from '../pages/DatacomplementaryPage/updateActions';

export default function Outpatientchartform(props) {

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
            <form >
                <div className='row g-3 ms-1'>
                    <h4>Prontuário Ambulatorial</h4>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">História da doença atual</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Interrogatório Sintomatológico</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>


                    <div className='row g-3 ms-3 mt-3'>
                        <div className='col-md-5 '>
                            <button type='button' className='btncadastro' onClick={() => props.event2()}  >Voltar Página</button>
                        </div>

                        <div className='col-md-4 offset-md-3' >
                            <button type='submit' className='btncadastro' >Salvar Dados</button>
                        </div>
                    </div>

                </div>

            </form>



        </>
    )
}