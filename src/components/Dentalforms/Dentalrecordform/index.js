import React from 'react'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateActions from '../../pages/OdontoPage/updateActions';
import './dentalrecordform.css'
import schema from './validation';
import { yupResolver } from '@hookform/resolvers/yup';


export default function Dentalrecordform(props) {
    const { actions, state } = useStateMachine({ updateActions })
    const { register, handleSubmit, formState:{errors} } = useForm({
        defaultValues: state.yourDetail, resolver:yupResolver(schema)
    });


    const onValue = (data) => {
        actions.updateActions(data)
        console.log(data)
        props.nextstep()
    }

    return (
        <>
            <form className='dentalrecord-form' onSubmit={handleSubmit(onValue)}>
                <div className='row g-2 ms-1 mt-1'>
                    <h4>ANAMNESE</h4>

                    <fieldset className="col-md-5 ms-3">
                        <legend className="col-form-label">Possui problema sistêmico:</legend>
                        <div className="col-sm-10">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="prob_sistemico" value="sim"
                                    {...register('prob_sistemico')} />
                                <label className="form-check-label">
                                    Sim
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="prob_sistemico" value="nao"
                                    {...register('prob_sistemico')} />
                                <label className="form-check-label">
                                    Não
                                </label>
                            </div>
                        </div>
                        <span>{errors.prob_sistemico?.message}</span>
                    </fieldset>

                    <fieldset className="col-md-5 ">
                        <legend className="col-form-label">Possui alguma medicação rotineira:</legend>
                        <div className="col-sm-10">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="medicacao" value="regular" {...register('medicacao')} />
                                <label className="form-check-label">
                                    Sim
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="medicacao" value="irregular" {...register('medicacao')} />
                                <label className="form-check-label">
                                    Não
                                </label>
                            </div>
                        </div>
                        <span>{errors.medicacao?.message}</span>
                    </fieldset>

                    <fieldset className="col-md-5  ms-3">
                        <legend className="col-form-label">Hipersensibilidade a medicamento:</legend>
                        <div className="col-sm-10">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="hipersensibilidade" value="sim" {...register('hipersensibilidade')} />
                                <label className="form-check-label">
                                    Sim
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="hipersensibilidade" value="nao" {...register('hipersensibilidade')} />
                                <label className="form-check-label">
                                    Não
                                </label>
                            </div>
                        </div>
                        <span>{errors.hipersensibilidade?.message}</span>
                    </fieldset>

                    <fieldset className="col-md-5 ">
                        <legend className="col-form-label">Hipersensibilidade a anestésico local:</legend>
                        <div className="col-sm-10">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="hipersen_anestesico" value="sim" {...register('hipersen_anestesico')} />
                                <label className="form-check-label">
                                    Sim
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="hipersen_anestesico" value="nao" {...register('hipersen_anestesico')} />
                                <label className="form-check-label">
                                    Não
                                </label>
                            </div>
                        </div>
                        <span>{errors.hipersen_anestesico?.message}</span>
                    </fieldset>

                    <fieldset className="col-md-4  ms-3">
                        <legend className="col-form-label">História de hemorragia:</legend>
                        <div className="col-sm-10">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="hemorragia" value="sim"
                                    {...register('hemorragia')} />
                                <label className="form-check-label">
                                    Sim
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="hemorragia" value="nao"
                                    {...register('hemorragia')} />
                                <label className="form-check-label">
                                    Não
                                </label>
                            </div>
                        </div>
                        <span>{errors.hemorragia?.message}</span>
                    </fieldset>


                    <div className='row g-4 ms-2 mt-4'>
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