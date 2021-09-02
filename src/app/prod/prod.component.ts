import {Component, Input, OnInit} from '@angular/core';
//essai master
@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.scss']
})
export class ProdComponent implements OnInit {
  @Input() id: number;
  @Input() nom: string;
  @Input() prix: number;
  @Input() prixachat: number;

  constructor() {
    this.id=0;
    this.nom='';
    this.prix=0;
    this.prixachat=0;
  }

  ngOnInit(): void {
  }

}
