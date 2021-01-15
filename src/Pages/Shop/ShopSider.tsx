import React from 'react';
import './Shop.scss';
import {SidebarProduct} from "../../Components/SidebarProduct/SidebarProduct";

export const ShopSider = () => {
    return (
        <aside className='SHOP-SIDER'>
            <div className="SHOP-SIDER__topCont">
                <div className="SHOP-SIDER__topCont-title">
                    <h4>Krepšelis</h4>
                </div>
                <div className="SHOP-SIDER__topCont-products">
                    <SidebarProduct />
                </div>
            </div>
            <div className="SHOP-SIDER__bottomCont">
                <div className="SHOP-SIDER__bottomCont-button">
                    <button>Pirkti</button>
                </div>
                <div className="SHOP-SIDER__bottomCont-price">
                    <span className='price-title'>Kaina</span>
                    <span className='price'>€ 2,08</span>
                </div>
            </div>
        </aside>
    )
}