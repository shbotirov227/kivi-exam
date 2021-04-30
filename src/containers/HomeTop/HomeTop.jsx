import {useState, useEffect} from 'react'

import {Link} from 'react-router-dom';
import {
    HomeIcon1,
    HomeIcon2,
    HomeIcon3,
    HomeIcon4,
    HomeIcon5,
    HomeIcon6,
    HomeIcon7,
    HomeIcon8,
    HomeIcon9
} from '../../assets/icons/icons';

import './HomeTop.scss';

const HomeTop = () => {

    const [addClass, setAddClass] = useState(false);

    return (
        <div className="HomeTop">
            <div className="home-top__icons container">

                <button className="home-icon" onClick={() => setAddClass(!addClass)}>
                    <button className="btn purple">
                        <HomeIcon1/>
                    </button>
                    <span>Автомобили</span>
                </button>

                <button className="home-icon" onClick={() => setAddClass(!addClass)}>
                    <button className="btn blue">
                        <HomeIcon2/>
                    </button>
                    <span>Недвижимость</span>
                </button>

                <button className="home-icon" onClick={() => setAddClass(!addClass)}>
                    <button className="btn orange">
                        <HomeIcon3/>
                    </button>
                    <span>Электроника</span>
                </button>

                <button className="home-icon" onClick={() => setAddClass(!addClass)}>
                    <button className="btn yellow">
                        <HomeIcon4/>
                    </button>
                    <span>Работа</span>
                </button>

                <button className="home-icon" onClick={() => setAddClass(!addClass)}>
                    <button className="btn oxra">
                        <HomeIcon5/>
                    </button>
                    <span>Личные вещи</span>
                </button>

                <button className="home-icon" onClick={() => setAddClass(!addClass)}>
                    <button className="btn blue">
                        <HomeIcon6/>
                    </button>
                    <span>Дом и Сад</span>
                </button>

                <button className="home-icon" onClick={() => setAddClass(!addClass)}>
                    <button className="btn purple">
                        <HomeIcon7/>
                    </button>
                    <span>Стройка и ремонт</span>
                </button>

                <button className="home-icon" onClick={() => setAddClass(!addClass)}>
                    <button className="btn oxra">
                        <HomeIcon8/>
                    </button>
                    <span>Хобби и Спорт</span>
                </button>

                <button className="home-icon" onClick={() => setAddClass(!addClass)}>
                    <button className="btn orange">
                        <HomeIcon9/>
                    </button>
                    <span>Бизнес и услуги</span>
                </button>

                <button className="home-icon" onClick={() => setAddClass(!addClass)}>
                    <button className="btn purple">
                        <HomeIcon7/>
                    </button>
                    <span>Стройка и ремонт</span>
                </button>

                <button className="home-icon" onClick={() => setAddClass(!addClass)}>
                    <button className="btn oxra">
                        <HomeIcon8/>
                    </button>
                    <span>Хобби и Спорт</span>
                </button>

                <button className="home-icon" onClick={() => setAddClass(!addClass)}>
                    <button className="btn orange">
                        <HomeIcon9/>
                    </button>
                    <span>Бизнес и услуги</span>
                </button>

                <button className="home-icon" onClick={() => setAddClass(!addClass)}>
                    <button className="btn purple">
                        <HomeIcon7/>
                    </button>
                    <span>Стройка и ремонт</span>
                </button>

                <button className="home-icon" onClick={() => setAddClass(!addClass)}>
                    <button className="btn oxra">
                        <HomeIcon8/>
                    </button>
                    <span>Хобби и Спорт</span>
                </button>

                <button className="home-icon" onClick={() => setAddClass(!addClass)}>
                    <button className="btn orange">
                        <HomeIcon9/>
                    </button>
                    <span>Бизнес и услуги</span>
                </button>

            </div>

            <div className={`overlay container ${addClass == false ? '' : 'show'}`} addClass={addClass} setAddClass={setAddClass}>

                <div className="overlay-links">
                    <Link to="/addpage">Телефоны</Link>
                    <Link to="/addpage">Компьютеры</Link>
                    <Link to="/addpage">Фото / видео</Link>
                    <Link to="/addpage">Тв / видеотехника</Link>
                    <Link to="/addpage">Аудиотехника</Link>
                </div>

                <div className="overlay-links">
                    <Link to="/addpage">Телефоны</Link>
                    <Link to="/addpage">Компьютеры</Link>
                    <Link to="/addpage">Фото / видео</Link>
                    <Link to="/addpage">Тв / видеотехника</Link>
                    <Link to="/addpage">Аудиотехника</Link>
                </div>

                <div className="overlay-links">
                    <Link to="/addpage">Телефоны</Link>
                    <Link to="/addpage">Компьютеры</Link>
                    <Link to="/addpage">Фото / видео</Link>
                    <Link to="/addpage">Тв / видеотехника</Link>
                    <Link to="/addpage">Аудиотехника</Link>
                </div>

                <div className="overlay-links">
                    <Link to="/addpage">Телефоны</Link>
                    <Link to="/addpage">Компьютеры</Link>
                    <Link to="/addpage">Фото / видео</Link>
                    <Link to="/addpage">Тв / видеотехника</Link>
                    <Link to="/addpage">Аудиотехника</Link>
                </div>
            </div>
        </div>
    )
}

export default HomeTop;