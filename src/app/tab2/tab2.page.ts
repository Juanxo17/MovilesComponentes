import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-andmorty.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
  personajes: any[] = [];
  url_next: string | null = '';

  constructor(private bd: RickAndMortyService) {}

  ngOnInit() {
    this.cargarPersonajes();
  }

  async cargarPersonajes() {
    try {
      const data: any = await this.bd.getAllPersonajes().toPromise();
      this.personajes = data.results;
      this.url_next = data.info.next;
    } catch (error) {
      console.error('Error al cargar personajes:', error);
    }
  }

  async cargarMasPersonajes(event: any) {
    if (!this.url_next) {
      event.target.complete(); // Detiene el scroll si no hay más datos
      return;
    }

    try {
      const data: any = await this.bd.getNextPage(this.url_next).toPromise();
      this.personajes = [...this.personajes, ...data.results]; // Agregar más personajes
      this.url_next = data.info.next;
    } catch (error) {
      console.error('Error al cargar más personajes:', error);
    }

    event.target.complete(); // Finaliza el evento de scroll
  }
}
