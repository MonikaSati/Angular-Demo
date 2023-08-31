import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SellerSignUpI } from '../dtattype'
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  signuppage = true;
  loginError: string = '';
  constructor(private sellerservice: SellerService, private route: Router) { }
  ngOnInit() {
    this.sellerservice.reloadSeller();
  }
  onSignup(data: SellerSignUpI) {
    this.sellerservice.userSignup(data)

  }
  onLogin(data: SellerSignUpI) {
    this.sellerservice.userlogin(data);
    this.sellerservice.isError.subscribe((result) => {
      this.loginError = "Login Failed";
    })

  }
  clicklogin() {
    this.signuppage = false;
  }
  clicksignup() {
    this.signuppage = true;
  }
}
