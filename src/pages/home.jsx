import Banner from "../components/banner";
import "../styles/pages/home.module.css";
import banner from "../assets/banner.png";

function Home() {
    return (
        <main>
            <Banner image={banner} alt='bannière'>
                <h1>Chez vous, partout et ailleurs</h1>
            </Banner>
        </main>
    );
}

export default Home;
