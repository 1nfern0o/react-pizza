import Constants from "../constans";
import axios from "axios";

const setLoaded = (val) => ({
    type: Constants.SET_LOADED,
    payload: val
});

const fetchPizzas = (sortBy, order, category) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=${order}`).then(({ data }) => {
        dispatch(setPizzas(data));
    });
};


const setPizzas = (items) => ({
    type: Constants.SET_PIZZAS,
    payload: items,
});

export {
    fetchPizzas,
    setPizzas,
    setLoaded,
};

