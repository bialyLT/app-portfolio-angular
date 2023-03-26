import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Injectable({

  providedIn: 'root'

})

export class AuthService {

  constructor(private lc : LoginComponent) { }

  login(lc : any) {

      if (lc.username == 'admin' && lc.password == '1234') {

          return true;

      } else {

          return false;

      }
  }

  logout() {
    // Lógica para cerrar sesión aquí
  }

  isAuthenticated(): boolean | any {
    if (this.login(this.lc)) {
      return true;
    }
    else
    {
      return false;
    }
  }
}
