import { Link }from "react-router-dom";
import { HeaderLogo } from '../../assets/icons/icons';
import './HeaderTop.scss';

const HeaderTop = () => {
    return (
        <div className="header-top">

            <Link>
                <HeaderLogo/>
            </Link>

            <div className="header-top__right">
                <div className="language">
                    <span>Рус</span>
                    <span className="chiziq">     |     </span>
                    <span>O’z</span>
                </div>

                <div className="registratsiya">
                    <span>Вход</span>
                    <span className="chiziq">     |     </span>
                    <span>Регистрация</span>
                </div>
            </div>

        </div>
    )
}

export default HeaderTop;