import { Component } from '@angular/core';
import { RickAndMortyService } from '../services/rick-andmorty.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  personajes: any;
  url_next = '';

  titulo1: string = "Rick and Morty";
  subtitulo1: string = "Ricardo y Marcelo"
  
  constructor(private bd: RickAndMortyService) {}


  ngOnInit(){
    this.cargarPersonajes();
  }
  //Método que va a cargar los personajes.

  async cargarPersonajes(){

    await this.bd
    .getAllPersonajes()
    .toPromise()
    .then((data: any) => {
      this.personajes = data.results;
      console.log(this.personajes);
      this.url_next = data.info.next;
    }
    );
  }
}