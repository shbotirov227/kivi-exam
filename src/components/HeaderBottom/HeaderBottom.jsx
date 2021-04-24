import { Plus } from '../../assets/icons/icons';
import './HeaderBottom.scss';

const HeaderBottom = () => {
    return (
        <div className="HeaderBottom">
            <div className="header-bottom__label">
                <form action="">
                    <select name="" id="">
                        <option value="Любая категория">Любая категория</option>
                        <option value="Любая категория">Любая категория</option>
                        <option value="Любая категория">Любая категория</option>
                        <option value="Любая категория">Любая категория</option>
                    </select>

                    <input type="text" placeholder="Что будем искать ?"/>

                    <select name="" id="">
                        <option value="По всей Узбекистану">По всей Узбекистану</option>
                        <option value="По всей Узбекистану">По всей Узбекистану</option>
                        <option value="По всей Узбекистану">По всей Узбекистану</option>
                        <option value="По всей Узбекистану">По всей Узбекистану</option>
                    </select>
                    
                    <button type="submit">Найти</button>
                </form>


                <button className="btn-plus">
                    <div className="plus-icon">
                        <Plus/>
                    </div>

                    <span>Добавить обьявления</span>
                </button>
            </div>
        </div>
    )
}

export default HeaderBottom;