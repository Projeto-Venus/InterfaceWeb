
import './HomePage.css';
import Footer from '../../Footer/index'
import { useNavigate } from 'react-router-dom';
import Headerhome from '../../Headerhome';
import Listgroup from '../../Listgroup';

export default function HomePage() {

    return (
        <>
            <Headerhome />
            <Listgroup/>
            
            <Footer />
        </>

    )
}