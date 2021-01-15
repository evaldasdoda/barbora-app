import {IProduct} from "../../Components/Product/IProduct";

export interface ICartContext {
    cart: Array<IProduct>,
    addToCart: Function | any,
    deleteFromCart: Function | any,
    minusFromCart: Function | any
}