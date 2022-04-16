import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {setPizzas as setPizzasAction} from "./redux/action/pizzas";

function App({items, setPizzas}) {

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then((res) => {
            setPizzas(res.data.pizzas);
        });
    }, [setPizzas]);
    return (
        <Router>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route exact path="/" element={<Home items={items} />} />
                            <Route exact path="/cart" element={<Cart />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

const mapStateToProps = (state) => ({
    items: state.pizzas.items,
    filters: state.filters,
});
const mapDispatchToProps = (dispatch) => ({
    setPizzas: (items) => dispatch(setPizzasAction(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
