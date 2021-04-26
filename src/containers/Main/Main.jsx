import { Link } from 'react-router-dom';
import {ArrowDown} from '../../assets/icons/icons';
import MainCard from '../../components/MainCard/MainCard';
import Carusel from '../Carusel/Carusel';
import Footer from '../Footer/Footer';
import Section4 from '../Section4/Section4';
import './Main.scss';

const Main = () => {
    return (
        <div className="Main">
            <div className="container">
                <div className="main-top">
                    <button>Новые объявления</button>
                    <button>Лучщие предложение</button>
                </div>

                <MainCard/>

                <Link to="/" className="aligntext">
                    <span className="pokozat">Покозать еще</span>
                    <ArrowDown/>
                </Link>

            </div>

                <Carusel/>
                <Section4/>
                <Footer/>
        </div>
    )
}

export default Main;

// background: #FFFFFF; box-shadow: 12px 4px 24px rgba(0, 0, 0, 0.0647645);