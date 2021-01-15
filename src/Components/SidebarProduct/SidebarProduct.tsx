import React from "react";
import './SidebarProduct.scss'
import Products from '../../Data/Products.json';

export const SidebarProduct = () => {
    //TODO: make delete btn
    return (
        <div className='SIDEBAR-PRODUCT'>
            <div className="SIDEBAR-PRODUCT__image">
                <img src={`/products/${Products[0].productImage}`} alt='ff'/>
            </div>
            <div className="SIDEBAR-PRODUCT__info">
                <div className="SIDEBAR-PRODUCT__info-title">
                    {Products[0].productName}
                </div>
                <div className="SIDEBAR-PRODUCT__info-details">
                    <div className="SIDEBAR-PRODUCT__info-details-qty">
                        <span className="qty">1</span>
                        <span className='qty-title'>vnt.</span>
                    </div>
                    <div className="SIDEBAR-PRODUCT__info-details-price">
                        € 99
                    </div>
                </div>
            </div>
        </div>
    )
}