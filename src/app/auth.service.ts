import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string) {
    // Lógica de autenticación aquí
  }

  logout() {
    // Lógica para cerrar sesión aquí
  }

  isAuthenticated(): boolean | any {
    return false;
  }
}
