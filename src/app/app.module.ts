import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { SellerpageComponent } from './sellerpage/sellerpage.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserComponent } from './user/user.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerComponent,
    SellerpageComponent,
    ProductComponent,
    ProductlistComponent,
    ProductEditComponent,
    SearchproductComponent,
    ProductDetailComponent,
    UserComponent,
    CartDetailComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
