import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { ProductsComponent } from '../products/products.component';
import { AdminComponent } from '../admin/admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
      },
      {
        path:'home', component: HomeComponent
      },
      {
        path:'products', component: ProductsComponent
      },
      {
        path:'admin', component: AdminComponent
      },
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
