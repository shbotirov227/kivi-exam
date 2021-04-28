import Header from '../../containers/Header';
import './Regist.scss';
import RegistrLeft from '../../containers/RegistrLeft';
import RegistrRight from '../../containers/RegistrRight';
import FooterTop from '../../components/FooterTop/FooterTop';

const Regist = () => {
    return (
        <div className="Regist">
            <Header/>
            <div className="registr-inner container">
                <RegistrLeft/>
                <RegistrRight/>
            </div>
            <FooterTop/>
        </div>
    )
}

export default Regist;