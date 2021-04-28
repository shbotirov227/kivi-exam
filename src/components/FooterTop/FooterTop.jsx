import {Link} from 'react-router-dom';
import {AppStore, FooterLogo, GooglePlay} from '../../assets/icons/icons';
import './FooterTop.scss';

const FooterTop = () => {
    return (
        <div className="FooterTop">
            <div className="footertop-inner container">
                <Link to="/" className="left">
                    <FooterLogo/>
                    <span>Продай, найди, купи<br></br>
                        все что ты пожелаешь</span>
                </Link>

                <span className="center-text">
                    Веб сайт бесплатных обьявлений | на базе<br></br>
                    имеется 234 944 999 шт обяления
                </span>

                <div className="right">
                    <Link to="/">
                        <AppStore/>
                    </Link>

                    <Link to="/">
                        <GooglePlay/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FooterTop;