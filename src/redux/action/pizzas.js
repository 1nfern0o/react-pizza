import Constants from "../constans";

const setPizzas = (items) => ({
    type: Constants.SET_PIZZAS,
    payload: items,
});

export {
    setPizzas
};

