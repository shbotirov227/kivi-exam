import { Link } from 'react-router-dom';

import './Section4Card.scss';

import Section4Img1 from '../../assets/images/section4img1.png';
import Section4Img2 from '../../assets/images/section4img2.png';
import Section4Img3 from '../../assets/images/section4img3.png';
import Section4Img4 from '../../assets/images/section4img4.png';

const Section4Card = () => {
    return (
        <div className="Section4Card">

            <div className="section4-inner">
                <Link to="/" className="card">
                    <img src={Section4Img1} alt=""/>
                    <h5>Светодиодная лампа с фронтальным стеклом 10шт</h5>
                    <span className="card-date">Вчера 22:55</span>
                    <span className="card-price">39 000 000 сум</span>
                </Link>

                <Link to="/" className="card">
                    <img src={Section4Img2} alt=""/>
                    <h5>Коттедж 424 м² на участке 22.6 сот.</h5>
                    <span className="card-date">Вчера 22:55</span>
                    <span className="card-price">39 000 000 сум</span>
                </Link>

                <Link to="/" className="card">
                    <img src={Section4Img3} alt=""/>
                    <h5>2-к квартира, 55 м², 3/5 эт.</h5>
                    <span className="card-date">Вчера 22:55</span>
                    <span className="card-price">39 000 000 сум</span>
                </Link>

                <Link to="/" className="card">
                    <img src={Section4Img4} alt=""/>
                    <h5>Кровать с закроватным модулем+ матрас Вита 160</h5>
                    <span className="card-date">Вчера 22:55</span>
                    <span className="card-price">39 000 000 сум</span>
                </Link>
            </div>

        </div>
    )
}

export default Section4Card;