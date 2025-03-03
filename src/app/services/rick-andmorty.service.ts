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
    let url = `${URL_RM}character/`;

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

  //Metodo para obtener todos los episodios de la api.
  getAllEpisodios(): Observable<any> {
    const url = `${URL_RM}/episode`;
    return this.http.get(url).pipe(
      map((res: any) => {
        console.log("Episodios obtenidos:", res);
        return res;
      })
    );
  }
  //obtener informacion relacionada a un personaje con su url
  getPersonajeByUrl(url: string): Observable<any> {
    return this.http.get(url);
  }

  getPersonajeById(id: number): Observable<any> {
    let url = `${URL_RM}character/${id}`;
    console.log("Fetching character from:", url); // Verificar URL
    return this.http.get(url);
  }

  getAllLocations(page: number = 1): Observable<any> {
    const url = `${URL_RM}/location/?page=${page}`;
    return this.http.get(url);
  }
  
  // Obtiene la siguiente página de episodios
getNextEpisodios(url: string): Observable<any> {
  return this.http.get(url).pipe(
    map((res: any) => {
      console.log("Nueva página de episodios cargada.", res);
      return res;
    })
  );
}

// Obtiene la siguiente página de lugares
getNextLugares(url: string): Observable<any> {
  return this.http.get(url).pipe(
    map((res: any) => {
      console.log("Nueva página de lugares cargada.", res);
      return res;
    })
  );
}
  
  
}


