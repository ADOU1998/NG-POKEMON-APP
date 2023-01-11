import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Impoter laliste de tous les pokémons
import {POKEMONS} from '../mock-pokemon-list';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  
})
export class DetailPokemonComponent implements OnInit{

  // Chercher l'id dans tous les pokemon
  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  // Importer le router d'anguler pour accéder aux id des pokemons
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    //Initialisation
    this.pokemonList = POKEMONS;
    pokemon: Pokemon; 
    // Récuperer l'id dans l'url
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    // vérifie si id du pokemon demandé existe 
    if(pokemonId){  
    this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    } else {
        this.pokemon = undefined;
      }
    }
    // rédiriger à un autre composant
    goToPokemonList(){
      this.router.navigate(['/pokemons']);
    }
  }
