export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="../public/img/LOGO-RED.svg" alt="logo kasa" />
        </div>
        <div className="header__nav">
          <a href="#" className="header__links">
            Acceuil
          </a>
          <a href="#" className="header__links">
            À propos
          </a>
        </div>
      </div>
    </header>
  );
}
