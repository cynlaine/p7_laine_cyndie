import styles from "../styles/components/card.module.css";
import { Link } from "react-router-dom";

function Card(props) {
    return (
        <article
            className={styles.container}
            style={{ backgroundImage: `url(${props.cover})` }}>
            <Link to={`./rentals/${props.id}`}>
                <h3>{props.title}</h3>
            </Link>
        </article>
    );
}

export default Card;
