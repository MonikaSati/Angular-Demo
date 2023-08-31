import { EventEmitter, Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { SellerLoginI, SellerSignUpI } from '../dtattype';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isloggesdIn = new BehaviorSubject<boolean>(false);
  isError = new EventEmitter<boolean>(false);
  constructor(private http: HttpClient, private route: Router) { }
  userSignup(data: SellerSignUpI) {
    this.http.post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        this.isloggesdIn.next(true);
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.route.navigate(['sellerpage']);

      });



  }
  userlogin(data: SellerLoginI) {
   
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
      { observe: 'response' }
    ).subscribe((result: any) => {
      
      if(result && result.body && result.body.length) {
        this.isloggesdIn.next(true);
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.route.navigate(['sellerpage']);
      }
       else {
        this.isError.emit(true);
      }
    })

  }
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isloggesdIn.next(true);
      this.route.navigate(['sellerpage']);
    }
  }
}

