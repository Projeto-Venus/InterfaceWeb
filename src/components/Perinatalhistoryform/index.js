import React from 'react'
import { render } from 'react-dom'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import './perinatalform.css';


export default function Perinatalhistoryform(props) {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const [inputFields, setInputFields] = useState([
        { data: '', campo2: '', tipoParto: '', estadoAtual: '' },


    ])

    const handleInputChange = (index, e) => {
        e.preventDefault();
        const values = [...inputFields];
        values[index][e.target.name] = e.target.value;
        setInputFields(values)
        props.event()
        console.log(index, e.target.name)
    }

    const handleSubmitt = (e) => {
        e.preventDefault();
        console.log('InputFild', inputFields)
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { data: '', campo2: '', tipoParto: '', estadoAtual: '' }])
    }

    const handleRemoveFields = (index) => {
        const values = [...inputFields]
        values.splice(index, 1)
        setInputFields(values)

    }
    return (
        <>
            <form onSubmit={handleInputChange} >
                <div className='perinatal-content'>
                    <table className="table table-bordered " style={{ border: "3px solid #BAADF1", borderTop: "none" }} >
                        <thead style={{ border: "3px solid #BAADF1" }} >
                            <tr>
                                <th colSpan="4" style={{ textAlign: "center" }}><h5>Antecedentes Perinatais</h5></th>
                            </tr>

                            <tr style={{ textAlign: "center" }}>
                                <th>Nº/Data</th>
                                <th>Evolução/Nativivo/Natimorto/Aborto</th>
                                <th>Tipo de Parto</th>
                                <th>Estado atual do concepto</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className='td-content'>
                                <td><input className='form-control' type='date' name='data_nasc' /></td>
                                <td><input className='form-control' type="text" /></td>
                                <td><input className='form-control' type="text" /></td>
                                <td><input className='form-control' type="text" /></td>
                            </tr>

                            {inputFields.map((inputField, index) => (
                                <tr key={index}>

                                    <td><input className='form-control' type='date' name='data' value={inputField.data} onChange={e => handleInputChange(index, e)} /></td>
                                    <td><input className='form-control' type="text" name='campo2' value={inputField.campo2} onChange={e => handleInputChange(index, e)} /></td>
                                    <td><input className='form-control' type="text" name='tipoParto' value={inputField.tipoParto} onChange={e => handleInputChange(index, e)} /></td>
                                    <td><input className='form-control' type="text" name='estadoAtual' value={inputField.estadoAtual} onChange={e => handleInputChange(index, e)} /></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                    <div>
                        <button type='button' className='btn btn-primary' onClick={handleAddFields}>[Nova Linha]</button>

                    </div>
                    <div className='row g-3 ms-3 mt-3'>
                        <div className='col-md-5 '>
                            <button type='button' className='btncadastro' onClick={() => props.event2()}  >Voltar Página</button>
                        </div>

                        <div className='col-md-4 offset-md-3' >
                            <button type='submit' className='btncadastro' >Próxima Página</button>
                        </div>
                    </div>

                </div>
            </form>
        </>
    )
}