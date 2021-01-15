import {IProduct} from "../Components/Product/IProduct";

export const cartPriceCount = (cart: Array<IProduct>) => {
    let price = 0;

    cart.map((item: IProduct) => {
        if (item.productPrice && item.productQty) {
            price += Number(item.productPrice) * Number(item.productQty);
        }
    });

    return Number(price.toFixed(2));
}