import HeaderBottom from '../../components/HeaderBottom';
import HeaderTop from '../../components/HeaderTop';
import './Header.scss';

const Header = () => {
    return (
        <div className="Header">
            <div className="container">
                <HeaderTop/>
                <HeaderBottom/>
            </div>
        </div>
    )
}

export default Header;