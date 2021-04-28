import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './assets/styles/main.scss';
import Header from "./containers/Header";
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage/SinglePage";
import Registr from './pages/Regist';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header/> */}
        
        <Switch>
          
          <Route path="/singlepage" component={SinglePage} />
          <Route path="/registr" component={Registr} />
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
