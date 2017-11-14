import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';

import { PrivateRoute } from './core/private-route';

import {RegisterComponent} from './users/register/register.component';
import {LoginComponent} from './users/login/login.component';
import {AddPostComponent} from './posts/add-post.component';
import {ProfileComponent} from './profile/profile.component';
import {ProfilePicAddComponent} from './profile/profile-pic-add.component';
import {EditDescriptionComponent} from './profile/edit-description/edit-description.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './shared/page-not-found.component';
import {AdminRoute} from './core/admin-route';
import {AdminPanelComponent} from './admin/admin-panel/admin-panel.component';
import {SearchComponent} from './search/search.component';
import {LeagueComponent} from './league/league.component';
import {PlayerComponent} from './player/player.component';

const routes: Routes = [
  { path: '', component: LeagueComponent },
  { path: 'league/challenger', component: LeagueComponent },
  { path: 'player/:id', component: PlayerComponent },
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'search/:searchString', component: SearchComponent },
  {
    path: 'posts/add',
    component: AddPostComponent,
    canActivate: [PrivateRoute]
  },
  {
    path: 'user/profile/:id',
    component: ProfileComponent
  },
  { path: 'user/profile-picture/:id', component: ProfilePicAddComponent, canActivate: [PrivateRoute] },
  {
    path: 'profile/edit/description',
    component: EditDescriptionComponent,
    canActivate: [PrivateRoute]
  },
  {
    path: 'admin/panel',
    component: AdminPanelComponent,
    canActivate: [PrivateRoute, AdminRoute]
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class CarRoutesModule { }
