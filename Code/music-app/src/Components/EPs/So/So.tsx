import { Link } from "react-router-dom";
import AudioPlayer from "./components/audioplayer";
import "./So.css";
import { BiArrowBack } from "react-icons/bi";

function So() {
  return (
    <div className="pageSo">
      <div>
        <Link className="btn-back" to="/accueil">
          <button className="text-xl hover:text-2xl scale-100 hover:scale-175 ease-in duration-100">
            <BiArrowBack />
          </button>
        </Link>
      </div>
      <div className="player items-center">
        <AudioPlayer />
      </div>
    </div>
  );
}

export default So;
