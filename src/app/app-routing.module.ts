import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Declare les routes (chemin)
const routes: Routes = [
  // Les chemins
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' }, // Faire rédirection vers la 1 page
  { path: '**', component: PageNotFoundComponent } // Intercepter toutes nos routes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
