import { Pokemon } from './../pokemon';
import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pokemon',
  template: `<h2 class="center">Ajouter un pokémon</h2>
  <!-- Afficher l'app-pokemon-form -->
  <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [
  ]
})
export class AddPokemonComponent implements  OnInit {

  pokemon: Pokemon;

  ngOnInit(){
    this.pokemon = new Pokemon;
  }

}
