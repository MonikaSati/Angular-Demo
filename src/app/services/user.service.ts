import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Product, User, UserSign, cart } from '../dtattype';
import { Router } from '@angular/router';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private route: Router,private product: ProductService) { }
  userinvalid= new EventEmitter<boolean>(false);

signupuser(data: UserSign){
return this.http.post('http://localhost:3000/user',data,{observe :'response'}).subscribe((result: any)=>{

  localStorage.setItem("user", JSON.stringify(result.body));
  this.route.navigate(['/']);
} ) 

}

loginuser(data: User){
    return this.http.get(`http://localhost:3000/user?email=${data.email}&&password=${data.password}`,{observe :'response'})
    .subscribe((result : any )=>{

      if  ( result && result.body.length > 0  )
      {
        
        localStorage.setItem('user',JSON.stringify(result.body ))
      
          let data= localStorage.getItem("localitem")
        if(data)
        {
        
          let cartproductlist: Product[]= JSON.parse(data)
          let user= localStorage.getItem('user')
          let userdata= user && JSON.parse(user)
          let userId= 0
          if(userdata[0])
          {
            
            userId= userdata[0].id
          }
          else{
       
            userId= userdata.id
          }
        
          cartproductlist.forEach((product, index)=>{
            let cartitem: cart={
              ...product,
              userId,
              productId:product.id
            }
            setTimeout(() => {
              this.product.addtocart(cartitem)
            
             if(cartproductlist.length === index + 1)
             {
               console.log("cartitem cleared")
                  localStorage.removeItem("localitem")

             }
             
           })
            }, 500);
           
        }
        this.route.navigate(['']);
      }
     else{
      console.log("invalid from service-'/")
          this.userinvalid.emit(true);
     }
    })
}
}
