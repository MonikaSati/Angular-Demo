import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component'
import { SellerpageComponent } from './sellerpage/sellerpage.component';
import { AuthGuard } from './auth.guard';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserComponent } from './user/user.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CatogeryComponent } from './catogery/catogery.component';

const routes: Routes = [
  { path: "Catogery", component: CatogeryComponent},
  { path: '', component: HomeComponent },
  { path: 'seller', component: SellerComponent },
  {
    path: "sellerpage", component: SellerpageComponent,
    canActivate: [AuthGuard]
  },
  {
    component: ProductComponent,
    path: "seller-product",
    canActivate:[AuthGuard]

  },
  {
    component:ProductlistComponent,
    path:"seller-productlist",
    canActivate:[AuthGuard]
   
  },
  {
    component: ProductEditComponent,
    path:'seller-productEdit/:id'
  },
  {
    component: SearchproductComponent,
    path:'productsearch/:query'
  },
  {
    component: ProductDetailComponent,
    path: 'Productdetail/:id'
  },
  {
    component: UserComponent,
    path: 'user-signup'
  },
  {
    component: CartDetailComponent,
    path: 'cart-detail'
  },
  {
    component: CheckoutComponent,
    path:'checkout',
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
