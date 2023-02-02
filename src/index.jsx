import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import "./styles/pages/index.css";
import "./assets/fonts.css";
import Header from "./components/header";
import Footer from "./components/footer";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <App />
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
