import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductElement } from '../product.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get("http://localhost:8080/getAllProducts");
  }

  deleteProduct(productid: number) {
    return this.http.delete("http://localhost:8080/delete/" + productid);
  }

  addProducts(product: ProductElement) {
    return this.http.post("http://localhost:8080/createProduct", product);
  }

}