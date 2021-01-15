import React, {useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart, faShoppingBasket} from '@fortawesome/free-solid-svg-icons'
import './Navbar.scss';
import {SidebarContext} from "../../Context/SidebarContext/SidebarContext";

export const Cart = () => {
    const {sidebarOpen, setSidebarOpen} = useContext(SidebarContext);
    return (
        <>
            <div className='CART-DESK'>
                <div className="CART-DESK__icon">
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    <div className="CART-DESK__icon-badge">1</div>
                </div>
                <div className="CART-DESK__price">
                    € 2.55
                </div>
            </div>
            <div className="CART-MOBILE" onClick={()=>setSidebarOpen(!sidebarOpen)} >
                <div className="CART-MOBILE__icon">
                    <FontAwesomeIcon icon={faShoppingBasket}/>
                </div>
                <div className="CART-MOBILE__price">
                    € 2.55
                </div>
            </div>
        </>
    )
}