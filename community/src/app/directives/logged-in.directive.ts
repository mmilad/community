import { Directive } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from './../services/firebase.service';

@Directive({
  selector: '[appLoggedIn]'
})
export class LoggedInDirective {
  constructor(private router: Router, private fs: FirebaseService) {
    this.fs.login$.subscribe(user => {
      if (!user) {
        this.router.navigate(['login']);
      }
    });
  }

}
