import React from 'react';
import {IProductObject} from "./IProduct";
import {ProductButton} from "../ProductButton/ProductButton";
import ReactTooltip from "react-tooltip";

import './Product.scss';

export const Product = (props: IProductObject) => {
    return (
        <div className='PRODUCT'>
            <div className="PRODUCT__container">
                <div className="PRODUCT__container-image">
                    <img src={`/products/${props.product.productImage}`} alt={props.product.productName}/>
                </div>
                {props.product.productWithoutE && (
                    <>
                        <div className='PRODUCT__container-woe' data-tip="Produktas buvo pagamintas be E!">
                            E
                        </div>
                        <ReactTooltip place="top" type="dark" effect="float"/>

                    </>
                )}
                <div className="PRODUCT__container-title">
                    <h4>{props.product.productName}</h4>
                </div>
                <div className="PRODUCT__container-price">
                    <h4>€ {props.product.productPrice}</h4>
                </div>
                <div className="PRODUCT__container-button">
                    <ProductButton product={props.product}/>
                </div>
            </div>
        </div>
    )
}