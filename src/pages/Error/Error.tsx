import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main className="error-page">
      <p>404</p>
      <p>La page que vous cherchez n'existe pas.</p>
      <Link to="/">Retourner à l'accueil</Link>
    </main>
  );
}
