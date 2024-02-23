import "./App.css";
import Connexion from "./Components/Connexion/Connexion";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Launch from "./Components/Launch/Launch";
import Accueil from "./Components/Accueil/Accueil";
import Ocho from "./Components/EPs/Ocho/Ocho";
import Mojo from "./Components/EPs/Mojo/Mojo";
import So from "./Components/EPs/So/So";

const isLoggedIn = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

function App() {
  return (
    <div className="relative flex">
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Connexion />
            </Route>
            <Route path="/launch">
              {isLoggedIn() ? <Launch /> : <Redirect to="/" />}
            </Route>
            <Route path="/accueil">
              {isLoggedIn() ? <Accueil /> : <Redirect to="/" />}
            </Route>
            <Route path="/ocho">
              {isLoggedIn() ? <Ocho /> : <Redirect to="/" />}
            </Route>
            <Route path="/mojo">
              {isLoggedIn() ? <Mojo /> : <Redirect to="/" />}
            </Route>
            <Route path="/so">
              {isLoggedIn() ? <So /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
