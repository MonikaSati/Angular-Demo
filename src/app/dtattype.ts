export interface SellerSignUpI{
    name:string;
    password: string,
    email:string
}
export interface SellerLoginI{
    email:string;
    password:string
} 
export interface Catogery{
    id: number;
    name: string;
}
export interface Product{
    id: number;
    //catogeryId:number;
    name:string;
    price: number;
    color: string;
    description: string;
    imageurl: string;
    quantity: undefined | number;
    productId: undefined | number
}
export interface User{
    email:string;
    password:string
}
export interface UserSign{
    name: string;
    email:string;
    password:string
}
export interface cart{
    productId: number;
    name:string;
    price: number;
  id ?: number;
    color: string;
    description: string;
    imageurl: string;
    quantity: undefined | number;
    userId: number
}
export interface cartsummary{
    amount: number;
    tax: number;
    discount: number;
    total: number;
    deliverycharge: number
}