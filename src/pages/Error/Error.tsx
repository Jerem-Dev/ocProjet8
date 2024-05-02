import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main className="error-page">
      <p className="number">404</p>
      <p className="not-found">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </main>
  );
}
