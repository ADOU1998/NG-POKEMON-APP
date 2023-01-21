import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable, debounceTime, switchMap, mergeMap } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit{
  // recherche des mots
  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(private router: Router, private pokemonService: PokemonService){ }

  ngOnInit() {
    // this.pokemons$ = this.searchTerms.pipe(
    //   debounceTime(300),
    //   distinctUnitlChanged(),
    //   Map((term) => this.pokemonService.searchPokemonList(term))
    // )
  }
  // Renvoyé les termes de recherche
  search(term: string){
    // Pousser les termes
    this.searchTerms.next(term);
  }

  // Aller faire le terme du detail recherché
  goToDetail(pokemon: Pokemon){
    const link = ['/pokemon', pokemon.id]
    this.router.navigate(link);
  }
}
function distinctUnitlChanged(): import("rxjs").OperatorFunction<string, Pokemon[]> {
  throw new Error('Function not implemented.');
}

function switchmap(arg0: (term: any) => Observable<Pokemon[]>): import("rxjs").OperatorFunction<Pokemon[], Pokemon[]> {
  throw new Error('Function not implemented.');
}

function Concat(arg0: (term: any) => Observable<Pokemon[]>): import("rxjs").OperatorFunction<Pokemon[], Pokemon[]> {
  throw new Error('Function not implemented.');
}

