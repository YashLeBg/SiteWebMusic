import { useEffect, useState } from "react";
import "./HeaderEP.css";
import { useLocation } from "react-router";

function HeaderEP() {
  const location = useLocation();
  const [epTitle, setEpTitle] = useState("");
  const [text, setText] = useState("");
  const [showText, setShowText] = useState(false);
  const [showEpTitle, setShowEpTitle] = useState(false);

  useEffect(() => {
    const pathParts = location.pathname.split("/");

    let ep = pathParts[1];
    ep = ep.toUpperCase();
    setEpTitle(ep);
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEpTitle(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    {epTitle === "OCHO" ? setText("Bonne écoute de l'EP :") : setText("Découvrez le nouvel EP :")}
  }, [epTitle]);

  return (
    <div className="epTitle flex text-3xl">
      <h1 className={`text-white slide-up-text ${showText ? "show" : ""}`}>
        {text}&nbsp;
      </h1>
      <h1
        className={`text-white slide-left-ep-title ${
          showEpTitle ? "show" : ""
        }`}
      >
        {epTitle}
      </h1>
    </div>
  );
}

export default HeaderEP;
