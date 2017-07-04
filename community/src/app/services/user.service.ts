import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service'

@Injectable()
export class UserService {
  public user = {
    name: "",
    photo: "",
    id: ""
  };
  constructor(private fs:FirebaseService) {
    fs.login$.subscribe(userData => {
      this.updateUserData(userData);
    })
  }
  public updateProfile (obj) {
    this.fs.user.updateProfile({
      displayName: obj.name ? obj.name : this.user.name,
      photoURL: obj.photo ? obj.photo : this.user.photo
    }).then(res => {
      if(obj.onSuccess) {
        obj.onSuccess();
      }
      this.updateUserData(this.fs.user);
    })
    .catch(err => {
      if(obj.onError) {
        obj.onError(err);
      }
    });
  }

  updateUserData(userData) {
    this.user.name = userData.displayName;
    this.user.photo = userData.photoURL;
    this.user.id = userData.uid;
  }
}
