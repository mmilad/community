import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.modules';
import { FormControlDirective, FormsModule } from "@angular/forms";

// config 
import { FirebaseConfig } from  './config/firebase-config';

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
import { UserService } from "./services/user.service";

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ResetComponent } from './pages/auth/reset/reset.component';
import { RouteToDirective } from './directives/route-to.directive';
import { HomeComponent } from './pages/home/home.component';
import { HeadComponent } from './components/head/head.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { DialogComponentDirective } from './directives/dialog-component.directive';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
@NgModule({
  declarations: [
    FormControlDirective,
    AppComponent,
    LoginComponent,
    LoggedInDirective,
    RegisterComponent,
    ResetComponent,
    RouteToDirective,
    HomeComponent,
    HeadComponent,
    UpdateProfileComponent,
    DialogComponentDirective,
    SidebarComponent,
    DashboardComponent
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
    FirebaseService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
