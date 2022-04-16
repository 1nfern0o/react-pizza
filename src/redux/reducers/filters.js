import Constants from "../constans";

const initialState = {
    category: 0,
    sortBy: 'popular'
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case Constants.SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            };
        case Constants.SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            };
        default:
            return state;
    }
};

export default filters;