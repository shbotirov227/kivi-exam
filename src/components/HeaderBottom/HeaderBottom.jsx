import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Plus} from '../../assets/icons/icons';
import AddPage from '../../pages/AddPage/AddPage';
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

                    <button>Найти</button>
                </form>

                <Link to="/radiopage" className="btn-plus">
                    <div className="plus-icon">
                        <Plus/>
                    </div>

                    <span>Добавить обьявления</span>
                </Link>
            </div>
        </div>
    )
}

export default HeaderBottom;