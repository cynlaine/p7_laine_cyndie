import "../../sass/components/_banner.scss";

function Banner(props) {
    return (
        <div className="banner">
            <img src={props.image} alt={props.alt} />
            {props.children}
        </div>
    );
}

export default Banner;
