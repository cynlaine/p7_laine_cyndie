import "../../sass/components/_card.scss";
import { Link } from "react-router-dom";

function Card(props) {
    return (
        <article
            className="card"
            style={{ backgroundImage: `url(${props.cover})` }}
        >
            <Link to={`./rental/${props.id}`}>
                <h3>{props.title}</h3>
            </Link>
        </article>
    );
}

export default Card;
