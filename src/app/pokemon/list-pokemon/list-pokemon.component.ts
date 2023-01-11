import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit{
   // Appel de la table Pokemon
   pokemonList: Pokemon[] = POKEMONS;

   constructor(private router:Router, private pokemonService: PokemonService){

   }

  //  Connecter à notre service
   ngOnInit() {
    this.pokemonList = this.pokemonService.getPokemonList();
   }

  // rédiriger vers un composant avec l'id
   goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id])
   }
  }
