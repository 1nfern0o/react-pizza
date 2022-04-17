import Constants from "../constans";

const setSortBy = ({type, order}) => ({
    type: Constants.SET_SORT_BY,
    payload: {type, order},
});

const setCategory = (catIndex) => ({
    type: Constants.SET_CATEGORY,
    payload: catIndex,
});

export {
    setSortBy,
    setCategory
};

