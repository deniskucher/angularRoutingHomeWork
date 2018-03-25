import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { ProductsComponent } from '../products/products.component';
import { AdminComponent } from '../admin/admin.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

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
        path:'products', component: ProductsComponent,
        children: [
          {
              path: ":id",
              component: ProductDetailsComponent
          },
          {
              path: "",
              component: ProductDetailsComponent
          }
      ]
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
