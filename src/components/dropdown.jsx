import { useState } from "react";
import styles from "../styles/components/dropdown.module.css";
import arrow from "../assets/arrow.png";

function Dropdown(props) {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {props.title}
                <div>
                    {isOpen ? (
                        <button onClick={() => setOpen(false)}>
                            <img
                                className={styles.arrow_up}
                                src={arrow}
                                alt="bouton"
                            />
                        </button>
                    ) : (
                        <button onClick={() => setOpen(true)}>
                            <img src={arrow} alt="bouton" />
                        </button>
                    )}
                </div>
            </div>
            <div
                className={
                    isOpen ? `${styles.content}` : `${styles.content_closed}`
                }
            >
                {props.children}
            </div>
        </div>
    );
}

export default Dropdown;
