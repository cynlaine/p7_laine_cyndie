import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
        <h1>Header</h1>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>
    </div>
  );
}

export default Header;
