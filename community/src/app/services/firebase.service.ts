import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';

@Injectable()
export class FirebaseService {

  public login$: Observable<firebase.User>;

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFireDatabase,
    private fbA:FirebaseApp
  ) {
    this.login$ = this.auth.authState;
  }

  public get user(): firebase.User {
    return this.auth.auth.currentUser;
  };

  public get mandateList() {
    return this.db.list(`${this.user.uid}/mandate/`);
  }

  addMandat(mandat) {
    this.mandateList.push({ name: mandat });
  }

  getAuth() {
    return this.auth
  }
  login(email, password) {
    return this.auth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    if (this.user) {
      this.auth.auth.signOut();
    }
  }

  register(email, password) {
    return this.auth.auth.createUserWithEmailAndPassword(email, password)
  }

  resetPassword(email) {
    return this.auth.auth.sendPasswordResetEmail(email)
  }
  getUploadRef(path) {
    return this.fbA.storage().ref().child(path)
  }
}
