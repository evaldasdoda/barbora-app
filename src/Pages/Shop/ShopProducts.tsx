import React from 'react';
import Products from '../../Data/Products.json';
import './Shop.scss';
import {Product} from "../../Components/Product/Product";
import {IProduct} from "../../Components/Product/IProduct";

export const ShopProducts = () => {
    console.log(Products)
    return (
        <div className='SHOP-PRODUCTS'>
            {Products.map((product: IProduct) =>
                <div className='SHOP-PRODUCTS__product' key={product.id}>
                    <Product
                        id={product.id}
                        productName={product.productName}
                        productPrice={product.productPrice}
                        productDiscountPrice={product.productDiscountPrice}
                        productImage={product.productImage}
                        productWithoutE={product.productWithoutE}
                    />
                </div>
            )}
        </div>
    )
}