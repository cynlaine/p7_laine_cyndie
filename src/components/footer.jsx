import { Link } from "react-router-dom";
import logo from "../assets/logo_white.png";
import styles from "../styles/components/footer.module.css";

function Footer() {
    return (
        <footer>
            <Link to="/">
                <img src={logo} alt="Kasa" className={styles.logo} />
            </Link>
            <div className={styles.copyright_footer}>
                © 2020 Kasa. All rights reserved
            </div>
        </footer>
    );
}

export default Footer;
