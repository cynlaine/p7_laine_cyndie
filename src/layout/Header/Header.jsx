import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";

export default function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt="Kasa" />
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
