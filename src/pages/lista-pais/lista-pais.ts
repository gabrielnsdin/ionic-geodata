import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhePaisPage } from '../detalhe-pais/detalhe-pais';

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
})
export class ListaPaisPage {

  data: any;
  paisId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('data');
  }

  ionViewDidLoad() {

  }

  goToPage(paisId) {
    this.navCtrl.push(DetalhePaisPage, {
      data: paisId
    });
  }

  voltar() {
    this.navCtrl.pop();
 }

}
