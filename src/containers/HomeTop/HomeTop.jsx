import {
    HomeIcon1,
    HomeIcon2,
    HomeIcon3,
    HomeIcon4,
    HomeIcon5,
    HomeIcon6,
    HomeIcon7,
    HomeIcon8,
    HomeIcon9
} from '../../assets/icons/icons';

import './HomeTop.scss';

const HomeTop = () => {
    return (
        <div className="HomeTop">
            <h1>HomeTop</h1>
            <div className="home-top__icons">
                <div className="home-icon purple">
                    <img src={HomeIcon1} alt=""/>
                </div>

                <div className="home-icon">
                    <img src={HomeIcon2} alt=""/>
                </div>

                <div className="home-icon">
                    <img src={HomeIcon3} alt=""/>
                </div>

                <div className="home-icon">
                    <img src={HomeIcon4} alt=""/>
                </div>

                <div className="home-icon">
                    <img src={HomeIcon5} alt=""/>
                </div>

                <div className="home-icon">
                    <img src={HomeIcon6} alt=""/>
                </div>

                <div className="home-icon">
                    <img src={HomeIcon7} alt=""/>
                </div>

                <div className="home-icon">
                    <img src={HomeIcon8} alt=""/>
                </div>

                <div className="home-icon">
                    <img src={HomeIcon9} alt=""/>
                </div>

                <div className="home-icon">
                <img src="../../assets/images/icons/HomeIcon1.svg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default HomeTop;