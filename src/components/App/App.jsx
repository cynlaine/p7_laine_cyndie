import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Rental from "../../pages/Rental/Rental";
import datas from "../../datas/logements";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home datas={datas} />} />
                <Route path="/about" element={<About />} />
                <Route path="/rental/:id" element={<Rental datas={datas} />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </>
    );
}

export default App;
