import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // @INPUT()  es un decorador, con el @ le digo que la info llega del padre
  // @Input() personajes: Personaje[] = [];
  
  get personajes() {
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService ) {}

}
