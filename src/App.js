import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {setPizzas} from "./redux/action/pizzas";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:3001/pizzas?_order=asc&_sort=price').then(({ data }) => {
            dispatch(setPizzas(data));
        });
    }, []);
    return (
        <Router>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/cart" element={<Cart />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

// const mapStateToProps = (state) => ({
//     items: state.pizzas.items,
//     filters: state.filters,
// });
// const mapDispatchToProps = (dispatch) => ({
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;