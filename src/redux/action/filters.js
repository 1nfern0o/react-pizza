import Constants from "../constans";

const setSortBy = (name) => ({
    type: Constants.SET_SORT_BY,
    payload: name,
});

const setCategory = (catIndex) => ({
    type: Constants.SET_CATEGORY,
    payload: catIndex,
});

export {
    setSortBy,
    setCategory
};

