import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhePaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-pais',
  templateUrl: 'detalhe-pais.html',
})
export class DetalhePaisPage {

  data: any;
  paisNome: string;
  paisContinente: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('data');
    
    if(this.data == 1){
      this.paisNome = 'Argentina';
      this.paisContinente = 'America';
    }else if(this.data == 2){
      this.paisNome = 'Brasil';
      this.paisContinente = 'America';
    }else if(this.data == 3){
      this.paisNome = 'Uruguai';
      this.paisContinente = 'America';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePaisPage');
  }

}
