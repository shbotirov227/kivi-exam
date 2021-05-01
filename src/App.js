// import {lazy, Suspense} from 'react';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './assets/styles/main.scss';
// import Header from "./containers/Header";
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage/SinglePage";
import Registr from './pages/Regist';
import AddPage from './pages/AddPage/AddPage';
import RadioPage from './pages/RadioPage/RadioPage';
import RegistrForm2 from './components/RegistrForm2';
import RegistrForm3 from './components/RegistrForm3';
import RegistrForm4 from './components/RegistrForm4';

const accessToken = window.localStorage.getItem('sessionToken');

function App() {
    return (
        <div className="App">
            <Router>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/singlepage" component={SinglePage}/>
                    <Route path="/registr" component={Registr}/>

                    <Route path="/registr" component={Registr}/>
                    <Route path="/addpage" component={AddPage}/>
                    <Route path="/radiopage" component={RadioPage}/>
                    <Route path="/registr2" component={RegistrForm2}/>
                    <Route path="/registr3" component={RegistrForm3}/>
                    <Route path="/registr4" component={RegistrForm4}/>
                </Switch>

            </Router>
        </div>
    );
}

export default App;
