import React from 'react'
import { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import { FaTooth } from 'react-icons/fa';
import './dentalform.css'
import updateActions from '../../pages/OdontoPage/updateActions';

export default function Dentalform(props) {
    const { actions, state } = useStateMachine({ updateActions })
    const { register, handleSubmit, control } = useForm({
        defaultValues: state.yourDetail
    });

    const [icons, setIcons] = useState([[18, 17, 16, 15, 14, 13, 12, 11], [21, 22, 23, 24, 25, 26, 27, 28], [48, 47, 46, 45, 44, 43, 42, 41],
    [31, 32, 33, 34, 35, 36, 37, 38], [55, 54, 53, 52, 51], [61, 62, 63, 64, 65], [71, 72, 73, 74, 75], [85, 84, 83, 82, 81]])
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'dentes'
    })




    const Button = ({ action, action2 }) => {
        const [handle, setHandle] = useState(false)


        const onClickOne = () => {
            setHandle(true)
            console.log(action)


        };

        return (

            handle ? <h3> <FaTooth style={{ color: 'blue' }} onClick={()=>onClickOne} /></h3>
                : <h3> <FaTooth style={{ color: 'GrayText' , borderColor:'GrayText'}} onClick={()=>onClickOne} /></h3>

        );
    }


    const onValue = (data) => {
        actions.updateActions(data)
        console.log(data)
        props.nextstep()

    }

    return (
        <>
            <form onSubmit={handleSubmit(onValue)} className='row g-2 ms-3 mt-1'  >
                <h4 >Ficha Odontólogica</h4>
                <h4>1º Exame</h4>
                <div className='form-table'>
                   
                    <div className='container' style={{marginRight:'-30px'}}>

                        <div className='list-1'>
                            {icons[0].map((item, index) => (
                                <ul key={item.id}>
                                    <li type='none'>
                                    <label>{item}</label>
                                        <Button action={item} action2={index} />
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className='list-2'>
                            {icons[2].map((item, index) => (

                                <ul key={item.id}>
                                    <li type='none'>
                                    <label>{item}</label>
                                        <Button action={item} action2={index} />
                                    </li>

                                </ul>
                            ))}
                        </div>
                        <div className='list-5'>
                            {icons[4].map((item, index) => (
                                 
                                 <ul key={item.id}>
                                 <li type='none'>
                                 <label>{item}</label>
                                     <Button action={item} action2={index} />
                                 </li>

                             </ul>
                            ))}
                        </div>
                        <div className='list-8'>
                            {icons[7].map((item, index) => (
                                <ul key={item.id}>
                                    <li type='none'>
                                    <label>{item}</label>
                                        <Button action={item} action2={index} />
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>

                    <div className='container' style={{marginLeft:'-30px'}}>
                        <div className='list-3'>
                            {icons[1].map((item, index) => (
                                <ul  key={item.id}>
                                    <li type='none'>
                                    <label>{item}</label>
                                        <Button action={item} action2={index} />
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className='list-4'>
                            {icons[3].map((item, index) => (
                                <ul  key={item.id}>
                                    <li type='none'>
                                    <label>{item}</label>
                                        <Button action={item} action2={index} />
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className='list-9'>
                            {icons[5].map((item, index) => (
                                <ul  key={item.id}>
                                    <li type='none'>
                                    <label>{item}</label>
                                        <Button action={item} action2={index} />
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className='list-10'>
                            {icons[6].map((item, index) => (
                                <ul  key={item.id}>
                                    <li type='none'>
                                    <label>{item}</label>
                                        <Button action={item} action2={index} />
                                    </li>
                                </ul>
                            ))}
                        </div>

                    </div>

                </div>

                <h4>2º Exame</h4>
                <div className='form-table'>
                   
                    <div className='container '  style={{marginRight:'-30px'}}>

                        <div className='list-1'>
                            {icons[0].map((item, index) => (
                                <ul key={item.id}>
                                    <li type='none'>
                                    <label>{item}</label>
                                        <Button action={item} action2={index} />
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className='list-2'>
                            {icons[2].map((item, index) => (

                                <ul key={item.id}>
                                    <li type='none'>
                                    <label>{item}</label>
                                        <Button action={item} action2={index} />
                                    </li>

                                </ul>
                            ))}
                        </div>
                        <div className='list-5'>
                            {icons[4].map((item, index) => (
                                 
                                 <ul key={item.id}>
                                 <li type='none'>
                                 <label>{item}</label>
                                     <Button action={item} action2={index} />
                                 </li>

                             </ul>
                            ))}
                        </div>
                        <div className='list-8'>
                            {icons[7].map((item, index) => (
                                <ul key={item.id}>
                                    <li type='none'>
                                    <label>{item}</label>
                                        <Button action={item} action2={index} />
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>

                    <div className='container' style={{marginLeft:'-30px'}}>
                        <div className='list-3'>
                            {icons[1].map((item, index) => (
                                <ul  key={item.id}>
                                    <li type='none'>
                                    <label>{item}</label>
                                        <Button action={item} action2={index} />
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className='list-4'>
                            {icons[3].map((item, index) => (
                                <ul  key={item.id}>
                                    <li type='none'>
                                    <label>{item}</label>
                                        <Button action={item} action2={index} />
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className='list-9'>
                            {icons[5].map((item, index) => (
                                <ul  key={item.id}>
                                    <li type='none'>
                                    <label>{item}</label>
                                        <Button action={item} action2={index} />
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className='list-10'>
                            {icons[6].map((item, index) => (
                                <ul  key={item.id}>
                                    <li type='none'>
                                    <label>{item}</label>
                                        <Button action={item} action2={index} />
                                    </li>
                                </ul>
                            ))}
                        </div>

                    </div>

                </div>

                <div className='row g-3 ms-3 mt-3'>
                    <div className='col-md-5 '>
                        <button type='button' className='btn-main' onClick={() => props.back()}  >Voltar Página</button>
                    </div>

                    <div className='col-md-4 offset-md-3' >
                        <button type='submit' className='btn-main' >Próxima Página</button>
                    </div>
                </div>
            </form>
        </>
    )
}