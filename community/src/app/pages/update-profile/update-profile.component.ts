import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "./../../services/firebase.service";
import { UserService } from "./../../services/user.service";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  private uid:any;
  public user:any
  public errorMessage:string
  public error = {
    name: "",
    photo: "",
    message: ""
  }
  storage:any
  constructor(
    private fs: FirebaseService,
    private us: UserService
  ) {
    this.user = us.user;
  }
  mySibling(ref) {
    debugger
    ref.click();
    console.log(ref)
  }
  update() {
    if(this.user.name.length < 4 ) {
      this.error.name = "ihr username ist zu kurz";
    } else {
        this.us.updateProfile({
          name: this.user.name,
          onSuccess: res => {
            this.error.name ="";
            this.error.message ="";
          },
          onError: err => this.error.message = err
        });
    }
  }

  onFile(event) {
    var file = event.srcElement.files[0],
      filename = Date.now()+"."+file.type.substring(6, file.type.length);
    const upoadRef = this.fs.getUploadRef("images/"+this.user.id+"/"+filename);
    
    upoadRef.put(file)
      .then(res => {
        this.us.updateProfile({
          photo: res.downloadURL
        });
      })
      .catch(err => {
        this.error.message = "Only images are alowwed";
        console.log(err)
      })
  }

  ngOnInit() {

  }

}
