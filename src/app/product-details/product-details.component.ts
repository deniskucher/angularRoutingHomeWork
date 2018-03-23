import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

import { Product } from "../product";
import { ProductsService } from "../products.service";

@Component({
  moduleId: module.id,
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
  private service: ProductsService) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      let id = +params["id"]; // конвертируем значение параметра id в тип number
      this.service
          .getProduct(id)  // обращаемся к сервису и запрашиваем фразу по id. Получаем Promise
          .then(result => this.product = result);  // как только Promise перейдет в состояние resolved присваиваем его значение свойству phrase
  });
  }

}
