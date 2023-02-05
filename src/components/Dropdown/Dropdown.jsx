import { useState } from "react";
import "../../sass/components/_dropdown.scss";
import arrow_icon from "../../assets/icons/arrow_icon.png";

function Dropdown(props) {
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
            <div className={isOpen ? "content" : "content--hidden"}>
                {props.children}
            </div>
        </div>
    );
}

export default Dropdown;
