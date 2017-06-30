import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.modules';
import { FormControlDirective, FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// mdi
import 'hammerjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MaterialModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdNativeDateModule
} from '@angular/material';


// directive
import { LoggedInDirective } from './directives/logged-in.directive';

// services
import { FirebaseService } from "./services/firebase.service";

import { FirebaseConfig } from  './config/firebase-config';
import { MainComponent } from './main/main.component';
@NgModule({
  declarations: [
    FormControlDirective,
    AppComponent,
    LoginComponent,
    LoggedInDirective,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MaterialModule,
    MdButtonModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdNativeDateModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
