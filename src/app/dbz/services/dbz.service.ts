import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()

//clase servicio. -> se diferencia por el decorado: tipo_: Injectable()
// es una clase que se puede inyectar

//1) se instancia cuando alguien lo requiere


//orden de clases
//1) propiedades
//2) get y set
//3) metodos
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    //iniciamos el constructor 
    constructor() {}  

    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push( personaje );
    }

}
 
//lo especificamos en la carpeta master de modulos. -> PROVIDERS
