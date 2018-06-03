import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaPaisPage } from '../lista-pais/lista-pais';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  continenteId: number;

  constructor(public navCtrl: NavController) {

  }

  goToPage() {
    
    if(this.continenteId == 2){
      this.navCtrl.push(ListaPaisPage, {
        data: this.continenteId,
      });
    }
  }

}
