import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhePaisPage } from '../detalhe-pais/detalhe-pais';
import { Continente } from '../../model/continente';
import { Pais } from '../../model/pais';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the ListaPaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-pais',
  templateUrl: 'lista-pais.html',
  providers: [
    RestProvider
  ]
})
export class ListaPaisPage {

  teste: Continente;
  continentes: Continente[];
  paises: Pais[];
  paisesRest: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.teste = navParams.get('data');
    this.continentes = navParams.get('continentes');
  }

  ionViewDidLoad() {
    this.getPaises();
  }

  goToPage(pais) {
    this.navCtrl.push(DetalhePaisPage, {
      data: pais
    });
  }

  voltar() {
    this.navCtrl.pop();
 }
  
  getPaises() {
    this.restProvider.getPaises(this.teste.url)
    .then(data => {
      this.paisesRest = data;
    });
  }

}
