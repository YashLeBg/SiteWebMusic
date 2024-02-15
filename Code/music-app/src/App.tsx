import "./App.css";
import Accueil from "./Components/Accueil/Accueil";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Launch from "./Components/Launch/Launch";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>  
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route path="/launch">
            <Launch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
