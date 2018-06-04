import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaPaisPage } from '../lista-pais/lista-pais';
import { Continente } from '../../model/continente';
import { DatabaseProvider } from '../../providers/database/database';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rootPage: typeof HomePage;
  continentes: Continente[];
  continenteId: number;
  continenteSelecionado: Continente;
  
  constructor(public navCtrl: NavController,dbProvider: DatabaseProvider,splashScreen: SplashScreen) {
    var africa = {id: 1, nome: 'Africa', url: 'africa'}
    var america = {id: 2, nome: 'America', url: 'americas'}
    var asia = {id: 3, nome: 'Asia', url: 'asia'}
    var europa = {id: 4, nome: 'Europa', url: 'europe'}
    var oceania = {id: 5, nome: 'Oceania', url: 'oceania'}

    this.continentes = [africa, america, asia, europa, oceania]

    dbProvider.createDatabase()
        .then(() => {
          this.openHomePage(splashScreen);
        })
        .catch(() => {
          this.openHomePage(splashScreen);
        });

  }

  private openHomePage(splashScreen: SplashScreen) {
    splashScreen.hide();
    this.rootPage = HomePage;
  }

  goToPage() {
    this.continenteSelecionado = this.continentes[this.continenteId-1];
    this.navCtrl.push(ListaPaisPage, {
      data: this.continenteSelecionado,
      continentes : this.continentes
    });
  }
}
