import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component'
import { SellerpageComponent } from './sellerpage/sellerpage.component';
import { AuthGuard } from './auth.guard';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
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
    path:"seller-productlist"
   
  },
  {
    component: ProductEditComponent,
    path:'seller-productEdit/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
