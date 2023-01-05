import { Pokemon } from './pokemon';
import { Component, OnInit } from '@angular/core';
import {POKEMONS} from './mock-pokemon-list';

@Component({
  selector: 'app-root',
  template: ` <h1>LISTE DES POKEMONS </h1>`
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0])
  }

  selectPokemon(pokemon: Pokemon){
    console.log(`Vous avez cliqué sur le plokémon ${pokemon.name}`);
    
  }
}
