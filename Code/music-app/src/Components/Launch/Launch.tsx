import ReactPlayer from "react-player";
import "./Launch.css";
import "../../App.css";
import { Link, useHistory } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Launch() {
  const history = useHistory();

  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="src/assets/videos/clip.mp4"
        playing
        controls
        width="100%"
        height="100%"
        onEnded={() => {
          return history.push("/Accueil");
        }}
      />
      <Link className="btn-skip" to="/accueil">
        <button><FaArrowRight /></button>
      </Link>
    </div>
  );
}

export default Launch;
