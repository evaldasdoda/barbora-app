import {IProduct} from "../Components/Product/IProduct";

export const cartItemCount = (cart: Array<IProduct>) => {
    let count = 0;

    cart.map((item: IProduct) => {
        if (item.productQty) {
            count += item.productQty;
        }
    });

    return count;
}