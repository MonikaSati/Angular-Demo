export interface SellerSignUpI{
    name:string;
    password: string,
    email:string
}
export interface SellerLoginI{
    email:string;
    password:string
} 
export interface Product{
    id: number;
    name:string;
    price: number;
    color: string;
    description: string;
    imageurl: string
}
