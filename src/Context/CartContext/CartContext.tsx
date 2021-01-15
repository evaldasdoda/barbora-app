import React, {useState} from "react";
import {ICartContext} from "./ICartContext";
import {IProduct} from "../../Components/Product/IProduct";

export const CartContext = React.createContext<Partial<ICartContext>>({});

export default function CartProvider(props: any) {
    const [cart, setCart] = useState<any>([]);

    const addToCart = (product: IProduct) => {
        let index = cart.findIndex((item: IProduct) => item.id === product.id);
        if (index === -1) {
            product.productQty = 1;
            setCart([...cart, product]);
        } else {
            cart[index].productQty++;
            setCart([...cart]);
        }
    }

    const deleteFromCart = (product: IProduct) => {
        let index = cart.findIndex((item: IProduct) => item.id === product.id);
        console.log(index);
        cart.splice(index, 1);
        setCart([...cart]);
    }

    const minusFromCart = (product: IProduct) => {
        let index = cart.findIndex((item: IProduct) => item.id === product.id);
        if (index !== -1) {
            if (cart[index].productQty === 1) {
                cart.splice(index, 1);
            } else {
                cart[index].productQty--;
            }
            setCart([...cart]);
        }
    }

    const contextValue = {cart, addToCart, deleteFromCart, minusFromCart};
    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    )
}