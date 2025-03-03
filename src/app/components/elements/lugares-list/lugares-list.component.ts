import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-andmorty.service';

@Component({
  selector: 'app-lugares-list',
  templateUrl: './lugares-list.component.html',
  styleUrls: ['./lugares-list.component.scss'],
  standalone: false,
})
export class LugaresListComponent implements OnInit {
  lugares: any[] = [];

  constructor(private rmService: RickAndMortyService) {}

  ngOnInit() {
    this.cargarLugares();
  }

  cargarLugares() {
    this.rmService.getAllLocations().subscribe(res => {
      this.lugares = res.results;
    });
  }
}
