import Banner from "../components/banner";
import styles from "../styles/pages/home.module.css";
import banner from "../assets/banner.png";
import data from "../datas/logements";
import Card from "../components/card";

function Home() {
    return (
        <main>
            <Banner image={banner} alt='paysage'>
                <h2>Chez vous, partout et ailleurs</h2>
            </Banner>
            <div className={styles.gallery}>
                <div className={styles.cards_grid}>
                    {data.map((rental) => (
                        <Card
                            key={rental.id}
                            cover={rental.cover}
                            title={rental.title}
                            id={rental.id}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Home;
