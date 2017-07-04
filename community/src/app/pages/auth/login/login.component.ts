import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from './../../../services/firebase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {

  public loginError: string;
  public email = '';
  public password = '';

  constructor(
    private fs: FirebaseService,
    private router: Router
  ) { }

  login() {
    this.fs.login(this.email, this.password)
      .then(res => {
        if(!res.emailVerified){
          this.fs.logout();
          this.loginError = "Please verify your email adress";
        } else {
          this.router.navigate(['home']);
        }
      })
      .catch(err => {
        this.loginError = err.message;
      });
  }
  routeTo(path) {
      this.router.navigate([path]);
  }
  ngOnInit() { }

}

