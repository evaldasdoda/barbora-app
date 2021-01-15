import React from 'react';
import Products from '../../Data/Products.json';
import {Product} from "../../Components/Product/Product";
import {IProduct} from "../../Components/Product/IProduct";

import './Shop.scss';

export const ShopProducts = () => {
    return (
        <div className='SHOP-PRODUCTS'>
            {Products.map((product: IProduct) =>
                <div className='SHOP-PRODUCTS__product' key={product.id}>
                    <Product
                        product={product}
                    />
                </div>
            )}
        </div>
    )
}