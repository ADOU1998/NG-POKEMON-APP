import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit{

  // Message
  message: string = 'Vous êtes deconnecté'
  name: string;
  password: string;
  auth: AuthService;

  constructor(private authService: AuthService, private router: Router){

  }

  ngOnInit(){
    this.auth = this.authService;
  }

  setMessage(){
    if(this.auth.isLoggedIn){
      this.message = 'Vous êtes connecté'
    } else {
      this.message = 'Identifiant ou mot de passe incorect'
    }
  }

  // Connexion
  login(){
    // Message erreur
    this.message = 'Tentative de connexion en cours...';
    // Acceder à l'interface
    this.auth.login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        // Affiche message
        this.setMessage();
        // Si connecté
        if(isLoggedIn){
          this.router.navigate(['/pokemons']);
        } 
        // pas connecté
        else {
          this.password = '';
          this.router.navigate(['/login']);
        }
      })
  }

  // Deconnexion
  logout(){
    this.auth.logout();
    this.message = 'Vous êtes deconnecté...';
  }

}
