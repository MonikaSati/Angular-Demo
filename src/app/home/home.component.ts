import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../dtattype';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route: ActivatedRoute, private produt: ProductService) { }
  popularproduct: undefined | Product[];
  treandingproduct: undefined | Product[];
  ngOnInit() {
    this.produt.getfirst3product().subscribe((data) => {
      console.log(data);
      this.popularproduct = data;
    })
    this.produt.gettendingproducts().subscribe((data)=>
    {
      this.treandingproduct=data
    })
  }
}



