import React, {useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import {IProductButton} from "./IProductButton";
import {CartContext} from "../../Context/CartContext/CartContext";
import {IProduct} from "../Product/IProduct";

import './ProductButton.scss';

export const ProductButton = (props: IProductButton) => {
    const {cart, addToCart, minusFromCart} = useContext(CartContext);

    if (props.product.productQty && cart?.find((item: IProduct) => item.id === props.product.id)) {
        return (
            <div className='PRODUCT-QTY'>
                <button className='PRODUCT-QTY__add' onClick={() => addToCart(props.product)}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
                <div className='PRODUCT-QTY__qtyCont'>
                    <span className='qty'>
                        {props.product.productQty}
                    </span>
                    <span className='qty-title'>
                        vnt.
                    </span>
                </div>
                <button className='PRODUCT-QTY__minus' onClick={() => minusFromCart(props.product)}>
                    <FontAwesomeIcon icon={faMinus}/>
                </button>
            </div>
        )
    } else {
        return (
            <button onClick={() => addToCart(props.product)} className='PRODUCT-BUTTON'>
                Į krepšelį
            </button>
        )
    }
}