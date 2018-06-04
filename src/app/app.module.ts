import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { SQLite } from '@ionic-native/sqlite'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaPaisPageModule } from '../pages/lista-pais/lista-pais.module';
import { DetalhePaisPageModule } from '../pages/detalhe-pais/detalhe-pais.module';
import { RestProvider } from '../providers/rest/rest';
import { DatabaseProvider } from '../providers/database/database';
import { PaisProvider } from '../providers/pais/pais';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ListaPaisPageModule,
    DetalhePaisPageModule,
    HttpClientModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    RestProvider,
    DatabaseProvider,
    PaisProvider
  ]
})
export class AppModule {}
