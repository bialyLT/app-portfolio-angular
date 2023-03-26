import { Injectable } from '@angular/core';
@Injectable({

  providedIn: 'root'

})

export class AuthService {

  authenticatedUser: string | null = null;

  constructor() { }

  

  login(username: string, password: string): boolean {
    
    if (username === 'admin' && password === '1234') {

        this.authenticatedUser = username;
        this.getAuthenticatedUser();
        this.isAuthenticated();
        return true; 
      
    } else {

      return false;

    }


  }

  logout() {
    this.authenticatedUser = null;
  }

  isAuthenticated(): boolean | any {

    return this.getAuthenticatedUser() !== null;
  }

  getAuthenticatedUser(): string | null {
    return this.authenticatedUser;
  }
}
