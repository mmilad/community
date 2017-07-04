import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../services/firebase.service';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public user:any
  constructor(
    private fs: FirebaseService,
    private us: UserService
  ) {
      this.user = us.user;
      // console.log(this.user_photo)
  }
  ngOnInit() {
  }

}
