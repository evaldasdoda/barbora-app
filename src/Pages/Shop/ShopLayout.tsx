import React from 'react';
import './Shop.scss';
import {ShopSider} from "./ShopSider";
import {ShopProducts} from "./ShopProducts";

export const ShopLayout = () => {
    return (
        <div className='SHOP'>
            <div className="SHOP__products">
                <ShopProducts />
            </div>
            <div className="SHOP__sider">
                <ShopSider />
            </div>
        </div>
    )
}