import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon:any;

  constructor(
    private acitivatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
    ){}

  ngOnInit(): void {
      this.getPokemon;
  }

  get getPokemon(){

    const id = this.acitivatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    

    return forkJoin([pokemon, name]).subscribe(
      response => {
        this.pokemon = response; 
        console.log(this.pokemon)
      }
    )
  }

}
