import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaje-list',
  templateUrl: './personaje-list.component.html',
  styleUrls: ['./personaje-list.component.scss'],
  standalone: false,
})
export class PersonajeListComponent implements OnInit {
  @Input() titulo: string = ""
  @Input() subtitulo: string = ""
  @Input() personajes: any[] = [];
  

  constructor() {}

  ngOnInit() {}

  
}
