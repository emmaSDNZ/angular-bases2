import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';




@Component({
  //nombre del selector para renderizar
  //este selector lo debo llamar en app.module
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  //esto es un valor por defecto
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  constructor() {}

}
