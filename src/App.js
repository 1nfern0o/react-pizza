import React, {useEffect, useState} from "react";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import axios from "axios";
import {Header} from "./components";
import {Cart, Home} from "./pages";

function App() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then((res) => setPizzas(res.data.pizzas));
    }, []);
    return (
        <Router>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route exact path="/" element={<Home items={pizzas} />} />
                            <Route exact path="/cart" element={<Cart />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
