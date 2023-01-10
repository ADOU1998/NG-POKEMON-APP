import { Pokemon } from './pokemon';
import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit{
  
  // Appel de la table Pokemon
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string){
 
  const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemon)

   if(pokemon){
     console.log(`Vous avez cliqué sur le plokémon ${pokemon.name}`);
     this.pokemonSelected = pokemon;
   } else {
    console.log(`Vous avez demandé un pokémon qui n'exite pas`);
    this.pokemonSelected = pokemon;
    
   }
    
  }
}
