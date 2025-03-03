import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajeListComponent } from './personaje-list/personaje-list.component';
import { PersonajeCardComponent } from './personaje-card/personaje-card.component';
import { EpisodioCardComponent } from './episodio-card/episodio-card.component';
import { EpisodiosListComponent } from './episodios-list/episodios-list.component';
import { IonicModule } from '@ionic/angular';
import { LugaresListComponent } from './lugares-list/lugares-list.component';



@NgModule({
  declarations: [ 
    
    PersonajeListComponent,
    PersonajeCardComponent,
    EpisodiosListComponent,
    EpisodioCardComponent,
    LugaresListComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ 
    PersonajeListComponent,
    PersonajeCardComponent,
    EpisodiosListComponent,
    EpisodioCardComponent,
    LugaresListComponent
  ]
})
export class ElementsModule {}
