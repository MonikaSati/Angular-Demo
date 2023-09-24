import { Component } from '@angular/core';
import { Product, cart, cartsummary } from '../dtattype';
import { ProductService } from '../services/product.service';
import { CartDetailComponent } from '../cart-detail/cart-detail.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
constructor(private product: ProductService ){}
totalamount:number= 0;

ngOnInit(){
  let userinfo = localStorage.getItem('user');
  let userdata = userinfo && JSON.parse(userinfo)[0];
  this.product.getcartproduct(userdata.id)
  this.product.updatecart.subscribe((data)=>{
    if(data){
      let price= 0;
    data.forEach((element)=>{
      if(element.quantity){
        price= price + (+ element.price * element.quantity)
      }

    })
  this.totalamount= price  + 100
    }
   
  })

}
}
