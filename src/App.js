import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './assets/styles/main.scss';
import Header from "./containers/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        
        <Switch>
          

          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
