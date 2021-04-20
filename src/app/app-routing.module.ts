import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';


import { DomaineUpdateComponent } from './domaine/domaine-update/domaine-update.component';
import { DomaineListComponent } from './domaine/domaine-list/domaine-list.component';

import { CreateDomaineComponent } from './domaine/create-domaine/create-domaine.component';
import { DomaineDetailsComponent } from './domaine/domaine-details/domaine-details.component';

import { DomaineTestComponent } from './domaine/domaine-test/domaine-test.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'domaines', component: DomaineListComponent },
  { path: 'updateDomaine/:id', component: DomaineUpdateComponent},

  { path: 'adddomaine', component: CreateDomaineComponent },
  { path: 'domaine/:id', component: DomaineDetailsComponent },
  { path: 'testdomaine', component: DomaineTestComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


