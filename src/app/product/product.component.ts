import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../service/ProductService";
import {Subscription} from "rxjs";
import {ProdComponent} from "../prod/prod.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  productsSubscription: Subscription;
  products: any[];

  constructor(private productService: ProductService) {
    this.products = [];

    this.productsSubscription = this.productService.productsSubject.subscribe(
      (products:any[])=>{
        this.products.push(products);
      }
    );
  }

  ngOnInit(): void {
    this.productsSubscription = this.productService.productsSubject.subscribe(
      (products:any[])=>{
        this.products = products;
      }
    );
    this.productService.emitProductsSubject();

  }

  ngOnDestroy(){
    this.productsSubscription.unsubscribe();
  }

  saveNewProduct(product: ProdComponent){
    this.productService.saveProduct(product).subscribe(
      () => {
        console.log("ok denis c'est passé");
      },
      error => {
        console.log("non ca ne passe pas");
      }
    );
  }


}
