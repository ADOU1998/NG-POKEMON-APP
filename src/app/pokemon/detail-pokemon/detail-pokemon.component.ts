import { PokemonService } from './../pokemon.service';
import { Pokemon } from '../pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  
})
export class DetailPokemonComponent implements OnInit{

  // Chercher l'id dans tous les pokemon
  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  // Importer le router d'anguler pour accéder aux id des pokemons
  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {}

  ngOnInit() {
      // Récuperer l'id dans l'url
      const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

      // vérifie si id du pokemon demandé existe 
      if(pokemonId){  
        this.pokemonService.getPokemonById(+pokemonId)
          .subscribe(pokemon => this.pokemon = pokemon);
      } 
    }
    // rédiriger à un autre composant (liste des pokemons)
    goToPokemonList(){
      this.router.navigate(['/pokemons']);
    }

    // Supprimer un pokemon via son Id
    deletePokemon(pokemon: Pokemon) {
      this.pokemonService.deletePokemonById(pokemon.id)
        .subscribe(() => this.goToPokemonList());
    }

    // Rédige vers le composant edit pokemon
    goToEditPokemon(pokemon: Pokemon){
      this.router.navigate(['/edit/pokemon', pokemon.id])
    }
  }
