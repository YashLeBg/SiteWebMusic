import "./Connexion.css";
import CryptoJS from "crypto-js";

function Connexion() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const code = e.target.code.value;

    // Hachage du mot de passe entré par l'utilisateur
    const hashedCode = CryptoJS.SHA256(code).toString();

    if (hashedCode === "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4") {
      console.log("code correct");
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/launch";
    } else {
      console.log(CryptoJS.SHA256(code).toString());
      alert("Code incorrect");
    }
  };

  return (
    <div className="pageConnexion">
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
    </div>
  );
}

export default Connexion;
