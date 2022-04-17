import React, {memo} from 'react';
import PropTypes from "prop-types";

const propTypes = {
    // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func
};

const defaultTypes = {
    activeCategory: null,
    items: []
};

const Categories = memo(({ activeCategory, items, onClickCategory }) => {
    return (
        <div className="categories">
            <ul>
                <li
                    className={`${activeCategory === null ? 'active' : ''}`}
                    onClick={() => onClickCategory(null)}
                >
                    Все
                </li>
                {items && items.map((item, index) => (
                    <li
                        key={`${item}_${index}`}
                        className={`${activeCategory === index ? 'active' : ''}`}
                        onClick={() => onClickCategory(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
});

Categories.propTypes = propTypes;
Categories.default = defaultTypes;

export default Categories;