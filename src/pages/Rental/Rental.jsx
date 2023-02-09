import "../../sass/main.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import Rating from "../../components/Rating/Rating";
import Carousel from "../../components/Carousel/Carousel";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Rentals(props) {
    let { id } = useParams();
    let data = props.datas.find((data) => data.id === id);
    if (!data) {
        return <Navigate to="/404" />;
    }
    return (
        <>
            <Carousel pictures={data.pictures} />
            <section className="rental">
                <header className="rental__header">
                    <div className="rental__header__title-wrap">
                        <h2 className="rental__header__title">{data.title}</h2>
                        <p className="rental__header__location">
                            {data.location}
                        </p>
                        <div className="rental__header__tags">
                            <ul>
                                {data.tags.map((tag, index) => (
                                    <li key={`${tag}-${index}`}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="rental__header__host-wrap">
                        <div className="rental__header__host">
                            <p className="rental__header__host__name">
                                {data.host.name}
                            </p>
                            <img
                                className="rental__header__host__picture"
                                src={data.host.picture}
                                alt="host"
                            ></img>
                        </div>
                        <div className="rental__header__rating">
                            <Rating value={data.rating} />
                        </div>
                    </div>
                </header>
                <div className="rental__content">
                    <Dropdown title="Description">{data.description}</Dropdown>
                    <Dropdown title="Equipements">
                        <ul>
                            {data.equipments.map((equipment, index) => (
                                <li key={`${equipment}-${index}`}>
                                    {equipment}
                                </li>
                            ))}
                        </ul>
                    </Dropdown>
                </div>
            </section>
        </>
    );
}

export default Rentals;
