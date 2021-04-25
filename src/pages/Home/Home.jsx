import HomeTop from '../../containers/HomeTop/HomeTop';
import Main from '../../containers/Main/Main';
import './Home.scss';

const Home = () => {
    return (
        <div className="Home">
            <div className="container">
                <HomeTop/>
                <Main/>
            </div>
        </div>
    )
}

export default Home;