import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo_white.png";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <Link to="/">
                <img src={logo} alt="Kasa" className="footer__logo" />
            </Link>
            <div className="footer__text">
                &#169; {currentYear} Kasa. All rights reserved
            </div>
        </footer>
    );
}

export default Footer;
