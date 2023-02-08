import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import "../../sass/main.scss";

function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Kasa" />
            </Link>
            <nav className="nav_container">
                <Link to="/" className="nav_links">
                    Accueil
                </Link>
                <Link to="/about" className="nav_links">
                    A Propos
                </Link>
            </nav>
        </header>
    );
}

export default Header;
