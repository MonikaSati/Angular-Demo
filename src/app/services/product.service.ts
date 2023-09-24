import { EventEmitter, Injectable } from '@angular/core';
import { Product, cart } from '../dtattype';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  updatecart = new EventEmitter<Product[] | []>()
  AddProductS(data: Product) {
    
    return this.http.post('http://localhost:3000/product', data);
  }
  GetProduct() {
    return this.http.get<Product[]>(`http://localhost:3000/product`);
  }
  deleteprd(data: number) {
    return this.http.delete(`http://localhost:3000/product/${data}`);
  }
  // getProductdetail(data: number) {
  //   return this.http.get<Product>(`http://localhost:3000/product/${data}`)
  // }
  GetProductDetail(data: string) {
    return this.http.get<Product>(`http://localhost:3000/product/${data}`)
  }
  updateproduct(data: Product) {
    return this.http.put<Product>(`http://localhost:3000/product/${data.id}`, data)

  }
  getfirst3product() {
    return this.http.get<Product[]>(`http://localhost:3000/product?_limit=3`)
  }
  gettendingproducts() {
    return this.http.get<Product[]>(`http://localhost:3000/product?_limit=7`)
  }
  listsearchprodut(data: any) {
    return this.http.get<Product[]>(`http://localhost:3000/product?q=${data}`)
  }
  localstoragecart(data: Product) {
    let cartiem = [];
    let localitem = localStorage.getItem("localitem")
    if (!localitem) {
      localStorage.setItem("localitem", JSON.stringify([data]))

      this.updatecart.emit([data])
    }
    else {

      cartiem = JSON.parse(localitem);

      cartiem.push(data);

      localStorage.setItem("localitem", JSON.stringify(cartiem))
    }

    this.updatecart.emit(cartiem)
  }
  removeitem(data: Product[]) {
    localStorage.setItem('localitem', JSON.stringify(data))


    this.updatecart.emit(data)
  }
  addtocart(data: cart) {
    return this.http.post('http://localhost:3000/cart', data)
  }

  getcartproduct(userid: number) {
    return this.http.get<Product[]>(`http://localhost:3000/cart?userId=${userid}`, { observe: 'response' })
      .subscribe((data) => {
      
        if (data && data.body ) {
          this.updatecart.emit(data.body);
        
        }
      })

  }
  deleteproductfromcart(data: number) {
    return this.http.delete(`http://localhost:3000/cart/${data}`)

    // this.updatecart.emit(result)
  }
}
