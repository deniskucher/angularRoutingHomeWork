import { Injectable } from '@angular/core';
import { Product } from "./product";

let products = [
  new Product(1, 'Vine', '2'),
  new Product(2, 'Vodka', '1'),
  new Product(3, 'Beer', '5'),
  new Product(4, 'Viskey', '4')
];

let productsPromise = Promise.resolve(products);

@Injectable()
export class ProductsService {

  getAll(): Promise<Product[]> {
    return productsPromise;
  }
  
  getProduct(id: number): Promise<Product> {
    return productsPromise
        .then(products => products.find(x => x.id == id));
  }

}
