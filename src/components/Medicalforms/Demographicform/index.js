import React from 'react';

import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateActions from '../../pages/DatacomplementaryPage/updateActions';
import schema from './validation';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Demographicform(props) {

    const { actions, state } = useStateMachine({ updateActions })
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: state.yourDetail, resolver:yupResolver(schema)
    });


    const onValue = (data) => {
        actions.updateActions(data)
        console.log(data)
        props.event()

    }


    return (
        <form onSubmit={handleSubmit(onValue)} >
            <div className='row g-3 ms-4 mt-3'>
                <h4>Dados demográficos</h4>

                <fieldset className="col-md-6">
                    <legend className="col-form-label">Grau de instrução/escolaridade:</legend>
                    <div className="col-sm-10">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="grau_escolar" value="nao_ler"
                                {...register('grau_escolar')}  />
                            <label className="form-check-label">
                                Não sabe ler nem escrever
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="grau_escolar" value="fundamental_inc"
                                {...register('grau_escolar')} />
                            <label className="form-check-label">
                                Ensino fundamental incompleto
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="grau_escolar" value="fundamental_comp"
                                {...register('grau_escolar')} />
                            <label className="form-check-label">
                                Ensino fundamental completo
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="grau_escolar" value="medio_inc"
                                {...register('grau_escolar')} />
                            <label className="form-check-label">
                                Ensino médio incompleto
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="grau_escolar" value="medio_comp"
                                {...register('grau_escolar')} />
                            <label className="form-check-label">
                                Ensino médio completo
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="grau_escolar" value="superior_inc"
                                {...register('grau_escolar')} />
                            <label className="form-check-label">
                                Superior incompleto
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="grau_escolar" value="superior_comp"
                                {...register('grau_escolar')} />
                            <label className="form-check-label">
                                Superior completo
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="grau_escolar" value="pos_graduacao"
                                {...register('grau_escolar')} />
                            <label className="form-check-label">
                                Pós-graduação
                            </label>
                        </div>
                    </div>
                    <span>{errors.grau_escolar?.message}</span>
                </fieldset>
               

                <div className="col-md-5 mt-3">
                    <label className='form-label'>Profissão/Ocupação</label>
                    <input className='form-control' type="text" inputMode="text" name='profissao'
                        {...register("profissao")} />
                        <span>{errors.profissao?.message}</span>
                </div>


                <fieldset className="col-md-4">
                    <legend className="col-form-label">Estado civil:</legend>
                    <div className="col-sm-10">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="estado_civil" value="solteira"
                                {...register('estado_civil')} checked />
                            <label className="form-check-label">
                                Solteira
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="estado_civil" value="casada"
                                {...register('estado_civil')} />
                            <label className="form-check-label">
                                Casada
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="estado_civil" value="com_companheiro"
                                {...register('estado_civil')} />
                            <label className="form-check-label">
                                Mora com companheiro
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="estado_civil" value="divorciada"
                                {...register('estado_civil')} />
                            <label className="form-check-label">
                                Divorciada
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="estado_civil" value="viuva"
                                {...register('estado_civil')} />
                            <label className="form-check-label">
                                Viúva
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="estado_civil" value="separada"
                                {...register('estado_civil')} />
                            <label className="form-check-label">
                                Separada
                            </label>
                        </div>
                    </div>
                </fieldset>

                <fieldset className="col-md-4">
                    <legend className="col-form-label">Renda Familiar:</legend>
                    <div className="col-sm-10">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="renda_familiar" value="menor_1sm"
                                {...register('renda_familiar')}  />
                            <label className="form-check-label">
                                ≤ 1SM
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="renda_familiar" value="1-2sm"
                                {...register('renda_familiar')} />
                            <label className="form-check-label">
                                1-2 SM
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="renda_familiar" value="2-4sm"
                                {...register('renda_familiar')} />
                            <label className="form-check-label">
                                2-4 SM
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="renda_familiar" value="5-7sm"
                                {...register('renda_familiar')} />
                            <label className="form-check-label">
                                5-7 SM
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="renda_familiar" value="maior_8sm"
                                {...register('renda_familiar')} />
                            <label className="form-check-label">
                                ≥8 SM
                            </label>
                        </div>
                    </div>
                    <span>{errors.renda_familiar?.message}</span>
                </fieldset>

                <fieldset className="col-md-4">
                    <legend className="col-form-label">Condições de moradia da casa:</legend>
                    <div className="col-sm-10">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="moradia" value="taipa"
                                {...register('moradia')} checked />
                            <label className="form-check-label">
                                Taipa
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="moradia" value="alvenaria"
                                {...register('moradia')} />
                            <label className="form-check-label">
                                Alvenaria
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="moradia" value="madeira"
                                {...register('moradia')} />
                            <label className="form-check-label">
                                Madeira
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="moradia" value="propria"
                                {...register('moradia')} />
                            <label className="form-check-label">
                                Própia
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="moradia" value="alugada"
                                {...register('moradia')} />
                            <label className="form-check-label">
                                Alugada
                            </label>
                        </div>

                    </div>
                </fieldset>
                <div className="col-md-4 mt-4">
                    <label className='form-label'>Nº de cômodos da casa</label>
                    <div className="col-md-3">
                        <input className='form-control' type="number" inputMode="number" name='comodos' {...register("comodos")} />
                    </div>
                    <span>{errors.comodos?.message}</span>
                </div>


                <fieldset className="col-md-4">
                    <legend className="col-form-label">A água do seu domícilio é:</legend>
                    <div className="col-sm-10">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="tipo_agua" value="encadanda"
                                {...register('tipo_agua')} />
                            <label className="form-check-label">
                                Encanada
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="tipo_agua" value="poco"
                                {...register('tipo_agua')} />
                            <label className="form-check-label">
                                Poço artesiano
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="tipo_agua" value="cisterna"
                                {...register('tipo_agua')} />
                            <label className="form-check-label">
                                Cisterna
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="tipo_agua" value="rio"
                                {...register('tipo_agua')} />
                            <label className="form-check-label">
                                Rio
                            </label>
                        </div>
                    </div>
                    <span>{errors.tipo_agua?.message}</span>
                </fieldset>

                <fieldset className="col-md-4">
                    <legend className="col-form-label">Rede de esgoto no domícilio:</legend>
                    <div className="col-sm-10">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="rede_esgoto" value="sim"
                                {...register('rede_esgoto')} checked />
                            <label className="form-check-label">
                                Sim
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="rede_esgoto" value="nao"
                                {...register('rede_esgoto')} />
                            <label className="form-check-label">
                                Não
                            </label>
                        </div>
                    </div>
                    <span>{errors.rede_esgoto?.message}</span>
                </fieldset>

                <fieldset className="col-md-7">
                    <legend className="col-form-label">Coleta de lixo no domícilio:</legend>
                    <div className="col-sm-10">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="coleta_lixo" value="sim"
                                {...register('coleta_lixo')} checked />
                            <label className="form-check-label">
                                Sim
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="coleta_lixo" value="nao"
                                {...register('coleta_lixo')} />
                            <label className="form-check-label">
                                Não
                            </label>
                        </div>
                    </div>
                    <span>{errors.coleta_lixo?.message}</span>
                </fieldset>

              
                    <div className='col-md-8 '>
                        <button type='button' className='btn-main' onClick={() => props.event2()}  >Voltar Página</button>
                    </div>

                    <div className='col-md-3' >
                        <button type='submit' className='btn-main' >Salvar</button>
                    </div>
               

            </div>
        </form>
    )
}