import { Link } from "react-router-dom";
import AudioPlayer from "./components/audioplayer";
import "./So.css";
import HeaderEP from "../HeaderEP/HeaderEP";
import { AiOutlineRollback } from "react-icons/ai";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useEffect, useState } from "react";

function So() {
  
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAll(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pageSo">
      <HeaderEP />
      <div className="flex flex-col items-center mb-2">
        <Link className="btn-back" to="/accueil">
          <button className="text-white text-xl hover:text-2xl scale-100 hover:scale-175 ease-in duration-100">
            <AiOutlineRollback />
          </button>
        </Link>
        <Link className="btn-prev" to="/mojo">
          <button className="text-white text-xl hover:text-2xl scale-100 hover:scale-175 ease-in duration-100">
            <GrLinkPrevious />
          </button>
        </Link>
        <Link className="btn-next" to="/ocho">
          <button className="text-white text-xl hover:text-2xl scale-100 hover:scale-175 ease-in duration-100">
            <GrLinkNext />
          </button>
        </Link>
      </div>
      <div className={`player text-white fade-text ${showAll ? "show" : ""}`}>
        <AudioPlayer />
      </div>
    </div>
  );
}

export default So;
