import { CSP_NONCE, Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';
import { Product } from '../dtattype';
import { ProductService } from '../services/product.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { UserService } from '../services/user.service';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  constructor(private route: Router, private authinsellerproduct: SellerService,
    private product: ProductService, private user:UserService) {
 

  }
  @Output() productIdemit= new EventEmitter<number | undefined>()
  username: string |undefined;
  sellername: string = '';
  sellermenu: string = "default";
  searchprodut: undefined | Product[];
cartitem: number = 0;

 
  ngOnInit() {
  

    this.route.events.subscribe((val: any) => {
      if (val.url) {


        if (localStorage.getItem('seller') && val.url.includes('seller')) {
       
          this.sellermenu = "menuseller";
          if (localStorage.getItem('seller')) {

            let sellerdata = localStorage.getItem('seller');

            let sellerinfo = sellerdata && JSON.parse(sellerdata)[0];

            this.sellername = sellerinfo.name;
            //console.log("name" +  this.sellername);

          }
        }
        else if(localStorage.getItem('user') ){
            this.sellermenu="usermenu"
            if(localStorage.getItem('user'))
            {
              
              let userinfo= localStorage.getItem('user');
              let userdata= userinfo && JSON.parse(userinfo);
          
              let userid= 0
                if(userdata[0])
                {
                  this.username= userdata[0].name;
                  userid= userdata[0].id
                }
                else{
                  this.username=userdata.name
                  userid= userdata.id
                }
         
             
      
              this.product.getcartproduct(userid)
            
                this.product.updatecart.subscribe((data)=>{
                
                  this.cartitem= data.length
                })
            
              // this.prddetail.updatecartlogin.subscribe((result)=>{
              //   this.logincarrtitem= result.length;
              //   console.log(this.logincarrtitem)
              // })
            
            
          }
            
        }

        else {
          this.sellermenu = "default";
        }
      }

    })
    if(localStorage.getItem("localitem")){
      let totalitem= localStorage.getItem("localitem")

       let item=  totalitem && JSON.parse(totalitem);
      
       this.cartitem= item.length
    
    }
   
    this.product.updatecart.subscribe((data)=>
    {
  
     this.cartitem= data.length;
     
    })
    
  }
  logout() {
    localStorage.removeItem('seller');
    this.route.navigate([' ']);
  }
  usrlogout(){
    localStorage.removeItem('user');
    this.route.navigate(['/']);
  }
  authsellerprodut() {
    console.log("isloogidin");
    this.authinsellerproduct.isloggesdIn.next(true);
    this.route.navigate(['seller-product']);


  }
  searchinput(data: any) {
    const searchinput = data.target.value;
    this.product.listsearchprodut(searchinput).subscribe((result) => {
      if (result.length > 5) {
        result.length = 5;
        this.searchprodut = result;
      }
      else {
        this.searchprodut = result;
      }
    })
  }
  hidesearchlist() {
    this.searchprodut = undefined;
  }
 
  searchbtnclicked(data: string) {

    this.route.navigate([`productsearch/${data}`])


  }
  listclick(data: number) {
    // this.productIdemit.emit(data);
    this.route.navigate([`Productdetail/${data}`]);
  
  }
  // prdlist(){
  //   this.authinsellerproduct.isloggesdIn.next(true);
  // }
}
