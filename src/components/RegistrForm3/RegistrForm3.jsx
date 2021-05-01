import RegistrLeft from '../../containers/RegistrLeft';
import RegistrRight from '../../containers/RegistrRight';
import FooterTop from '../../components/FooterTop/FooterTop';
import Header from '../../containers/Header';
import {Link} from 'react-router-dom';
import {PrevIcon} from '../../assets/icons/icons';

import './RegistrForm3.scss';

const RegistrForm3 = () => {
    return (
        <div className="RegistrForm3">
            <Header/>
            <div className="registr3-inner container">
                <div className="left">
                    <h4>Бесплатная регистрация</h4>
                    <p>
                        Код отправлен в виде смс на указанный<br/> номер телефона
                    </p>

                    <form action="" id="form">
                        <span>Введите ваш номер телефона</span>

                        <div className="flexitem">
                            <input type="number" name="number" placeholder="998 97 772 13 44" className="katta-kod"/>
                            <button className="kalta-kod">90s</button>
                        </div>

                        <input type="text" placeholder="Введите код подтверждения"/>
                        <Link to="/registr4">Далее</Link>
                        </form>


                        <div className="ili">
                            <span></span>
                            <p>или</p>
                            <span></span>
                        </div>

                        <Link to="#">Войдите в систему, если у вас уже есть<br/>
                            аккаунт kivi.uz
                        </Link>

                    
                </div>

                <RegistrRight/>
            </div>
            <FooterTop/>
        </div>
    )
}

export default RegistrForm3;