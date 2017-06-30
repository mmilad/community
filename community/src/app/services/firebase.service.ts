import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase/app'

@Injectable()
export class FirebaseService {
  authStat:FirebaseListObservable<any>
  public login$: Observable<firebase.User>;
  constructor(
    private auth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    this.login$ = this.auth.authState;
  }


  request(list) {
    return this.db.list(list)
  }
  serverValue() {
    return firebase.database.ServerValue.TIMESTAMP
  }
  google_login() {
    return this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }
  email_login(email, password) {
    return this.auth.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    return this.auth.auth.signOut()
  }
  getAuthState() {
    return this.auth.auth
  }
}
