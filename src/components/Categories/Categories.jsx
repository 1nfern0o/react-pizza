import React, {useState} from 'react';

const Categories = ({items}) => {
    const [selectItem, setSelectItem] = useState(null);

    const onSelectItem = (index) => {
        setSelectItem(index);
    }

    return (
        <div className="categories">
            <ul>
                <li
                    className={`${selectItem === null ? 'active' : ''}`}
                    onClick={() => onSelectItem(null)}
                >
                    Все
                </li>
                {items && items.map((item, index) => (
                    <li
                        key={`${item}_${index}`}
                        className={`${selectItem === index ? 'active' : ''}`}
                        onClick={() => onSelectItem(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;