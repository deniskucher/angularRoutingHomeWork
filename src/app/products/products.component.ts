import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Product } from "../product";
import { ProductsService } from "../products.service";

@Component({
  moduleId: module.id,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private router: Router,
    private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getAll().then(res => {
      this.products = res;
      console.log('----',this.products);
    });
  }

  onSelect(selected: Product) {
    this.router.navigate(["/products", selected.id]);
  }

}
