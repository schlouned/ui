import {Component, OnInit} from '@angular/core';
import {ProductService} from "./service/ProductService";
import {ProductComponent} from "./product/product.component";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ui';


  constructor(private productService: ProductService) {
    this.loadProducts();

  }
   loadProducts(){
    this.productService.loadProducts();
  }
  ngOnInit(){

    }


}
