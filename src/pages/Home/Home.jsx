import Header from '../../containers/Header';
import HomeTop from '../../containers/HomeTop/HomeTop';
import Main from '../../containers/Main/Main';
import './Home.scss';

const Home = () => {
    return (
        <div className="Home">
            <Header/>
            <HomeTop/>
            <Main/>
        </div>
    )
}

export default Home;