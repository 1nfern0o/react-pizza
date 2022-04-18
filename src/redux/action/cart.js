import Constants from "../constans";

const addPizzaToCart = (pizzaObj) => ({
    type: Constants.ADD_PIZZA_CART,
    payload: pizzaObj
});

export {
    addPizzaToCart
};