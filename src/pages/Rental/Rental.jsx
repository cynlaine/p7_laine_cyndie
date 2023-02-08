import "../../sass/main.scss";
import datas from "../../datas/logements";
import Dropdown from "../../components/Dropdown/Dropdown";
import Rating from "../../components/Rating/Rating";
import Carousel from "../../components/Carousel/Carousel";
import { useParams } from "react-router-dom";

function Rentals() {
    let { id } = useParams();
    let data = datas.find((data) => data.id === id);
    return (
        <>
            <Carousel pictures={data.pictures} />
            <section className="rental">
                <header className="rental__header">
                    <div className="rental__header__wrap">
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
                    <div className="rental__header__wrap">
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
