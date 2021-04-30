import {Link} from 'react-router-dom';
import HeaderTop from '../../components/HeaderTop';
import HomeTop from '../../containers/HomeTop/HomeTop';

// import Qalamcha from '../../assets/images/icons/Qalamcha.svg';
import Aparat from '../../assets/images/icons/Aparat.svg';
import Karta from '../../assets/images/karta.png';

import './RadioPage.scss';

const RadioPage = () => {
    return (
        <div className="RadioPage">
            <div className="xira">
                <HeaderTop/>
            </div>

            <div className="container">

                <div className="head-text">
                    <h1>Добавить обьявления бесплатно</h1>
                    <p>Для добавления вашего обьявлении вы должны выбрать категорию</p>
                </div>

                <div className="xira">
                    <HomeTop/>
                </div>

                <div className="vibrali">
                    <span>Вы выбрали:</span>
                    <span>
                        <Link>Недвижимость »</Link>
                    </span>
                    <span>
                        <Link>Дома »</Link>
                    </span>
                    <span>
                        <Link>Аренда долгосрочная</Link>
                    </span>

                    <button>
                        {/* <Qalamcha/> */}
                        Изменить
                    </button>
                </div>

                <div className="radios">

                    <div className="displayflex radiotop-1">
                        <div>
                            <span className="radio-title">Цена</span>
                            <input type="number" placeholder="400 000" className="radiotop1-input"/>
                        </div>
                        <select name="" id="">
                            <option value="сум">Сум</option>
                            <option value="рубл">Рубл</option>
                            <option value="доллар">Доллар</option>
                        </select>
                        <input type="radio" name="" id="radio-top1" className="dumaloq"/>
                        <label htmlFor="radio-top1" className="radio-label">Договорная</label>
                    </div>

                    <div className="displayflex radiotop2">
                        <div>
                            <span>Количество комнат*</span>
                            <input type="number" placeholder="4"/>

                            <input type="number" placeholder="900"/>

                            <input type="number" placeholder="90"/>
                        </div>
                    </div>

                    <div className="displayflex radiotop3">
                        <div>
                            <span className="radio-title">Расположение*</span>

                            <div className="d-block">
                                <input type="radio" name="radiotop3" id="radiotop3-1"/>
                                <label htmlFor="radiotop3-1">В городе</label>
                            </div>

                            <div className="d-block">
                                <input type="radio" name="radiotop3" id="radiotop3-2"/>
                                <label htmlFor="radiotop3-2">В пригороде</label>
                            </div>

                            <div className="d-block">
                                <input type="radio" name="radiotop3" id="radiotop3-3"/>
                                <label htmlFor="radiotop3-3">В сельской местности</label>
                            </div>
                        </div>

                        <div>
                            <div className="d-block">
                                <input type="radio" name="radiotop3" id="radiotop3-4"/>
                                <label htmlFor="radiotop3-4">Вдоль трассы</label>
                            </div>

                            <div className="d-block">
                                <input type="radio" name="radiotop3" id="radiotop3-5"/>
                                <label htmlFor="radiotop3-5">Возле водоема, реки</label>
                            </div>

                            <div className="d-block">
                                <input type="radio" name="radiotop3" id="radiotop3-6"/>
                                <label htmlFor="radiotop3-6">В предгорьях</label>
                            </div>
                        </div>

                        <div>
                            <div className="d-block mb4">
                                <input type="radio" name="radiotop3" id="radiotop3-7"/>
                                <label htmlFor="radiotop3-7">В дачном массиве</label>
                            </div>

                            <div className="d-block mb4">
                                <input type="radio" name="radiotop3" id="radiotop3-8"/>
                                <label htmlFor="radiotop3-8">На закрытой территории</label>
                            </div>
                        </div>

                    </div>

                    <div className="displayflex radiotop4">

                        <div>
                            <span className="radio-title">Количество комнат*</span>
                            <input type="text" placeholder="4"/>
                        </div>

                        <div>
                            <span className="radio-title">Высота потолков</span>
                            <input type="text" placeholder="2m"/>
                        </div>

                        <div>
                            <span className="radio-title">Площадь участка*</span>
                            <input type="text" placeholder="342"/>
                        </div>

                    </div>

                    <div className="displayflex radiotop5">
                        <div>
                            <span className="radio-title">Состояние дома</span>

                            <div className="d-block">
                                <input type="radio" name="radiotop5" id="radiotop5-1"/>
                                <label htmlFor="radiotop5-1">Авторский проект</label>
                            </div>

                            <div className="d-block">
                                <input type="radio" name="radiotop5" id="radiotop5-2"/>
                                <label htmlFor="radiotop5-2">Средний ремонт</label>
                            </div>

                            <div className="d-block">
                                <input type="radio" name="radiotop5" id="radiotop5-3"/>
                                <label htmlFor="radiotop5-3">Евроремонт</label>
                            </div>
                        </div>

                        <div>
                            <div className="d-block">
                                <input type="radio" name="radiotop5" id="radiotop5-4"/>
                                <label htmlFor="radiotop5-4">Требует ремонта</label>
                            </div>

                            <div className="d-block">
                                <input type="radio" name="radiotop5" id="radiotop5-5"/>
                                <label htmlFor="radiotop5-5">Предчистовая отделка</label>
                            </div>

                            <div className="d-block">
                                <input type="radio" name="radiotop5" id="radiotop5-6"/>
                                <label htmlFor="radiotop5-6">Не достроен</label>
                            </div>
                        </div>

                        <div>
                            <div className="d-block mb4">
                                <input type="radio" name="radiotop5" id="radiotop5-7"/>
                                <label htmlFor="radiotop5-7">Черновая отделка</label>
                            </div>

                            <div className="d-block mb4">
                                <input type="radio" name="radiotop5" id="radiotop5-8"/>
                                <label htmlFor="radiotop5-8">Под снос</label>
                            </div>
                        </div>

                    </div>

                    <div className="displayflex radiotop6">

                        <div className="margn">
                            <span className="radio-title">Тип дома</span>
                            <select name="" id="">
                                <option value="">Коттедж</option>
                                <option value="">Коттедж</option>
                                <option value="">Коттедж</option>
                            </select>
                        </div>

                        <div>
                            <span className="radio-title">Электричество</span>
                            <select name="" id="">

                                <option value="">Есть возможность подключения</option>
                                <option value="">Есть возможность подключения</option>
                                <option value="">Есть возможность подключения</option>
                            </select>
                        </div>

                    </div>

                    <div className="displayflex radiotop7">
                        <div>
                            <span className="radio-title">Отопление</span>

                            <div className="d-block">
                                <input type="radio" name="radiotop7" id="radiotop7-1"/>
                                <label htmlFor="radiotop7-1">Центральное</label>
                            </div>

                            <div className="d-block">
                                <input type="radio" name="radiotop7" id="radiotop7-2"/>
                                <label htmlFor="radiotop7-2">На газе</label>
                            </div>

                            <div className="d-block">
                                <input type="radio" name="radiotop7" id="radiotop7-3"/>
                                <label htmlFor="radiotop7-3">На жидком топлив</label>
                            </div>
                        </div>

                        <div>
                            <div className="d-block">
                                <input type="radio" name="radiotop7" id="radiotop7-4"/>
                                <label htmlFor="radiotop5-4">Электрическое</label>
                            </div>

                            <div className="d-block">
                                <input type="radio" name="radiotop7" id="radiotop7-5"/>
                                <label htmlFor="radiotop5-5">Смешанное Без отопления</label>
                            </div>

                            <div className="d-block">
                                <input type="radio" name="radiotop7" id="radiotop7-6"/>
                                <label htmlFor="radiotop7-6">Без отопления</label>
                            </div>

                        </div>

                    </div>

                    <div className="radiotop8">
                        <span className="radio-title">Электричество</span>

                        <h3>Есть возможность подключения</h3>

                        <input type="text" name="" id=""/>

                        <span>9000 знаков осталос</span>
                    </div>

                    <div className="aparat">
                        <div className="photos">
                            <button>
                                <img src={Aparat} alt=""/>
                            </button>

                            <button>
                                <img src={Aparat} alt=""/>
                            </button>

                            <button>
                                <img src={Aparat} alt=""/>
                            </button>

                            <button>
                                <img src={Aparat} alt=""/>
                            </button>

                            <button>
                                <img src={Aparat} alt=""/>
                            </button>
                        </div>

                        <div className="photos">
                            <button>
                                <img src={Aparat} alt=""/>
                            </button>

                            <button>
                                <img src={Aparat} alt=""/>
                            </button>
                            <button>
                                <img src={Aparat} alt=""/>
                            </button>

                            <button>
                                <img src={Aparat} alt=""/>
                            </button>

                            <button>
                                <img src={Aparat} alt=""/>
                            </button>
                        </div>
                    </div>

                    <div className="karta">
                        <h3>Местоположение объекта</h3>

                        <div className="selects">
                            <div className="karta-select">
                                <span className="radio-title">Регион</span>
                                <select name="" id="">

                                    <option value="">Ташкент</option>
                                    <option value="">Ташкент</option>
                                    <option value="">Ташкент</option>
                                </select>
                            </div>

                            <div className="karta-select">
                                <span className="radio-title">Город / Район</span>
                                <select name="" id="">

                                    <option value="">Мирза Улугбекский район</option>
                                    <option value="">Мирза Улугбекский район</option>
                                    <option value="">Мирза Улугбекский район</option>
                                </select>
                            </div>
                        </div>

                        <div className="karta-center">
                            <img src={Karta} alt=""/>
                        </div>

                        <div className="bottom-inputs">
                            <div>
                                <span className="radio-title">Телефонный номер</span>
                                <input type="number" placeholder="+99894 888 74452"/>
                            </div>
                            <div>
                                <span className="radio-title">Email-адрес</span>
                                <input type="email" placeholder="example@mail.com"/>
                            </div>
                            <div>
                                <span className="radio-title">Контактный лицо</span>
                                <input type="text" placeholder="Зухриддин"/>
                            </div>

                            <div className="buttons">
                                <button>Добавить обьявления бесплатно</button>
                                <Link to="#">Предпросмотр</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RadioPage;