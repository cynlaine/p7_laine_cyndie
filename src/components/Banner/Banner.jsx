import "../../sass/main.scss";

function Banner(props) {
    return (
        <div className={props.class}>
            <img src={props.image} alt={props.alt} />
            {props.children}
        </div>
    );
}

export default Banner;
