import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent {

   @Output()
   public emmitSearch: EventEmitter<string> = new EventEmitter();

   public search(pesquisa: string){
    this.emmitSearch.emit(pesquisa);
  }
}
