import { Fragment } from "react";
import "./Connexion.css";

function Connexion() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const code = e.target.code.value;

    if (code === "1234") {
      console.log("code correct");
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/launch";
    } else {
      console.log("code incorrect");
      alert("Code incorrect");
    }
  };

  return (
    <Fragment>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="password" name="code" placeholder="code" required />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button type="submit" name="submit" className="btn" value="Accéder">
            Accéder
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default Connexion;
