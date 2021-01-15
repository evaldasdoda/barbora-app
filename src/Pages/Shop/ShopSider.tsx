import React, {useContext, useEffect, useState} from 'react';
import {SidebarProduct} from "../../Components/SidebarProduct/SidebarProduct";
import {CartContext} from "../../Context/CartContext/CartContext";
import {cartPriceCount} from "../../Utils/CartPriceCount";
import {IProduct} from "../../Components/Product/IProduct";

import './Shop.scss';

export const ShopSider = () => {
    const {cart} = useContext(CartContext);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        if (cart) {
            setPrice(cartPriceCount(cart));
        }
    }, [cart]);

    return (
        <aside className='SHOP-SIDER'>
            <div className="SHOP-SIDER__topCont">
                <div className="SHOP-SIDER__topCont-title">
                    <h4>Krepšelis</h4>
                    {cart?.map((item: any) => {
                    })}
                </div>
                <div className="SHOP-SIDER__topCont-products">
                    {cart?.length ? (
                        <>
                            {cart.map((item: IProduct) => <SidebarProduct key={item.id} product={item}/>)}
                        </>
                    ) : (
                        <h4>Pridėkite produktus</h4>
                    )}
                </div>
            </div>
            <div className="SHOP-SIDER__bottomCont">
                <div className="SHOP-SIDER__bottomCont-button">
                    <button>Pirkti</button>
                </div>
                <div className="SHOP-SIDER__bottomCont-price">
                    <span className='price-title'>Kaina</span>
                    <span className='price'>€ {price}</span>
                </div>
            </div>
        </aside>
    )
}