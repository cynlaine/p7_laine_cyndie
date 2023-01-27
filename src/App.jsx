import Error from "./components/Error"
import Home from "./pages/Home"
import About from "./pages/About"
import Rentals from "./pages/Rentals"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/rentals/:id" element={<Rentals />}/>
        <Route path="/*" element={<Error />}/>
    </Routes>
    </div>
  );
}

export default App;
