import React from "react";
import "../../sass/pages/_home.scss";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import banner from "../../assets//images/banner.png";
import datas from "../../datas/logements";

function Home() {
    return (
        <>
            <Banner image={banner} alt="Un paysage côtier">
                <h2>Chez vous, partout et ailleurs</h2>
            </Banner>
            <section className="gallery">
                <div className="gallery_grid">
                    {datas.map((rental) => (
                        <Card
                            key={rental.id}
                            cover={rental.cover}
                            title={rental.title}
                            id={rental.id}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Home;