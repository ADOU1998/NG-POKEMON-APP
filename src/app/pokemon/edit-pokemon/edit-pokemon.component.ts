import { FormsModule } from '@angular/forms';
import { PokemonService } from './../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center">Modification du pokémon {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture" alt="">
    </p>
    <!-- Ajouter le form -->
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit{

  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ){}

  ngOnInit() {

    // Récuperer l'id depuis l'url
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    // S'il trouve
    if(pokemonId){
      // Vérifie si ok
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId)
    } else {
      // non ok
      this.pokemon = undefined;
    }
  }
}
