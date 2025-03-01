import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaje-card',
  templateUrl: './personaje-card.component.html',
  styleUrls: ['./personaje-card.component.scss'],
  standalone: false,
})
export class PersonajeCardComponent implements OnInit {
  @Input() personaje: any;
  episodios: string[] = [];

  ngOnInit() {
    this.obtenerEpisodios();
  }

  obtenerEpisodios() {
    if (this.personaje?.episode) {
      this.episodios = this.personaje.episode.map((url: string) => {
        return `Episodio ${url.split('/').pop()}`; // Extrae el número del episodio
      });
    }
  }
}
