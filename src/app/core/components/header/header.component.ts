import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input({ required: true }) userImage: string = '';
  username = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  auth = inject(AuthService);
  router = inject(Router);

  navList = ['Home', 'TV Shows', 'News & Popular', 'My List', 'Browse by Language'];

  signOut() {
    sessionStorage.removeItem('loggedInUser');
    this.auth.signOut();


  }

}
