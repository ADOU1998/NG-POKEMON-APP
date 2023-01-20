import { PokemonService } from './../pokemon.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit{
  @Input() pokemon: Pokemon;
  // Proprieté
  types: string[];

  isAddForm: boolean;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
    ) {
  }

  ngOnInit() {
    // La liste des pokemon
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add');
  }

  hasType(type: string): boolean{
    // Recherche type passé en paramètre
    return this.pokemon.types.includes(type);
  }

  // Cochet ou decochet une case
  selectType($event: Event, type: string){
    // Vérifier si l'user a checké ou pas
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked){
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  // Vérification du type
  isTypesValid(type: string): boolean{

    // si pokemon a un type et travail sur un type courant
    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    }

     // si pokemon a au moins 3 types et ne travail pas sur un type courant
    if(this.pokemon.types.length  > 2 && !this.hasType(type)){
      return false;
    }

    return true
  }

  // Envoie du formulaire
  onSubmit(){
    if(this.isAddForm) {
      this.pokemonService.addPokemon(this.pokemon)
        .subscribe((pokemon: Pokemon) => this.router.navigate(['/pokemon', pokemon.id]));
    } else {
      this.pokemonService.updatePokemon(this.pokemon)
      // Rédirige avec les modifications vers la page détails
      .subscribe(() =>  this.router.navigate(['/pokemon', this.pokemon.id]));
    
    }
  }


}
