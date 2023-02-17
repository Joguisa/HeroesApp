import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes`); 
    //return this.http.get<Heroe[]>(`http://localhost:3000/heroes`);
  }

  getHeroePorId( id: string ): Observable<Heroe>{ // para obtener información
    return this.http.get<Heroe>(`${ this.baseUrl }/heroes/${ id }`);
  }

  getSugerencias( termino: string ): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes?q=${ termino }&_limit=5`);
  }

  agregarHeroe( heroe: Heroe ): Observable<Heroe> { // para crear uno nuevo
    return this.http.post<Heroe>(`${ this.baseUrl }/heroes`, heroe );
  }

  actualizarHeroe( heroe: Heroe ): Observable<Heroe> { // para actualizar
    return this.http.put<Heroe>(`${ this.baseUrl }/heroes/${ heroe.id }`, heroe );
  }

  borrarHeroe( id: string ): Observable<{}> { // para eliminar
    return this.http.delete<{}>(`${ this.baseUrl }/heroes/${ id }` );
  }
}
