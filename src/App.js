import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Header} from "./components";
import {Cart, Home} from "./pages";

function App() {
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