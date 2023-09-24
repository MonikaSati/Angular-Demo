import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Product, User, UserSign, cart } from '../dtattype';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
constructor(private user:UserService, private route: Router,private product: ProductService){}
invalidusermessage: undefined  | string;
ngOnInit(){
  if(localStorage.getItem('user'))
  {
   
    this.route.navigate(['/'])
  }
}
isloogedin: boolean= false;

alreadylogin(){
   this.isloogedin= true;
}
signupclick(){
  this.isloogedin=false;
}
userlogin(data: User){
  this.user.loginuser(data);

  this.user.userinvalid.subscribe((result)=>{
    if(result)
    {
      
      this.invalidusermessage="Invalid data"
     
    }

   
    
     
        
      

  
  })

  
}

  Usersignup(data: UserSign){
    
this.user.signupuser(data);
 
  }
}
