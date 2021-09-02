import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/ProductService";
import {NgForm} from "@angular/forms";
import {ProdComponent} from "../prod/prod.component";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const id = form.value['id'];
    const nom = form.value['nom'];
    const prix = form.value['prix'];
    const prixachat = form.value['prixachat'];

    const produitajoute = new ProdComponent();
    produitajoute.id=id;
    produitajoute.nom=nom;
    produitajoute.prix=prix;
    produitajoute.prixachat=prixachat;


    /*this.productService.saveProduct(produitajoute).subscribe(
      () => {
        console.log("ok denis c'est passé");
      },
      error => {
        console.log("non ca ne passe pas");
      }
    );*/

    //essai different
    this.productService.addProduct(id, nom, prix, prixachat);
  }

}
