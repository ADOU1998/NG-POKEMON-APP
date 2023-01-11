import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { Injectable } from '@angular/core';

@Injectable()
export class PokemonService {

  // Afficher la liste
  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  // Recherche pokemon par id
  getPokemonById(pokemonId: number): Pokemon|undefined{
    return POKEMONS.find(pokemon => pokemon.id == pokemonId)
  }

  // Liste type pokemon
  getPokemonTypeList(): string[]{
    return [
      'Plante', 
      'Feu', 
      'Eau', 
      'Insecte', 
      'Normal', 
      'Electik', 
      'Poison', 
      'Fée', 
      'Vol', 
      'Cambat', 
      'Psy'];
  }
}
