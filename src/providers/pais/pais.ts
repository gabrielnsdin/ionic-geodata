import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { Pais } from '../../model/pais';
import { SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the PaisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaisProvider {

  constructor(private dbProvider: DatabaseProvider) { }

  public insert(pais: Pais) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'insert into paises (id, name, region, population, capital, bandeira, moeda_id) values (?, ?, ?, ?, ?,?,?)';
        let data = [pais.nome, pais.continente, pais.populacao, pais.capital,pais.bandeira, pais.moeda];
 
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
 
  public update(pais: Pais) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'insert into paises (id, name, region, population, capital, bandeira, moeda_id) values (?, ?, ?, ?, ?,?,?)';
        let data = [pais.nome, pais.continente, pais.populacao, pais.capital,pais.bandeira, pais.moeda];
 
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
 
  public remove(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'delete from paises where id = ?';
        let data = [id];
 
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
 
  public get(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'select * from paises where id = ?';
        let data = [id];
 
        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let item = data.rows.item(0);
              let pais = new Pais();
              pais.id = item.id;
              pais.nome = item.nome; 
              pais.continente = item.continente;
              pais.populacao = item.populacao; 
              pais.capital = item.capital;
              pais.bandeira = item.bandeira;
              pais.moeda = item.moeda;
 
              return pais;
            }
 
            return null;
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
}
