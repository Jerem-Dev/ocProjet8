import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="/img/LOGO-RED.svg" alt="logo kasa" />
        </div>
        <div className="header__nav">
          <Link to="/" className="header__links">
            Acceuil{" "}
          </Link>
          <Link to="/about" className="header__links">
            À propos
          </Link>
        </div>
      </div>
    </header>
  );
}
