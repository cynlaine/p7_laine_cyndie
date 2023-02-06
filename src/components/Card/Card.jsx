import "../../sass/components/_card.scss";
import { Link } from "react-router-dom";

function Card(props) {
    return (
        <article
            className="card"
            style={{ backgroundImage: `url(${props.data.cover})` }}
        >
            <Link to={`./rental/${props.data.id}`}>
                <h3>{props.data.title}</h3>
            </Link>
        </article>
    );
}

export default Card;
