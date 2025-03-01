import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_RM } from '../components/config/url.service';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) {}

  // Obtiene la primera página de personajes
  getAllPersonajes(): Observable<any> {
    let url = `${URL_RM}`;

    return this.http.get(url).pipe(
      map((res: any) => {
        console.log("Personajes cargados.", res);
        return res;
      })
    );
  }

  // Obtiene la siguiente página de personajes
  getNextPage(url: string): Observable<any> {
    return this.http.get(url).pipe(
      map((res: any) => {
        console.log("Nueva página de personajes cargada.", res);
        return res;
      })
    );
  }

}
