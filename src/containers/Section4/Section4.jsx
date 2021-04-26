import { Link } from 'react-router-dom';
import { ArrowDown } from '../../assets/icons/icons';
import Section4Card from '../../components/Section4Card/Section4Card';
import './Section4.scss';

const Section4 = () => {
    return (
        <div className="Section4">
            <div className="section4-inner container">

                <div className="section4-top">
                    <button>Просмотренные</button>
                    <button>Выбор редакции</button>
                    <button>Сниженные цены</button>
                </div>

                <Section4Card/>

                <Link to="/" className="arrow-down">
                    <span className="down-span">Покозать еще</span>
                    <ArrowDown/>
                </Link>

            </div>
        </div>
    )
}

export default Section4;