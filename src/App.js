// import {lazy, Suspense} from 'react';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './assets/styles/main.scss';
// import Header from "./containers/Header";
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage/SinglePage";
import Registr from './pages/Regist';
import AddPage from './pages/AddPage/AddPage';
import RadioPage from './pages/RadioPage/RadioPage';

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
                </Switch>

            </Router>
        </div>
    );
}

export default App;
