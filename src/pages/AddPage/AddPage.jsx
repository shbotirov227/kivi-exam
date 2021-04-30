import {Link} from 'react-router-dom';
import {ArrowDown, PinIcon, EksIcon, SearchIcon} from '../../assets/icons/icons';
import HeaderTop from '../../components/HeaderTop';
import MainCard from '../../components/MainCard/MainCard';
import RangeSlider from '../../components/Slider';
import Footer from '../../containers/Footer';

import Img5 from '../../assets/images/img5.png';
import Img6 from '../../assets/images/img6.png';
import Img7 from '../../assets/images/img7.png';
import Img8 from '../../assets/images/img8.png';
import Img9 from '../../assets/images/img9.png';
import Img10 from '../../assets/images/img10.png';

import './AddPage.scss';

const AddPage = () => {
    return (
        <div className="AddPage">
            <div className="addpage-header">
                <div className="container">
                    <HeaderTop/>
                </div>
            </div>

            <div className="addpage-inner container">

                <div className="addpage-top">
                    <input
                        type="text"
                        placeholder="Введите название обявления или выберите из списка"/>

                    <div className="top-btns">
                        <button className="addpage-top-btn purple">Интерсное</button>
                        <button className="addpage-top-btn blue">Топ</button>
                        <button className="addpage-top-btn green">Отличные предложение</button>
                        <button className="addpage-top-btn orange">Супер цена</button>

                        <button className="addpage-top-btn geo">
                            г.Ташкент
                            <PinIcon/>
                        </button>
                        <button className="addpage-top-btn geo">
                            <span>г.Термез</span>
                            <PinIcon/>
                        </button>
                        <button className="addpage-top-btn geo">
                            <span>г.Самарканд</span>
                            <PinIcon/>
                        </button>
                    </div>

                    <div className="">
                        <div className="input-range-top">
                            <span className="monitoring-top-span">Вы сейчас в рубрике</span>
                            <div className="monitoring">
                                <span>Электроника</span>
                                <span className="mont">Мониторы {/* <EksIcon/> */}
                                </span>
                                <div className="arrowicon">
                                    <ArrowDown/>
                                </div>
                            </div>
                        </div>

                        <div className="input-range">
                            <span>Выберите цену от и до</span>
                            <RangeSlider/>
                        </div>

                        <div className="selects">
                            <div>
                                <select name="" id="">
                                    <option value="состояние">Состояние</option>
                                    <option value="состояние">Состояние</option>
                                    <option value="состояние">Состояние</option>
                                    <option value="состояние">Состояние</option>
                                    <option value="состояние">Состояние</option>
                                </select>

                                <select name="" id="">
                                    <option value="тип">Тип объявщика</option>
                                    <option value="тип">Тип объявщика</option>
                                    <option value="тип">Тип объявщика</option>
                                    <option value="тип">Тип объявщика</option>
                                    <option value="тип">Тип объявщика</option>
                                </select>

                                <select name="" id="">
                                    <option value="район">Ташкент / Мирза улугбекский район</option>
                                    <option value="район">Ташкент / Мирза улугбекский район</option>
                                    <option value="район">Ташкент / Мирза улугбекский район</option>
                                    <option value="район">Ташкент / Мирза улугбекский район</option>
                                    <option value="район">Ташкент / Мирза улугбекский район</option>
                                </select>
                            </div>

                            <button>Применить</button>
                        </div>

                    </div>
                </div>

                <MainCard/>

                <Link to="#" className="addpage-down-eshe">Покозать еще (20)<ArrowDown/></Link>

                <div className="addpage-inner-bottom">
                    <div className="seychas">
                        <SearchIcon/>
                        <h3>СЕЙЧАС ИЩУТ</h3>
                    </div>

                    <div className="paginatsiya">
                        <Link to="#">
                            <span className="kok">купить Мясная продукция</span><br/>
                            <span className="seriy"><SearchIcon/>2 часа назад</span>
                        </Link>

                        <Link to="#">
                            <span className="kok">купить Мясная продукция</span><br/>
                            <span className="seriy"><SearchIcon/>2 часа назад</span>
                        </Link>

                        <Link to="#">
                            <span className="kok">купить Мясная продукция</span><br/>
                            <span className="seriy"><SearchIcon/>2 часа назад</span>
                        </Link>

                        <Link to="#">
                            <span className="kok">купить Мясная продукция</span><br/>
                            <span className="seriy"><SearchIcon/>2 часа назад</span>
                        </Link>

                        <Link to="#">
                            <span className="kok">купить Мясная продукция</span><br/>
                            <span className="seriy"><SearchIcon/>2 часа назад</span>
                        </Link>

                        <Link to="#">
                            <span className="kok">купить Мясная продукция</span><br/>
                            <span className="seriy"><SearchIcon/>2 часа назад</span>
                        </Link>

                        <Link to="#">
                            <span className="kok">купить Мясная продукция</span><br/>
                            <span className="seriy"><SearchIcon/>2 часа назад</span>
                        </Link>

                        <Link to="#">
                            <span className="kok">купить Мясная продукция</span><br/>
                            <span className="seriy"><SearchIcon/>2 часа назад</span>
                        </Link>

                        <Link to="#">
                            <span className="kok">купить Мясная продукция</span><br/>
                            <span className="seriy"><SearchIcon/>2 часа назад</span>
                        </Link>
                    </div>

                    <div className="card-pagination">
                        <h3>САМОЕ ИНТЕРЕСНОЕ</h3>

                        <div className="cardss">
                            <Link to="/singlepage" className="card greencard">
                                <img src={Img5} alt=""/>
                                <h5>Коньки раздвижные Galaxy р-р 36-39</h5>
                                <span className="card-date">Вчера 22:55</span>
                                <span className="card-price">39 000 000 сум</span>
                            </Link>

                            <Link to="/singlepage" className="card greencard">
                                <img src={Img6} alt=""/>
                                <h5>Продам свою гоночный байк Mongoose</h5>
                                <span className="card-date">Вчера 22:55</span>
                                <span className="card-price">39 000 000 сум</span>
                            </Link>

                            <Link to="/singlepage" className="card greencard">
                                <img src={Img7} alt=""/>
                                <h5>1-к квартира, 47 м², 7/18 эт.</h5>
                                <span className="card-date">Вчера 22:55</span>
                                <span className="card-price">39 000 000 сум</span>
                            </Link>

                            <Link to="/singlepage" className="card greencard">
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
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AddPage;