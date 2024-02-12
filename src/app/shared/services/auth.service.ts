declare var google: any;
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router = inject(Router)

  constructor() { }

  signOut() {
    google.accounts.id.disableAutoSelect(); //sign out from google provided from google
    this.router.navigate(['/'])
  }
}
