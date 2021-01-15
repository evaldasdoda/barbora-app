import React from 'react';
import {IProduct} from "./IProduct";
import {ProductButton} from "../ProductButton/ProductButton";
import './Product.scss';

export const Product = (props: IProduct) => {
    return (
        <div className='PRODUCT'>
            <div className="PRODUCT__container">
                <div className="PRODUCT__container-image">
                    <img src={`/products/${props.productImage}`} alt={props.productName}/>
                </div>
                <div className="PRODUCT__container-title">
                    <h4>{props.productName}</h4>
                </div>
                <div className="PRODUCT__container-price">
                    <h4>€ {props.productPrice}</h4>
                </div>
                <div className="PRODUCT__container-button">
                    <ProductButton />
                </div>
            </div>
        </div>
    )
}