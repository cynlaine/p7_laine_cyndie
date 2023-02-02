import styles from "../styles/components/banner.module.css";

function Banner(props) {
    return (
        <div className={styles.container}>
            <img src={props.image} alt={props.alt} />
            {props.children}
        </div>
    );
}

export default Banner;
