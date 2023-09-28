import { Component } from '@angular/core';
import { Catogery, Product } from '../dtattype';
import { ProductService } from '../services/product.service';
import { CatogeryService } from '../services/catogery.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
addproductMessage: string="";
catogery: Catogery[]| undefined
constructor( private productservice: ProductService, private catservice: CatogeryService){}

ngOnInit(){
this.catservice.getCat().subscribe((data)=>{
this.catogery= data
})
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
