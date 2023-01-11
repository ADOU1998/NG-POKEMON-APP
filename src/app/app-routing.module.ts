import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Declare les routes (chemin)
const routes: Routes = [
  // Les chemins
  { path: 'pokemons', component: ListPokemonComponent }, // Affiche la liste des pokemons
  { path: 'pokemon/:id', component: DetailPokemonComponent }, // Affiche les détails des pokemons
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' }, // Faire rédirection vers la 1 page
  { path: '**', component: PageNotFoundComponent } // Intercepter toutes nos routes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
