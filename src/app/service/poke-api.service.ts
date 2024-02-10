import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100';

  constructor(private http:HttpClient) { }

  get listAllPokemons(): Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap(respose => {
        console.log(respose)
      })
    );
  }
}