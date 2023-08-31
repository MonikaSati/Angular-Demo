import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {
  constructor(private route: Router, private authinsellerproduct: SellerService) {
    console.log("constructor called");

  }
  sellername: string = '';
  sellermenu: string = "default";

  ngOnChanges(changes: SimpleChanges) {
    console.log("on change called");

  }
  ngOnInit() {
    console.log("oninit called");

    this.route.events.subscribe((val: any) => {
      if (val.url) {
       
      
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.log("new one");
          this.sellermenu = "menuseller";
          if (localStorage.getItem('seller')) {

            let sellerdata = localStorage.getItem('seller');

            let sellerinfo = sellerdata && JSON.parse(sellerdata)[0];

            this.sellername = sellerinfo.name;
            //console.log("name" +  this.sellername);

          }
        }

        else {
          this.sellermenu = "default";
        }
      }

    })
  }
  logout() {
    localStorage.removeItem('seller');
    this.route.navigate([' ']);
  }
  authsellerprodut(){
    console.log("isloogidin");
    this.authinsellerproduct.isloggesdIn.next(true);
    this.route.navigate(['seller-product']);


  }
}
