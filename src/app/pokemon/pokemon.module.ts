import { PokemonService } from './pokemon.service';
import { BorderCardDirective } from './border-card.directive';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

// Declare les routes (chemin)
const pokemonRoutes: Routes = [
  // Les chemins
  { path: 'edit/pokemon/:id', component: EditPokemonComponent }, // Modifier un pokemon
  { path: 'pokemons', component: ListPokemonComponent }, // Affiche la liste des pokemons
  { path: 'pokemon/:id', component: DetailPokemonComponent }, // Affiche les détails des pokemons
];


@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService] //Injectiter un service dans un module 
})
export class PokemonModule { }
