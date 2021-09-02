import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {ProdComponent} from "../prod/prod.component";

@Injectable()
export class ProductService{
  private products = [
    {id:0,
    name: 'essaiVide',
    price: 4,
    purchasePrice: 1
    }
  ];

  productsSubject = new Subject<any[]>();

  emitProductsSubject() {
    this.productsSubject.next(this.products.slice());
  }
  constructor(private httpClient: HttpClient){
    this.products = [];
  }

  loadProducts(){
    //essai
    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Request-Headers', 'origin x-requested-with Origin: https://localhost*');
    //essai fin ajout de header dans la requete http

    this.httpClient.get<any[]>('http://localhost:8081/library/rest/product/api/Produits', {headers: headers})
      .subscribe((response)=>{this.products = response;
          this.emitProductsSubject();},
        (error)=>{console.log('Erreur ! : ' + error);}
      );


  }

  addProduct(id: number, nom: string, prix: number, prixachat: number){
    let prodObject: ProdComponent = new ProdComponent();

    prodObject.id = 0;
    prodObject.nom = nom;
    prodObject.prix = prix;
    prodObject.prixachat=prixachat;

    let headers = new HttpHeaders();
    headers.append('content-type', 'application/json');

    this.httpClient.post('http://localhost:8081/library/rest/product/api/AddProduits', prodObject).
    subscribe(
      () => {
        console.log('enregistrement terminé');
        this.emitProductsSubject();
      },
      (error) => {
        console.log('erreur: ' + error);
      }
    );
  }

  saveProduct(product: ProdComponent): Observable<ProdComponent>{
    return this.httpClient.post<ProdComponent>('http://localhost:8081/library/rest/product/api/AddProduits', product);
  }

}
