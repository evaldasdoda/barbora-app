import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Navbar.scss';

export const Cart = () => {
    return (
        <div className='CART'>
            <div className="CART__icon">
                <FontAwesomeIcon icon={faShoppingCart} />
                <div className="CART__icon-badge">1</div>
            </div>
            <div className="CART__price">
                € 2.55
            </div>
        </div>
    )
}