import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Categories, PizzaBlock, PizzaLoadingBlock, SortPopup} from "../components";
import {setCategory, setSortBy} from "../redux/action/filters";
import {fetchPizzas} from "../redux/action/pizzas";

const categoryName = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
];
const sortItems = [
    {name: 'популярности', type: 'popular', order: 'desc' },
    {name: 'цене', type: 'price', order: 'desc' },
    {name: 'алфавиту', type: 'name', order: 'asc' },
];

const Home = () => {
    const dispatch = useDispatch();
    const { items, isLoaded, filters } = useSelector(({pizzas, filters}) => ({
        items: pizzas.items,
        isLoaded: pizzas.isLoaded,
        filters
    }));

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    useEffect(() => {
        dispatch(fetchPizzas(filters.sortBy.type, filters.sortBy.order, filters.category));
    }, [filters.category, filters.sortBy]);

    return (
        <div>
            <div className="content__top">
                <Categories
                    activeCategory={filters.category}
                    onClickCategory={onSelectCategory}
                    items={categoryName}
                />
                <SortPopup activeSortType={filters.sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
            </div>
            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">
                {isLoaded ? items.map((item) => (
                    <PizzaBlock key={item.id}{...item} />
                )) :
                    Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)
                }
            </div>
        </div>
    );
};

export default Home;