import { IoMdPlanet } from "react-icons/io";
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div className="pageAccueil">
      <ul className="planetes">
        <li><Link to="/ocho"><IoMdPlanet /></Link></li>
        <li><Link to="/mojo"><IoMdPlanet /></Link></li>
        <li><Link to="/so"><IoMdPlanet /></Link></li>
      </ul>
    </div>
  );
}

export default Accueil;
