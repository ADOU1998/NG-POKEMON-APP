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
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';

// Declare les routes (chemin)
const pokemonRoutes: Routes = [
  // Les chemins
  { path: 'edit/pokemon/:id', component: EditPokemonComponent, canActivate: [AuthGuard] }, // Modifier un pokemon
  { path: 'pokemon/add', component: AddPokemonComponent, canActivate: [AuthGuard] }, // Ajouter un pokemon 
  { path: 'pokemons', component: ListPokemonComponent, canActivate: [AuthGuard] }, // Affiche la liste des pokemons
  { path: 'pokemon/:id', component: DetailPokemonComponent, canActivate: [AuthGuard] }, // Affiche les détails des pokemons
];


@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService] //Injectiter un service dans un module 
})
export class PokemonModule { }
