import React, {useContext} from 'react';
import {ShopSider} from "./ShopSider";
import {ShopProducts} from "./ShopProducts";
import {SidebarContext} from "../../Context/SidebarContext/SidebarContext";

import './Shop.scss';

export const ShopLayout = () => {
    const {sidebarOpen} = useContext(SidebarContext);
    return (
        <div className='SHOP'>
            <div className="SHOP__products">
                <ShopProducts/>
            </div>
            <div className={`SHOP__sider ${sidebarOpen ? 'active' : ''}`}>
                <ShopSider/>
            </div>
        </div>
    )
}