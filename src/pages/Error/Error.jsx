import { Link } from "react-router-dom";
import "../../sass/main.scss";

function Error() {
    return (
        <section className="error">
            <h2 className="error_title">404</h2>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="error_backlink">
                Retourner sur la page d'accueil
            </Link>
        </section>
    );
}

export default Error;
