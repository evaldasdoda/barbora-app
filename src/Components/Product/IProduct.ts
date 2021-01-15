export interface IProduct {
    id: number | string,
    productName: string,
    productPrice: string | number,
    productDiscountPrice: string | number,
    productImage: string,
    productWithoutE: boolean
}