import { Injectable } from '@angular/core';
import { Product } from '../dtattype';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  AddProductS(data: Product){
    console.log(data);
    return this.http.post('http://localhost:3000/product',data);
  }
  GetProduct(){
    return this.http.get<Product[]>(`http://localhost:3000/product`);
  }
  deleteprd(data: number){
     return this.http.delete(`http://localhost:3000/product/${data}`);
  }
  GetProductDetail(data: string){
return this.http.get<Product>(`http://localhost:3000/product/${data}`)
  }
  updateproduct(data:Product){
    return this.http.put<Product>(`http://localhost:3000/product/${data.id}`, data)

  }
}
