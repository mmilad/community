import { Component, OnInit } from '@angular/core';

import { FirebaseService } from './../../../services/firebase.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  public email = '';
  public resetError = '';

  constructor(
    private fs: FirebaseService
  ) { }

  reset() {
    this.fs.resetPassword(this.email)
      .then(res => {
        console.log(res);
        console.log("resetting password email sent");
      })
      .catch(err => this.resetError = err.message);
  }

  ngOnInit() {

  }

}
