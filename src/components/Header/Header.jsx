import React from 'react';
import logoSvg from "../../assets/img/pizza-logo.svg";
import { ButtonHeader } from "../index";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
    const { totalPrice, totalCount } = useSelector(({ cart }) => ({
        totalPrice: cart.totalPrice,
        totalCount: cart.totalCount,
    }))

    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width="38" src={logoSvg} alt="Pizza logo"/>
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                <div className="header__cart">
                    <Link to="/cart">
                        <ButtonHeader totalPrice={totalPrice} totalCount={totalCount} className="button--cart" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;