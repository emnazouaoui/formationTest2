import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
//import { DomaineComponent } from './domaine/domaine.component';
import { DomaineAddComponent } from './domaine/domaine-add/domaine-add.component';
import { DomaineDetailsComponent } from './domaine/domaine-details/domaine-details.component';
import { DomaineListComponent } from './domaine/domaine-list/domaine-list.component';
import { DomaineUpdateComponent } from './domaine/domaine-update/domaine-update.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { authInterceptorProviders } from './_helpers/auth.service';





//    DomaineComponent,


@NgModule({
  declarations: [
    AppComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    DomaineAddComponent,
    DomaineDetailsComponent,
    DomaineListComponent,
    DomaineUpdateComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
