import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//MODULO DE FORMULARIOS DE ANGULAR
import { FormsModule } from '@angular/forms';


import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

import { DbzService } from './services/dbz.service';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent,
  ],
  exports: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],

  //usamos los servicios
  providers: [
    DbzService
  ]
})
export class DbzModule { }
