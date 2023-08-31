import { Component, Output } from '@angular/core';
import { Product } from '../dtattype';
import { ProductService } from '../services/product.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

constructor( private prdservice:ProductService){}
product : undefined | Product[];
deleteicon= faTrash;
updateicon= faEdit;
isdeletedMessage: string="";
@Output()
productdetail:undefined | Product;
ngOnInit(){

this.prdservice.GetProduct().subscribe((result)=>
{
  console.log(result);

this.product= result;

})

}
delete(data: number){
  console.log(data);
 this.prdservice.deleteprd(data).subscribe((result)=>
 {
  this.isdeletedMessage="Product Deleted"
 });
}
// updateclick(data: number){
//   this.prdservice.updateclicks(data).subscribe((result)=>{
// this.productdetail= result;
//   })
// }
}