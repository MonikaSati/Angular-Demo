import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../dtattype';
@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent {
  constructor(private route: ActivatedRoute, private product: ProductService, private router:Router) { }
 
  searchedproduct: undefined | Product[];
  noproductfound: undefined | string;
  ngOnInit() {
   let searchedproductquery = this.route.snapshot.paramMap.get('query');
    searchedproductquery && this.product.listsearchprodut(searchedproductquery).subscribe((result => {
      if(result.length >0){
        this.searchedproduct = result;
      }
    else{
      this.searchedproduct= undefined;
      this.noproductfound= "No Product Found";

    }
   
    }))
  }

}
