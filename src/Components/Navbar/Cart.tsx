import React, {useContext, useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faShoppingBasket} from '@fortawesome/free-solid-svg-icons';
import {SidebarContext} from "../../Context/SidebarContext/SidebarContext";
import {CartContext} from "../../Context/CartContext/CartContext";
import {cartItemCount} from "../../Utils/CartItemCount";
import {cartPriceCount} from "../../Utils/CartPriceCount";

import './Navbar.scss';

export const Cart = () => {
    const {sidebarOpen, setSidebarOpen} = useContext(SidebarContext);
    const {cart} = useContext(CartContext);
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        if (cart) {
            setCount(cartItemCount(cart));
            setPrice(cartPriceCount(cart));
        }
    }, [cart]);

    return (
        <>
            <div className='CART-DESK'>
                <div className="CART-DESK__icon">
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    {count > 0 && <div className="CART-DESK__icon-badge">{count}</div>}
                </div>
                <div className="CART-DESK__price">
                    € {price}
                </div>
            </div>
            <div className="CART-MOBILE" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <div className="CART-MOBILE__icon">
                    <FontAwesomeIcon icon={faShoppingBasket}/>
                </div>
                <div className="CART-MOBILE__price">
                    € {price}
                </div>
            </div>
        </>
    )
}