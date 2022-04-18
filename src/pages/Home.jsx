import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Categories, PizzaBlock, PizzaLoadingBlock, SortPopup} from "../components";
import {setCategory, setSortBy} from "../redux/action/filters";
import {fetchPizzas} from "../redux/action/pizzas";
import {addPizzaToCart} from "../redux/action/cart";

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
    const cartItems = useSelector(({cart}) => cart.items);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    const handleAddPizzaToCart = useCallback((obj) => {
        dispatch(addPizzaToCart(obj));
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
                {isLoaded ? items.map((obj) => (
                    <PizzaBlock
                        key={obj.id}
                        onClickAddPizza={handleAddPizzaToCart}
                        addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                        {...obj}
                    />
                )) :
                    Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)
                }
            </div>
        </div>
    );
};

export default Home;