import { Component, EventEmitter, Input, numberAttribute } from '@angular/core';
import { Product, cart } from '../dtattype';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  constructor(private route: ActivatedRoute, private product: ProductService) { }
  productDetail: undefined | Product;
  productquantity: number = 1;
  removetocart = false;
  filterped: Product[] | [] = [];
  productid: number | undefined

  //updatecartlogin= new EventEmitter<cart[]>()
  ngOnInit() {
    this.reload();
  }

  addprd() {

    this.productquantity = this.productquantity + 1;
  }
  subprd() {
    if (this.productquantity > 1) {
      this.productquantity = this.productquantity - 1;
    }
    else {
      this.productquantity = 1;
    }
  }
  addtocart() {
    if (this.productDetail) {
      this.productDetail.quantity = this.productquantity;
      if (!localStorage.getItem('user')) {
        this.product.localstoragecart(this.productDetail)
      }
      else {
        let user = localStorage.getItem('user')
        let userdata = user && JSON.parse(user)
        let userId= 0
        if(userdata[0])
        {
         
          userId= userdata[0].id
        }
        else{
       
          userId= userdata.id
        }
      

        let cartdata: cart = {
          ...this.productDetail,
          userId,
          productId: this.productDetail.id
        }
        delete cartdata.id;

        this.product.addtocart(cartdata).subscribe((data) => {
          if (data) {
            this.product.getcartproduct(userId);
          }
        })
      }
      this.removetocart = true
    }
  }
  RemoveTocart() {
    if (!localStorage.getItem('user')) {
      this.product.removeitem(this.filterped);
      this.removetocart = false
    }
    else {
      let user = localStorage.getItem('user')
      let userId = user && JSON.parse(user)[0]
      
       let cartid= this.filterped[0].id

        this.product.deleteproductfromcart(cartid).subscribe((result)=>{
          if(result){
          
          this.product.getcartproduct(userId.id)
          this.removetocart=false
          }
        })

   
  

    }
  }

 reload()
 {

  let prdid: string| null=''
   this.route.paramMap.subscribe((value)=>{
    if(value){
    
      prdid= value.get('id')
  
      prdid && this.product.GetProductDetail(prdid).subscribe((result) => {
        this.productDetail = result;
      })
    }   
 
  })

 
  let local = localStorage.getItem('localitem')
  let total = local && JSON.parse(local)
  if(total){
    let productId = total.filter((item: Product) => prdid?.toString()== item.id.toString())

    this.filterped = total.filter((item: Product) => prdid?.toString()!= item.id.toString())
    if (productId.length > 0) {

      this.removetocart = true;

    }
    else {
      this.removetocart = false
    }
  }
 
  if (localStorage.getItem('user')) {
    let user = localStorage.getItem('user')
    let userId = user && JSON.parse(user)
    this.product.getcartproduct(userId)
    this.product.updatecart.subscribe((data) => {

      let itemid = data.filter((item: Product) => prdid === item.productId?.toString())

      if (itemid.length > 0) {
        this.filterped= itemid
        this.removetocart = true
      }
      else {
        this.removetocart = false
      }

    })
  }
 }


}
