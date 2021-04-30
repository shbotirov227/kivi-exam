import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@material-ui/core';
import { useState } from 'react';

import Footer from '../../containers/Footer';

import SinglePageImg1 from '../../assets/images/singlepageimg1.png';
import SinglePageImg2 from '../../assets/images/singlepageimg2.png';
import SinglePageImg3 from '../../assets/images/singlepageimg3.png';
import SinglePageImg4 from '../../assets/images/singlepageimg4.png';
import SinglePageImg5 from '../../assets/images/singlepageimg5.png';
import SinglePageImg6 from '../../assets/images/singlepageimg6.png';
import Img2 from '../../assets/images/img2.png';
import Img3 from '../../assets/images/img3.png';
import Img4 from '../../assets/images/img4.png';
import Img5 from '../../assets/images/img5.png';
import Img6 from '../../assets/images/img6.png';
import Img9 from '../../assets/images/img9.png';
import Img10 from '../../assets/images/img10.png';

import './SinglePage.scss';
import Header from '../../containers/Header';

const SinglePage = () => {


    // let clickToTextBtn = document.getElementById('#click-to-text-btn');
    // let clickToText = document.getElementById('#click-to-text');

    // function str() {
    //     clickToTextBtn
    //         .addEventListener('click', function () {
    //             if (clickToText.textContent == '****') {
    //                 clickToText.replace('****', '9024');
    //             } else {}
    //         })
    // }

    const [ focusImg, setFocusImg ] = useState('');
   
    console.log(focusImg);


    return (
        <div className="SinglePage">

            <Header/>

            <div className="singlepage-inner container">
                <div className="breadcrumb">
                    <Breadcrumbs aria-label="breadcrumb">

                        <Link color="inherit" href="/">
                            Объявления
                        </Link>

                        <Link color="inherit" href="/">
                            Ташкент Недвижимость
                        </Link>

                        <Link color="textPrimary" href="/components/breadcrumbs/">
                            Ташкент Квартиры
                        </Link>

                        <Link color="textPrimary" href="/components/breadcrumbs/">
                            Ташкент Продажа
                        </Link>

                        <Link color="textPrimary" href="/components/breadcrumbs/">
                            Новостройки Ташкент
                        </Link>

                    </Breadcrumbs>
                </div>

                <div className="singlepage-main">

                    <div className="singlepage-main-top">
                        <h1>Срочно Голден Хаус Етти Чинор Новостройка 4х ком на 1 этаже юнусабад 5</h1>
                    </div>

                    <div className="singlepage-main-bottom">

                        <div className="main-bottom-left">
                            <div className="small-img">

                                <img src={SinglePageImg1} alt="" className="singlepage-img" onClick={() => setFocusImg(focusImg)}/>
                                <img src={SinglePageImg2} alt="" className="singlepage-img"/>
                                <img src={SinglePageImg3} alt="" className="singlepage-img"/>
                                <img src={SinglePageImg4} alt="" className="singlepage-img"/>
                                <img src={SinglePageImg5} alt="" className="singlepage-img"/>
                            </div>
                            <img src={SinglePageImg6} alt="" className="singlepage-img"/>
                        </div>

                        <div className="main-bottom-right">

                            <div className="top">
                                <div className="top-name">
                                    <span>Артикул: 4418970</span>
                                    <span>обновлено: 28.04.17 добавлено: 28.04.17</span>
                                </div>
                                <h1>70 000 у.е.</h1>
                                <Link to="/singlepage" className="top-address">Ташкент, Ташкентская область, Юнусабадский район</Link>

                                <div className="contact">
                                    <div className="click-btn">
                                        <span>99891 166</span>
                                        <span id="click-to-text">****</span>
                                        <button id="click-to-text-btn">Покозать польностю</button>
                                    </div>
                                    <div className="click-btn">
                                        <span>99891 166</span>
                                        <span id="click-to-text hidden">****</span>
                                        <button id="click-to-text-btn">Покозать польностю</button>
                                    </div>
                                </div>

                                {/* {
                                    var clickToTextBtn = document.querySelectorAll('#click-to-text-btn');

                                    var clickToText = document.querySelectorAll('#click-to-text')
                                        document.addEventListener('click', function () {

                                    })
                                } */}

                                <div className="avtor">
                                    <span>Автор обьявлении:</span>
                                    <Link to="/singlepage">Зухриддин Темиров</Link>
                                </div>
                            </div>

                            <div className="bottom">
                                <div className="tabbtn">
                                    <button className="tab-btn">Написать автору</button>
                                    <button className="tab-btn">Предложить свою цену</button>
                                </div>

                                <div className="tablitsa">
                                    <table border="1">
                                        <tr>
                                            <td>
                                                <h3>Количество комнат:<br/>
                                                    <span>6</span>
                                                </h3>
                                            </td>
                                            <td>
                                                <h3>Общая площадь:<br/>
                                                    <span>40 м2</span>
                                                </h3>
                                            </td>
                                            <td>
                                                <h3>Этаж:<br/>
                                                    <span>32</span>
                                                </h3>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <h3>Этажность дома:<br/>
                                                    <span>6</span>
                                                </h3>
                                            </td>
                                            <td>
                                                <h3>Состояние квартиры:<br/>
                                                    <span>Первая сдача</span>
                                                </h3>
                                            </td>
                                            <td>
                                                <h3>Этаж:<br/>
                                                    <span>32</span>
                                                </h3>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <h3>Планировка<br/>
                                                    <Link to="/singlepage">Раздельная</Link>
                                                </h3>
                                            </td>
                                            <td>
                                                <h3>Год постройки/сдачи<br/>
                                                    <Link to="/singlepage">Сдача в 2017</Link>
                                                </h3>
                                            </td>
                                            <td>
                                                <h3>Ремонт<br/>
                                                    <span>Авторский проект</span>
                                                </h3>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span>Санузел<br/>
                                                    <Link to="/singlepage">2 санузла и более</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span>Меблирована<br/>
                                                    <Link to="/singlepage">Да</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <h3>Высота потолков<br/>
                                                    <span>32</span>
                                                </h3>
                                            </td>
                                        </tr>
                                    </table>

                                    <table className="last-table">
                                        <tr>
                                            <td className="last-td">
                                                <h3>Рядом есть<br/>
                                                    <Link to="/singlepage">
                                                        Больница, поликлиника, Детская, площадка, Детский сад, Остановки, Парк, зелёная
                                                        зона, Развлекательные заведения, Рестораны, кафе
                                                    </Link>
                                                </h3>
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                                <div className="text">
                                    <p className="first-p">
                                        Срочно продаётся 3х ком на 1 этоже 7 этажном кирпичном доме. Новостройка Голден
                                        Хаус жылой комплекс Етти Чинор Очень качественный и дорогой ремонт. Комнаты
                                        полнастю разделные болшые. 2 сан узла. Для лишних вещей есть кладовка.Ремонт
                                        шыкарный обсалютно новый.
                                    </p>

                                    <p>
                                        Ремонт делолся из очень дорогова материяла. Дорогая класическая кухонная мебель.
                                        Джаккузи,Тёплые полы в каждой комнате. Дорогие люстры вовсех комнатах решодки на
                                        окнах. Теретория охранается. Всё предусмотренно для детей деские площядки качели
                                        итд. Торг наместе. Торопитесь продаю нужны денги. Первый золотой этаж и
                                        паследний в этом коплексе. Торопитесь.
                                    </p>
                                </div>

                                <div className="bottom-pojolavat">
                                    <span>Просмотры:10958</span>
                                    <Link to="/singlepage">Пожаловатся</Link>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="card-carusel">

                        <div className="bot">
                            <button>Новые объявления</button>
                            <button>Лучщие предложение</button>
                        </div>

                        <div className="card-carusel-link">
                            <Link to="/singlepage" className="karusel-card">
                                <img src={Img2} alt=""/>
                                <h5>iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)</h5>
                                <span className="karusel-card-date">Вчера 22:55</span>
                                <span className="karusel-card-price">39 000 000 сум</span>
                            </Link>

                            <Link to="/singlepage" className="karusel-card">
                                <img src={Img4} alt=""/>
                                <h5>iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)</h5>
                                <span className="karusel-card-date">Вчера 22:55</span>
                                <span className="karusel-card-price">39 000 000 сум</span>
                            </Link>

                            <Link to="/singlepage" className="karusel-card">
                                <img src={Img6} alt=""/>
                                <h5>iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)</h5>
                                <span className="karusel-card-date">Вчера 22:55</span>
                                <span className="karusel-card-price">39 000 000 сум</span>
                            </Link>

                            <Link to="/singlepage" className="karusel-card">
                                <img src={Img3} alt=""/>
                                <h5>iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)</h5>
                                <span className="karusel-card-date">Вчера 22:55</span>
                                <span className="karusel-card-price">39 000 000 сум</span>
                            </Link>

                            <Link to="/singlepage" className="karusel-card">
                                <img src={Img5} alt=""/>
                                <h5>iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)</h5>
                                <span className="karusel-card-date">Вчера 22:55</span>
                                <span className="karusel-card-price">39 000 000 сум</span>
                            </Link>

                            <Link to="/singlepage" className="karusel-card">
                                <img src={Img9} alt=""/>
                                <h5>iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)</h5>
                                <span className="karusel-card-date">Вчера 22:55</span>
                                <span className="karusel-card-price">39 000 000 сум</span>
                            </Link>

                            <Link to="/singlepage" className="karusel-card">
                                <img src={Img10} alt=""/>
                                <h5>iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)</h5>
                                <span className="karusel-card-date">Вчера 22:55</span>
                                <span className="karusel-card-price">39 000 000 сум</span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            <Footer/>

        </div>
    )
}

export default SinglePage;