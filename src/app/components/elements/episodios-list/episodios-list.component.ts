import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-andmorty.service';

@Component({
  selector: 'app-episodios-list',
  templateUrl: './episodios-list.component.html',
  styleUrls: ['./episodios-list.component.scss'],
  standalone: false
})
export class EpisodiosListComponent implements OnInit {

  episodios: any[] = [];

  constructor(private bd: RickAndMortyService) {}

  ngOnInit() {
    this.cargarEpisodios();
  }

  async cargarEpisodios() {
    this.bd.getAllEpisodios().subscribe(async (res: any) => {
      this.episodios = await Promise.all(
        res.results.map(async (episodio: any) => {
          const personajes = await Promise.all(
            episodio.characters.map((url: string) => {
              const id = url.split('/').pop(); // Extrae el ID de la URL
              return this.bd.getPersonajeById(Number(id)).toPromise();
            })
          );
          return { ...episodio, personajes };
        })
      );
    });
  }
}
