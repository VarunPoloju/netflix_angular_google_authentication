declare var google: any;

import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private router = inject(Router)
  ngOnInit(): void {
    //we need to initialize google account after page loads
    google.accounts.id.initialize({
      //we need to get client id, so got to 
      client_id: '669881267812-ljoa39dpk7qj8sjjpnu3e2bnjredvbj9.apps.googleusercontent.com',
      callback: (resp: any) => {
        //u'll get client id and token here
        // u can console here what u will get
        this.handleLogin(resp);
      }
    });

    //we need to render google button
    //https://developers.google.com/identity/gsi/web/reference/js-reference - reference for below configuration
    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 250
    })
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]))  //we need payload of the token i.e 2nd part[1],first part is header i.e [0], 3rd part is secret
  }

  handleLogin(resp: any) {
    //resp : u will get credential from that u need to decrypt the
    if (resp) {
      //decode the token
      const payLoad = this.decodeToken(resp.credential);
      //store it in session 
      sessionStorage.setItem('loggedInUser', JSON.stringify(payLoad));
      //naviagte to home page or browse page
      this.router.navigate(['browse']);
    }
  }
}
