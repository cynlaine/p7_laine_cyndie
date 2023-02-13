import { Link } from "react-router-dom";

export default function Card(props) {
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
