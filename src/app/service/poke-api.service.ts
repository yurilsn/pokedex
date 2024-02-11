import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100';

  constructor(private http:HttpClient) { }

  get listAllPokemons(): Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap(response => {
        response.results.map( (resPokemons: any) =>  {
          // this.http.get<any>(resPokemons.url).subscribe( response => resPokemons.status = response)
          this.apiGetPokemons(resPokemons.url).subscribe(
            response => resPokemons.status = response
          )
        })
      })
    )
  }

  public apiGetPokemons(url: string): Observable<any>{
    return this.http.get<any>(url).pipe(
      map(
        response => response
      )
    )
    
  }
}
