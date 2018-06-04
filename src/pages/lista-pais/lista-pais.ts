import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhePaisPage } from '../detalhe-pais/detalhe-pais';
import { Continente } from '../../model/continente';
import { Pais } from '../../model/pais';

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

  teste: Continente;
  continentes: Continente[];
  paises: Pais[];
  view: Pais[];
  paisesRest: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.teste = navParams.get('data');
    this.continentes = navParams.get('continentes');
    
    var brasil = {id: 1,nome:'Brasil', idioma: 'Português', continente : this.continentes[1], populacao: 207660929}
    var argentina = {id: 2,nome:'Argentina', idioma: 'Castelhano', continente : this.continentes[1], populacao: 43131966}
    var uruguai = {id: 3,nome:'Uruguai', idioma: 'Castelhano', continente : this.continentes[1], populacao: 3415866}
    
    if(this.teste.nome = 'America'){
      this.view = [brasil,argentina,uruguai];
    }else{
      this.view = []
    }
  }

  ionViewDidLoad() {

  }

  goToPage(pais) {
    this.navCtrl.push(DetalhePaisPage, {
      data: pais
    });
  }

  voltar() {
    this.navCtrl.pop();
 }

}
