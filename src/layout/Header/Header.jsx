import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import "../../sass/main.scss";

function Header() {
    return (
        <header>
            <Link to="/">
                <img className="header-logo" src={logo} alt="Kasa" />
            </Link>
            <nav className="nav">
                <Link to="/" className="nav__links">
                    Accueil
                </Link>
                <Link to="/about" className="nav__links">
                    A Propos
                </Link>
            </nav>
        </header>
    );
}

export default Header;
