/* eslint-disable no-lone-blocks */
import arrow_icon from "../../assets/icons/arrow_icon.svg";
import { useState } from "react";

export default function Carousel({ pictures }) {
    const [isActive, setActive] = useState(0);

    const nextClick = () => {
        setActive(isActive === pictures.length - 1 ? 0 : isActive + 1);
    };

    const prevClick = () => {
        setActive(isActive === 0 ? pictures.length - 1 : isActive - 1);
    };

    return (
        <section className="carousel">
            {pictures.map((picture, index) => (
                <div className="slide" key={index}>
                    {index === isActive && <img src={picture} alt="" />}
                </div>
            ))}
            {pictures.length > 1 ? (
                <>
                    <button className="btn btn__next" onClick={nextClick}>
                        <img src={arrow_icon} alt="" />
                    </button>
                    <button className="btn btn__prev" onClick={prevClick}>
                        <img src={arrow_icon} alt="" />
                    </button>
                    <div className="counter">
                        {isActive + 1}/{pictures.length}
                    </div>
                </>
            ) : null}
        </section>
    );
}
