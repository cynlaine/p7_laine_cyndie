import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import banner from "../../assets//images/banner.png";

export default function Home(props) {
    return (
        <>
            <Banner
                class="banner banner--home"
                image={banner}
                alt="Un paysage côtier"
            >
                <h2>Chez vous, partout et ailleurs</h2>
            </Banner>
            <section className="gallery">
                {props.datas.map((data) => (
                    <Card key={data.id} data={data} />
                ))}
            </section>
        </>
    );
}
