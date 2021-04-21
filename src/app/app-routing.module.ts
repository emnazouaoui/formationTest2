import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HomeComponent } from './home/home.component';


//import { DomaineComponent } from './domaine/domaine.component';
import { DomaineAddComponent } from './domaine/domaine-add/domaine-add.component';
import { DomaineDetailsComponent } from './domaine/domaine-details/domaine-details.component';
import { DomaineListComponent } from './domaine/domaine-list/domaine-list.component';
import { DomaineUpdateComponent } from './domaine/domaine-update/domaine-update.component';



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

  { path: 'adddomaine', component: DomaineAddComponent },
  { path: 'domaine/:id', component: DomaineDetailsComponent }




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


