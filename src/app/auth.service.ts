import { delay, Observable, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Vérifie si user est connecté
  isLoggedIn: boolean = false;
  redirectUrl: string;

  // Pour se connecter
  login(name: string, password: string): Observable<boolean>{
    const isLoggedIn = (name == 'adou' && password == '1234');

    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  // Pour se deconnecter
  logout(){
    this.isLoggedIn = false;
  }
}
