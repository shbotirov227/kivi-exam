import RegistrLeft from '../../containers/RegistrLeft';
import RegistrRight from '../../containers/RegistrRight';
import FooterTop from '../../components/FooterTop/FooterTop';
import Header from '../../containers/Header';
import {Link} from 'react-router-dom';
import {PrevIcon} from '../../assets/icons/icons';

import './RegistrForm4.scss';

const RegistrForm4 = () => {
    return (
        <div className="RegistrForm4">
            <Header/>
            <div className="registr4-inner container">
                <div className="left">
                    <h3>Ваша регистрация завершена!</h3>
                    <p>
                        Вы успешно зарегистрированы на сайте<br/> киви и ваше пароль отправлен в виде<br/> смс на
                        ваше телефонный номер
                    </p>

                    <form action="" id="form">
                        <span>Введите email или номер телефона</span>

                        <div className="flexitem">
                            <input
                                type="number"
                                name="number"
                                placeholder="99891 167 27 23"
                                className="katta-kod"/>
                        </div>
                        <span>Пароль</span>
                        <input type="password" placeholder="***********"/>
                        <Link to="/">Войти</Link>
                    </form>

                    <div className="ili">
                        <span></span>
                        <p>или</p>
                        <span></span>
                    </div>

                    <Link to="#">Восстоновить ваше пароль</Link>

                </div>

                <RegistrRight/>
            </div>
            <FooterTop/>
        </div>
    )
}

export default RegistrForm4;