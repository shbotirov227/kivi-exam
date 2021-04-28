import { render } from '@testing-library/react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import './RegistrLeft.scss';

const RegistrLeft = () => {

    const [ inputName, setInputName ] = useState('');

    const handleSubmit = (e) => {
            e.preventDefault();
        }

    return (
        <div className="RegistrLeft">
            <div className="register-left-inner">
                <h4>Бесплатная регистрация</h4>

                <form action="" id="form" onSubmit={handleSubmit}>
                    <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Темиров Зухриддин"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    />

                    <input
                    type="password"
                    name="password"
                    id=""
                    placeholder="Password"
                    
                    />
                    <button type="submit">Далее</button>
                </form>

                <div className="ili">
                    <span></span>
                    <p>или</p>
                    <span></span>
                </div>

                <Link to="#">Войдите в систему, если у вас уже есть<br/>
                    аккаунт kivi.uz</Link>
            </div>
        </div>
    )
}

export default RegistrLeft;