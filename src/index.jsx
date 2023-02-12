import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./sass/main.scss";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <main>
                <App />
            </main>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
