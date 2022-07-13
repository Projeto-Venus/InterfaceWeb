import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateActions from '../../pages/DatacomplementaryPage/updateActions';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validation';

export default function Sexualhistoryform(props) {

    const { actions, state } = useStateMachine({ updateActions })
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: state.yourDetail , resolver:yupResolver(schema)
    });

    const onValue = (data) => {
        actions.updateActions(data)
        props.event()
        console.log(data)

    }

    return (
        <>
            <form onSubmit={handleSubmit(onValue)}>
                <div className='row g-2 ms-4 mt-1'>
                    <h4>Histórial Sexual</h4>
                   

                    <fieldset className="col-md-4">
                        <legend className="col-form-label">Atividade Sexual:</legend>
                        <div className="col-sm-10">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="atividade_sex" value="nao"  {...register('atividade_sex')} />
                                <label className="form-check-label">
                                    Não mantém atividade Sexual
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="atividade_sex" value="nunca" {...register('atividade_sex')} />
                                <label className="form-check-label">
                                    Nunca Teve
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="atividade_sex" value="regular1" {...register('atividade_sex')} />
                                <label className="form-check-label">
                                    Atividade regular com parceiro estável
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="atividade_sex" value="regular2" {...register('atividade_sex')} />
                                <label className="form-check-label">
                                    Atividade regular com parceiros variados
                                </label>
                            </div>
                        </div>
                        <span>{errors.atividade_sex?.message}</span>
                    </fieldset>

                    <fieldset className="col-md-4">
                        <legend className="col-form-label">Homossexualismo</legend>
                        <div className="col-sm-10">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="homossex" value="sim"  {...register('homossex')} />
                                <label className="form-check-label">
                                    Sim
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="homossex" value="nao" {...register('homossex')} />
                                <label className="form-check-label">
                                    Não
                                </label>
                            </div>
                        </div>
                        <span>{errors.homossex?.message}</span>
                    </fieldset>

                    <h4>Saúde da Mulher</h4>
                  
                    <fieldset className="col-md-4 ms-3">
                                <legend className="col-form-label">Menarca</legend>
                                <div className="col-sm-10">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="historia_menarca" value="sim"
                                            {...register('historia_menarca')} />
                                        <label className="form-check-label">
                                            Sim
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="historia_menarca" value="nao"
                                            {...register('historia_menarca')} />
                                        <label className="form-check-label">
                                            Não
                                        </label>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset className="col-md-4 ms-3">
                                <legend className="col-form-label">Gestação</legend>
                                <div className="col-sm-10">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="historia_gestacao" value="sim"
                                         {...register('historia_gestacao')} />
                                        <label className="form-check-label">
                                            Sim
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="historia_gestacao" value="nao" 
                                        {...register('historia_gestacao')} />
                                        <label className="form-check-label">
                                            Não
                                        </label>
                                    </div>
                                </div>
                                <span>{errors.historia_gestacao?.message}</span>
                            </fieldset>

                            <fieldset className="col-md-3 ms-3">
                                <legend className="col-form-label">Riscos gravídicos</legend>
                                <div className="col-sm-10">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="riscos_gravidicos" value="sim" 
                                        {...register('riscos_gravidicos')} />
                                        <label className="form-check-label">
                                            Sim
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="riscos_gravidicos" value="nao" 
                                        {...register('riscos_gravidicos')} />
                                        <label className="form-check-label">
                                            Não
                                        </label>
                                    </div>
                                </div>
                                <span>{errors.riscos_gravidicos?.message}</span>
                            </fieldset>

                            <fieldset className="col-md-4  ms-3">
                                <legend className="col-form-label">Menopausa</legend>
                                <div className="col-sm-10">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="historia_menopausa" value="sim" 
                                        {...register('historia_menopausa')} />
                                        <label className="form-check-label">
                                            Sim
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="historia_menopausa" value="nao" 
                                        {...register('historia_menopausa')} />
                                        <label className="form-check-label">
                                            Não
                                        </label>
                                    </div>
                                </div>
                                <span>{errors.historia_menopausa?.message}</span>
                            </fieldset>

                            <fieldset className="col-md-4 ms-3 ">
                                <legend className="col-form-label">Prevenção CA ginecológico</legend>
                                <div className="col-sm-10">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="prevencao_ca" value="sim"
                                            {...register('prevencao_ca')} />
                                        <label className="form-check-label">
                                            Sim
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="prevencao_ca" value="nao"
                                            {...register('prevencao_ca')} />
                                        <label className="form-check-label">
                                            Não
                                        </label>
                                    </div>
                                </div>
                                <span>{errors.prevencao_ca?.message}</span>
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

