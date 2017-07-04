import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "./../../services/firebase.service";

import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  constructor(
    private fs:FirebaseService,
    private router:Router
  ) { }

  logout() {
    this.router.navigate(['login'])
    this.fs.logout();
  }
  ngOnInit() {
  }

}
