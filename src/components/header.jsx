import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "../styles/components/header.module.css";

function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Kasa" />
            </Link>
            <nav className={styles.nav_container}>
                <Link to="/" className={styles.nav_links}>
                    Accueil
                </Link>
                <Link to="/about" className={styles.nav_links}>
                    A Propos
                </Link>
            </nav>
        </header>
    );
}

export default Header;
