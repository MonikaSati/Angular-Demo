import { Component } from '@angular/core';
import { Product } from '../dtattype';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
addproductMessage: string="";
constructor( private productservice: ProductService){

}
  addproduct(data: Product){

this.productservice.AddProductS(data).subscribe((result)=>{
  if(result)
  {
  this.addproductMessage="Product Added";
  setTimeout(() => {
    this.addproductMessage="";
  },3000);
  }
});
  }

}
