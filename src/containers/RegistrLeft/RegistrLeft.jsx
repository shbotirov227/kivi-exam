import {useState, useRef, useEffect} from 'react';
import { Link, useHistory} from 'react-router-dom';
import request from '../../assets/http';

import './RegistrLeft.scss';

const RegistrLeft = () => {

    // const [ hasError, setHasError ] = useState(false);
    // const emailInputRef = useRef(null);
    // const passInputRef = useRef(null);

    // const history = useHistory();

    // const [ gmail, setGmail ] = useState('');
    // const [ password, setPassword ] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     request.post('/registr', {
    //         email: emailInputRef.current.value,
    //         password: passInputRef.current.value,
    //     })
    //         .then(() => {
    //             window.localStorage.setItem('sessionToken', 'salom');
    //             history.push('/home');
    //             setHasError(true);
    //         })
    //         .catch((err) => {
                
    //         })
    // }

    return (
        <div className="RegistrLeft">
            <div className="register-left-inner">
                <h4>Бесплатная регистрация</h4>

                <form action="" id="form">
                    <input type="email" name="email" placeholder="Темиров Зухриддин"/>
                    <input type="password" name="password" placeholder="Password"/>

                    <Link to="/registr2">Далее</Link>
                </form>

                <div className="ili">
                    <span></span>
                    <p>или</p>
                    <span></span>
                </div>

                <Link to="#">Войдите в систему, если у вас уже есть<br/>
                    аккаунт kivi.uz
                </Link>
            </div>
        </div>
    )
}

export default RegistrLeft;