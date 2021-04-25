import { ArrowDown } from '../../assets/icons/icons';
import MainCard from '../../components/MainCard/MainCard';
import './Main.scss';

const Main = () => {
    return (
        <div className="Main">
            <div className="main-top">
                <button>Новые объявления</button>
                <button>Лучщие предложение</button>
            </div>

            <MainCard/>

            <div className="aligntext">
                <span className="pokozat">Покозать еще</span>
                <ArrowDown/>
            </div>

            

        </div>
    )
}

export default Main;

    // background: #FFFFFF;
    // box-shadow: 12px 4px 24px rgba(0, 0, 0, 0.0647645);