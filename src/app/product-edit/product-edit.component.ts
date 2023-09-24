import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../dtattype';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  constructor(private route: ActivatedRoute, private product: ProductService, private routing: Router) { }
  productdetail: undefined | Product
  updatemessage: undefined | string;
  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get('id');
    productId && this.product.GetProductDetail(productId).subscribe((result) => {
      this.productdetail = result;
    })

  }
  updateproduct(data: Product) {
    console.log(data);
    this.product.updateproduct(data).subscribe((result) => {
      if (result) {
        this.updatemessage = "Product Updated !";
      }
      else {
        this.updatemessage = undefined;
      }
      setTimeout(() => {
        this.updatemessage=undefined;
        this.routing.navigate(['seller-productlist'])
      }, 3000);
   
    })
   
  }

}
