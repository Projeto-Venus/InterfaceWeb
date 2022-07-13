
import './HomePage.css';
import Footer from '../../Footer/index'
import { useNavigate } from 'react-router-dom';
import Headerhome from '../../Headerhome';
import Listgroup from '../../Listgroup';
import Logo from '../../../assets/logo-home.png'
import { CgFileDocument } from 'react-icons/cg'
import { RiHeartPulseLine } from 'react-icons/ri'
import { SiHandshake } from 'react-icons/si'
import { BiLocationPlus } from 'react-icons/bi'
import { BsGenderFemale } from 'react-icons/bs'
import { GiMedicalPackAlt } from 'react-icons/gi'
import { FaMicroscope } from 'react-icons/fa'


export default function HomePage() {

    return (

        <div className='content-home'>
            <Listgroup />

            <div className='content-homepage'>
            <Headerhome />
             

                <div className='actions'>
                    <h2>Ações rápidas</h2>

                    <div className='itens-actions'>

                        <div >
                            <h5><CgFileDocument /></h5>
                            <h6>Dados Demográficos</h6>
                        </div>
                        <div>
                            <h5><RiHeartPulseLine /></h5>
                            <h6>Dados Sáude</h6>
                        </div>
                        <div >
                            <h5> <SiHandshake /></h5>
                            <h6>Histórico Familiar</h6>
                        </div>
                        <div >

                            <h5> <BiLocationPlus /></h5>
                            <h6>Antecedentes ginecológicos</h6>
                        </div>
                        <div >

                            <h5><BsGenderFemale /></h5>
                            <h6>Dados reprodutivos</h6>
                        </div>
                        <div >

                            <h5><FaMicroscope /></h5>
                            <h6>Exames Físicos</h6>
                        </div>
                        <div >

                            <h5><GiMedicalPackAlt /></h5>
                            <h6>Consultas realizadas</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}