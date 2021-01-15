import React, {useContext} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {IProductObject} from "../Product/IProduct";
import {CartContext} from "../../Context/CartContext/CartContext";

import './SidebarProduct.scss';

export const SidebarProduct = (props: IProductObject) => {
    const {deleteFromCart} = useContext(CartContext);
    return (
        <div className='SIDEBAR-PRODUCT'>
            <div className="SIDEBAR-PRODUCT__image">
                <img src={`/products/${props.product.productImage}`} alt={props.product.productName}/>
            </div>
            <div className="SIDEBAR-PRODUCT__delete" onClick={() => deleteFromCart(props.product)}>
                <FontAwesomeIcon icon={faTrash}/>
            </div>
            <div className="SIDEBAR-PRODUCT__info">
                <div className="SIDEBAR-PRODUCT__info-title">
                    {props.product.productName}
                </div>
                <div className="SIDEBAR-PRODUCT__info-details">
                    <div className="SIDEBAR-PRODUCT__info-details-qty">
                        <span className="qty">{props.product.productQty}</span>
                        <span className='qty-title'>vnt.</span>
                    </div>
                    <div className="SIDEBAR-PRODUCT__info-details-price">
                        € {Number(props.product.productPrice) * Number(props.product.productQty)}
                    </div>
                </div>
            </div>
        </div>
    )
}