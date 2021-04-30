import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Breadcrumbs } from '@material-ui/core';


import './MainCard.scss';

import Img1 from '../../assets/images/img1.png';
import Img2 from '../../assets/images/img2.png';
import Img3 from '../../assets/images/img3.png';
import Img4 from '../../assets/images/img4.png';
import Img5 from '../../assets/images/img5.png';
import Img6 from '../../assets/images/img6.png';
import Img7 from '../../assets/images/img7.png';
import Img8 from '../../assets/images/img8.png';
import Img9 from '../../assets/images/img9.png';
import Img10 from '../../assets/images/img10.png';
import Img11 from '../../assets/images/img11.png';
import Img12 from '../../assets/images/img12.png';
import Img13 from '../../assets/images/img13.png';
import Img14 from '../../assets/images/img14.png';
import Img15 from '../../assets/images/img15.png';
import Img16 from '../../assets/images/img16.png';


const MainCard = () => {

    const [ page, setPage ] = useState('');

    return (
        <div className="MainCard">

            <Link to="/singlepage" className="card" onClick={() => setPage(page)}>
                <img src={Img16} alt=""/>
                <h5>iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)</h5>
                <span className="card-date">Вчера 22:55</span>
                <span className="card-price">39 000 000 сум</span>
            </Link>

            <Link to="/singlepage" className="card">
                <img src={Img1} alt=""/>
                <h5>Маркетолог. Консультирование. Настройка рекламы</h5>
                <span className="card-date">Вчера 22:55</span>
                <span className="card-price">39 000 000 сум</span>
            </Link>

            <Link to="/singlepage" className="card">
                <img src={Img2} alt=""/>
                <h5>Требуется администратор в Отел</h5>
                <span className="card-date">Вчера 22:55</span>
                <span className="card-price">39 000 000 сум</span>
            </Link>

            <Link to="/singlepage" className="card">
                <img src={Img3} alt=""/>
                <h5>Велосипед Merida Big Seven 70 D</h5>
                <span className="card-date">Вчера 22:55</span>
                <span className="card-price">39 000 000 сум</span>
            </Link>

            <Link to="/singlepage" className="card">
                <img src={Img4} alt=""/>
                <h5>Женский, комфортный велосипед из Германии</h5>
                <span className="card-date">Вчера 22:55</span>
                <span className="card-price">39 000 000 сум</span>
            </Link>

            <Link to="/singlepage" className="card">
                <img src={Img5} alt=""/>
                <h5>Коньки раздвижные Galaxy р-р 36-39</h5>
                <span className="card-date">Вчера 22:55</span>
                <span className="card-price">39 000 000 сум</span>
            </Link>

            <Link to="/singlepage" className="card">
                <img src={Img6} alt=""/>
                <h5>Продам свою гоночный байк Mongoose</h5>
                <span className="card-date">Вчера 22:55</span>
                <span className="card-price">39 000 000 сум</span>
            </Link>

            <Link to="/singlepage" className="card">
                <img src={Img7} alt=""/>
                <h5>1-к квартира, 47 м², 7/18 эт.</h5>
                <span className="card-date">Вчера 22:55</span>
                <span className="card-price">39 000 000 сум</span>
            </Link>

            <Link to="/singlepage" className="card">
                <img src={Img8} alt=""/>
                <h5>Торговое помещение, 10 м²</h5>
                <span className="card-date">Вчера 22:55</span>
                <span className="card-price">39 000 000 сум</span>
            </Link>

            <Link to="/singlepage" className="card">
                <img src={Img9} alt=""/>
                <h5>Двигатели моторы головки кпп турбины тнвд гарантия</h5>
                <span className="card-date">Вчера 22:55</span>
                <span className="card-price">39 000 000 сум</span>
            </Link>

            <Link to="/singlepage" className="card">
                <img src={Img10} alt=""/>
                <h5>Toyota Camry, 2002</h5>
                <span className="card-date">Вчера 22:55</span>
                <span className="card-price">39 000 000 сум</span>
            </Link>

            <Link to="/singlepage" className="card">
                <img src={Img11} alt=""/>
                <h5>Сборочный комплект камаз 43118</h5>
                <span className="card-date">Вчера 22:55</span>
                <span className="card-price">39 000 000 сум</span>
            </Link>

            <Link to="/singlepage" className="card">
                <img src={Img12} alt=""/>
                <h5>Продам легендарный BMW K1200S</h5>
                <span className="card-date">Вчера 22:55</span>
                <span className="card-price">39 000 000 сум</span>
            </Link>

            <Link to="/singlepage" className="card">
                <img src={Img13} alt=""/>
                <h5>Плиточник</h5>
                <span className="card-date">Вчера 22:55</span>
                <span className="card-price">39 000 000 сум</span>
            </Link>

            <Link to="/singlepage" className="card">
                <img src={Img14} alt=""/>
                <h5>Мастер регулировка дверей замена замков</h5>
                <span className="card-date">Вчера 22:55</span>
                <span className="card-price">39 000 000 сум</span>
            </Link>

            <Link to="/singlepage" className="card">
                <img src={Img15} alt=""/>
                <h5>Овощная компания. Доставка свежих овощей и фруктов</h5>
                <span className="card-date">Вчера 22:55</span>
                <span className="card-price">39 000 000 сум</span>
            </Link>

        </div>
    )
}

export default MainCard;