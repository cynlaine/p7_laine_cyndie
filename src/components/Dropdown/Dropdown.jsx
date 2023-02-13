import { useState } from "react";
import arrow_icon from "../../assets/icons/arrow_icon.svg";

export default function Dropdown(props) {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="dropdown">
            <div className="dropdown_header">
                {props.title}
                <div>
                    {isOpen ? (
                        <button onClick={() => setOpen(false)}>
                            <img
                                className="arrow arrow--up"
                                src={arrow_icon}
                                alt="bouton"
                            />
                        </button>
                    ) : (
                        <button onClick={() => setOpen(true)}>
                            <img
                                className="arrow arrow--down"
                                src={arrow_icon}
                                alt="bouton"
                            />
                        </button>
                    )}
                </div>
            </div>
            {Array.isArray(props.content) ? (
                <ul className={isOpen ? "content" : "content--hidden"}>
                    {props.content.map((equipment, index) => (
                        <li key={`${equipment}-${index}`}>{equipment}</li>
                    ))}
                </ul>
            ) : (
                <div className={isOpen ? "content" : "content--hidden"}>
                    {props.content}
                </div>
            )}
        </div>
    );
}
