import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Categories, PizzaBlock, SortPopup} from "../components";
import { setCategory } from "../redux/action/filters";

const categoryName = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
];
const sortItems = [
    {name: 'популярности', type: 'popular' },
    {name: 'цене', type: 'price' },
    {name: 'алфавиту', type: 'alphabet' },
];

const Home = () => {
    const dispatch = useDispatch();
    const { items } = useSelector(({pizzas, filters}) => ({
        items: pizzas.items,
        sortBy: filters.sortBy
    }));

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    return (
        <div>
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={categoryName}
                />
                <SortPopup items={sortItems} />
            </div>
            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">
                {items && items.map((item) => (
                    <PizzaBlock key={item.id}{...item} />
                ))}
            </div>
        </div>
    );
};

export default Home;