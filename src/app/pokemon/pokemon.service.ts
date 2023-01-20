import { Pokemon } from './pokemon';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {}

  // Afficher la liste et recevoir les données venant du surveur distant
  getPokemonList(): Observable<Pokemon[]> {
    // return POKEMONS;
    // Retourner un flux --> appel de la liste des pokémpns à l'Api
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      // Logger la liste
      tap(response => this.log(response)),
      // lever les erreurs
      catchError((error) => this.handleError(error, undefined))
    );
  }

  // Ajouter un pokemon
  addPokemon(pokemon: Pokemon): Observable<Pokemon>{
    const htppOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Pokemon>('api/pokemons', pokemon, htppOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  // Recherche pokemon par id via l'api distant
  getPokemonById(pokemonId: number): Observable<Pokemon|undefined>{
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      // Logger la liste
      tap(response => this.log(response)),
      // lever les erreurs
      catchError((error) => this.handleError(error, []))
    );
  }

  // Modification des pokémons
  updatePokemon(pokemon: Pokemon): Observable<null>{
    const htppOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    // Requete de modification
    return this.http.put('api/pokemons', pokemon, htppOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  //Suppression d'un pokemon
  deletePokemonById(pokemonId: number): Observable<null>{
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      catchError((error) => this.handleError(error, null))
    );
  } 

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any){
    console.error(error)
    return of(errorValue);
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
