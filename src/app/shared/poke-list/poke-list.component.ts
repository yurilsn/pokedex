import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit{

  private setAllPokemons: any;
  public getAllPokemons: any;

  constructor(private pokeApiservice:PokeApiService){}

  ngOnInit(): void {
      this.pokeApiservice.listAllPokemons.subscribe(
        response => {
          this.setAllPokemons = response.results;
          this.getAllPokemons = response.results;
        }
      );
  }

  public getSearch(getPesquisa: string){
    const filtro = this.setAllPokemons.filter( (response: any) => {
      return !response.name.indexOf(getPesquisa.toLowerCase());
    });

    this.getAllPokemons = filtro;
  }

}
