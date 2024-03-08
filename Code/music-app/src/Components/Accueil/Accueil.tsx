import { Link } from "react-router-dom";
import "./Accueil.css";

function Accueil() {

  return (
    <div className="pageAccueil">
      <div className="planetes">
        <ul>
          <li className="planete-ocho">
            <Link to="/ocho">
              <img src="src/assets/planetes/planete1.png" alt="planete1"/>
            </Link>
          </li>
          <li className="planete-mojo">
            <Link to="/mojo">
            <img src="src/assets/planetes/planete2.png" alt="planete2"/>
            </Link>
          </li>
            <li className="planete-so">
              <Link to="/so">
                <img src="src/assets/planetes/planete3.png" alt="planete3" />
              </Link>
            </li>
          </ul>
      </div>
    </div>
  );
}

export default Accueil;
