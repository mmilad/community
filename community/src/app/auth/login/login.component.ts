import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from './../../services/firebase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent  implements OnInit {

  public loginError: string;
  public email = '';
  public password = '';

  constructor(
    private fs: FirebaseService,
    private router: Router
  ) { }

  google_login() {
    this.fs.google_login()
      .then(res => {
        this.router.navigate(['main']);
      })
      .catch(err => {
        this.loginError = err.message;
      });
  }

  email_login() {
    this.fs.email_login(this.email, this.password)
      .then(res => {
        this.router.navigate(['main']);
      })
      .catch(err => {
        this.loginError = err.message;
      });
  }


  ngOnInit() { }

}

