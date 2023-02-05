import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Rental from "../../pages/Rental/Rental";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/rental/:id" element={<Rental />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </>
    );
}

export default App;
