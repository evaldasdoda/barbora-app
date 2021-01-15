import React, {useContext} from 'react';
import './Shop.scss';
import {ShopSider} from "./ShopSider";
import {ShopProducts} from "./ShopProducts";
import {SidebarContext} from "../../Context/SidebarContext/SidebarContext";

export const ShopLayout = () => {
    const {sidebarOpen} = useContext(SidebarContext);
    console.log(sidebarOpen)
    return (
        <div className='SHOP'>
            <div className="SHOP__products">
                <ShopProducts />
            </div>
            <div className={`SHOP__sider ${sidebarOpen ? 'active' : ''}`}>
                <ShopSider />
            </div>
        </div>
    )
}