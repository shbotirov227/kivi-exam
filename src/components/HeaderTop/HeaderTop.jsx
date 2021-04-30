import {Link} from "react-router-dom";
import {HeaderLogo} from '../../assets/icons/icons';
import './HeaderTop.scss';

const HeaderTop = () => {
    return (
        <div className="container">
            <div className="header-top">

                <div className="header-top-logo">
                    <Link>
                        <HeaderLogo/>
                    </Link>
                    <h3>
                        Продай, найди, купи<br/>
                        все что пожелаешь…
                    </h3>
                </div>

                <div className="header-top-center">
                    <Link to="#" className="header-top--link">Объявления</Link>
                    <Link to="#" className="header-top--link">Магазины</Link>
                    <Link to="#" className="header-top--link">Для бизнеса</Link>
                    <Link to="#" className="header-top--link">Помощь</Link>
                </div>

                <div className="header-top__right">
                    <div className="language">
                        <Link to="#">Рус</Link>
                        <span className="chiziq">
                            |
                        </span>
                        <Link to="#">O’z</Link>
                    </div>

                    <div className="registratsiya">
                        <Link to="/registr">Вход</Link>
                        <span className="chiziq">
                            |
                        </span>
                        <Link to="/registr">Регистрация</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeaderTop;