import Error from "./components/error";
import Home from "./pages/home";
import About from "./pages/about";
import Rentals from "./pages/rentals";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/rentals/:id' element={<Rentals />} />
                <Route path='/*' element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
