import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) { }

  public getDB() {
    return this.sqlite.create({
      name: 'geo.db',
      location: 'default'
    });
  }

  public createDatabase() {
    return this.getDB()
      .then((db: SQLiteObject) => {
         this.createTables(db);
         this.insertDefaultItems(db);
 
      })
      .catch(e => console.log(e));
  }

  private createTables(db: SQLiteObject) {
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS moedas (id integer primary key AUTOINCREMENT NOT NULL, name TEXT,code TEXT,symbol TEXT)'],
      ['CREATE TABLE IF NOT EXISTS continentes (id integer primary key AUTOINCREMENT NOT NULL, name TEXT,url TEXT)'],
      ['CREATE TABLE IF NOT EXISTS paises (id integer primary key AUTOINCREMENT NOT NULL, name TEXT, region TEXT, population integer, capital TEXT, bandeira BLOB, moeda_id integer, FOREIGN KEY(moeda_id) REFERENCES moedas(id))']
    ])
      .then(() => console.log('Tabelas criadas'))
      .catch(e => console.error('Erro ao criar as tabelas', e));
  }

  private insertDefaultItems(db: SQLiteObject) {
    db.executeSql('select COUNT(id) as qtd from continentes', {})
    .then((data: any) => {
      if (data.rows.item(0).qtd == 0) {
         db.sqlBatch([
          ['insert into continentes (name,url) values (?,?)', ['Africa','africa']],
          ['insert into continentes (name,url) values (?,?)', ['America','americas']],
          ['insert into continentes (name,url) values (?,?)', ['Asia','asia']],
          ['insert into continentes (name,url) values (?,?)', ['Europa','europe']],
          ['insert into continentes (name,url) values (?,?)', ['Oceania','oceania']],
        ])
          .then(() => console.log('Dados padrões incluídos'))
          .catch(e => console.error('Erro ao incluir dados padrões', e));

      }
    })
    .catch(e => console.error('Erro ao consultar a qtd de continentes', e));
  }
}
