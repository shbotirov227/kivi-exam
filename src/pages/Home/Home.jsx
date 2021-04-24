import HomeTop from '../../containers/HomeTop/HomeTop';
import './Home.scss';

const Home = () => {
    return (
        <div className="Home">
            <div className="container">
                <h1>Home</h1>
                <HomeTop/>
            </div>
        </div>
    )
}

export default Home;