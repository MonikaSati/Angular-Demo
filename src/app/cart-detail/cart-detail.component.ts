import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product, cartsummary } from '../dtattype';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent {
  constructor(private product: ProductService, private route: Router) { }

  cartiteam: Product[] | undefined
  loginmessage: string = ""
  cartsummary: cartsummary = {
    amount: 0,
    tax: 0,
    discount: 0,
    deliverycharge: 0,
    total: 0
  };

  ngOnInit() {
    if (!localStorage.getItem('user')) {
      if (localStorage.getItem('localitem')) {
        let product = localStorage.getItem('localitem')
        let items = product && JSON.parse(product)


        this.cartiteam = items;
        let price = 0;
        items.forEach((data: Product) => {
          let prodcutp = 0;
          if (data.quantity)
            prodcutp = data.quantity * data.price
          price = price + (+ prodcutp)
          return price
        })
        this.cartsummary.amount = price;
        this.cartsummary.tax = price / 10;
        this.cartsummary.discount = price / 10;
        if(this.cartiteam)
        {
          this.cartsummary.deliverycharge = 100;
        }else{
          this.cartsummary.deliverycharge = 0;
        }
       
        this.cartsummary.total = this.cartsummary.amount + this.cartsummary.deliverycharge +
          this.cartsummary.tax - this.cartsummary.discount;




      }
    } else {
      let userinfo = localStorage.getItem('user');

      let userdata = userinfo && JSON.parse(userinfo);
      let userId = 0
      if (userdata[0]) {
        userId = userdata[0].id
      }
      else {
        userId = userdata.id
      }
      this.product.getcartproduct(userId)
      this.product.updatecart.subscribe((data) => {
        this.cartiteam = data;
        let price = 0;
        data.forEach((product) => {
          let prodcutp = 0;
          if (product.quantity)
            prodcutp = product.quantity * product.price
          price = price + (+ prodcutp)
          return price
        })
        this.cartsummary.amount = price;
        this.cartsummary.tax = price / 10;
        this.cartsummary.discount = price / 10;
        if(this.cartiteam.length  > 0){
        
          this.cartsummary.deliverycharge = 100;
        }else{
          this.cartsummary.deliverycharge = 0;
        }
       
        this.cartsummary.total = this.cartsummary.amount + this.cartsummary.deliverycharge +
          this.cartsummary.tax - this.cartsummary.discount;

      })

    }
  }
  removeproduct(id: number) {
    if (!localStorage.getItem('user')) {
      let data = localStorage.getItem('localitem')
      let products = data && JSON.parse(data)
      let prdlist = products.filter((item: Product) => item.id != id)
      this.product.removeitem(prdlist)

      this.cartiteam = prdlist


    } else {


      let userinfo = localStorage.getItem('user');
      let userdata = userinfo && JSON.parse(userinfo);
      let userId = 0;
      if (userdata[0]) {
        userId = userdata[0].id
      }
      else{
        userId= userdata.id
      }
      this.product.deleteproductfromcart(id).subscribe((result) => {
        if (result) {
          this.product.getcartproduct(userId)
        
        }
      })
    }
  }
  checkout() {
    if (localStorage.getItem('user')) {
      this.route.navigate(['checkout'])
    }
    else {
      this.loginmessage = "Please Login First! "
    }


  }
}
