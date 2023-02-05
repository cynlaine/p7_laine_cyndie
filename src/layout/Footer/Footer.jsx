import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo_white.png";
import "../../sass/layout/_footer.scss";

function Footer() {
    return (
        <footer>
            <Link to="/">
                <img src={logo} alt="Kasa" className="logo" />
            </Link>
            <div className="copyright_footer">
                © 2020 Kasa. All rights reserved
            </div>
        </footer>
    );
}

export default Footer;
