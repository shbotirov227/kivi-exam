import RegistrLeft from '../../containers/RegistrLeft';
import RegistrRight from '../../containers/RegistrRight';
import FooterTop from '../../components/FooterTop/FooterTop';
import Header from '../../containers/Header';
import {Link} from 'react-router-dom';
import {PrevIcon} from '../../assets/icons/icons';

import './RegistrForm2.scss';


const RegistrForm2 = () => {
    return (
        <div className="RegistrForm2">
            <Header/>
            <div className="registr2-inner container">
                <div className="left">
                    <h4>Бесплатная регистрация</h4>

                    <form action="" id="form">
                        <span>Введите ваш email</span>
                        <input type="email" name="email" placeholder="example@kivi.uz"/>
                        <span>Введите ваш номер телефона</span>

                        <div className="flexitem">
                            <input type="number" name="number" placeholder="998" className="kalta-kod"/>
                            <input
                                type="number"
                                name="number"
                                placeholder="97 772 13 44"
                                className="katta-kod"/>
                        </div>

                        <h4>
                            Нажимая на кнопку «Получить доступ», я даю согласие на обработку персональных
                            данных и соглашаюсь c условиями договора-оферты и политикой конфиденциальности
                        </h4>

                        <div className="flexxx">
                            <Link to="/registr" className="prev-btn">
                                <PrevIcon/>
                            </Link>
                            <Link to="/registr3" className="pol-code">Получить доступ</Link>
                        </div>

                        <div className="ili">
                            <span></span>
                            <p>или</p>
                            <span></span>
                        </div>

                        <Link to="#" className="voyti">Войдите в систему, если у вас уже есть<br/>
                            аккаунт kivi.uz
                        </Link>

                    </form>
                </div>

                <RegistrRight/>
            </div>
            <FooterTop/>
        </div>
    )
}

export default RegistrForm2;