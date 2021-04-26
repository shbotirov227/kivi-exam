import FooterBottom from '../../components/FooterBottom/FooterBottom';
import FooterTop from '../../components/FooterTop/FooterTop';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="Footer">
            <FooterTop/>
            <FooterBottom/>
        </div>
    )
}

export default Footer;