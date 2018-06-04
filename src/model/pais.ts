import { Continente } from "./continente";

export class Pais {
    id: number;
    nome: String;
    idioma: String;
    continente: Continente;
    populacao: number;
    capital: string;
    moeda: {};
    bandeira:string;

    constructor() { }
}