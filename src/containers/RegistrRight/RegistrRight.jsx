import { Link } from 'react-router-dom';
import {KiviLogo} from '../../assets/icons/icons';
import './RegistrRight.scss';

const RegistrRight = () => {
    return (
        <div className="RegistrRight">
            <div className="registr-right-item">
                <div className="item-logo">
                    <KiviLogo/>
                </div>
                <div className="item-text">
                    <span>Откройте для себя<br/> целую плошадку<br/> для продаже</span>
                </div>
                <Link to="#" className="item-link">Как это делать?</Link>
            </div>
        </div>
    )
}

export default RegistrRight;