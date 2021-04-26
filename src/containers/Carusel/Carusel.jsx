import './Carusel.scss';
import PagImg1 from '../../assets/images/pagimg1.png';
import PagImg2 from '../../assets/images/pagimg2.png';
import PagImg3 from '../../assets/images/pagimg3.png';
import { Link } from 'react-router-dom';

const Carusel = () => {
    return (
        <div className="Carusel">
            <div className="carusel-inner container">
                <Link to="/" className="carusel-item">
                    <img src={PagImg1} alt=""/>
                </Link>

                <Link to="/" className="carusel-item">
                    <img src={PagImg2} alt=""/>
                </Link>

                <Link to="/" className="carusel-item">
                    <img src={PagImg3} alt=""/>
                </Link>

                <Link to="/" className="carusel-item">
                    <img src={PagImg1} alt=""/>
                </Link>
            </div>
        </div>
    )
}

export default Carusel;