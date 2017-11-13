import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';

import {CoreModule} from './core/core.module';
import {UsersModule} from './users/users.module';
import {CarRoutesModule} from './routes.module';
import {MessagesModule} from './messages/messages.module';

import {AppComponent} from './app.component';
import {NgRedux, NgReduxModule} from 'ng2-redux';
import {IAppState, store} from './store';
import {Router} from '@angular/router';

import {AuthService} from './core/auth.service';
import {config} from './core/config';

import {PostsModule} from './posts/posts.module';
import {SpinnerComponent} from './core/spinner/spinner.component';
import {ProfileModule} from './profile/profile.module';
import {HomeModule} from './home/home.module';
import {PageNotFoundComponent} from './shared/page-not-found.component';
import {AdminModule} from './admin/admin.module';
import {ProfileCardComponent} from './shared/profile/profile-card.component';
import {SearchModule} from './search/search.module';
import {LeagueModule} from './league/league.module';
import {PlayerModule} from './player/player.module';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgReduxModule,
    HomeModule,
    CarRoutesModule,
    UsersModule,
    CoreModule,
    PostsModule,
    ProfileModule,
    MessagesModule,
    AdminModule,
    SearchModule,
    LeagueModule,
    PlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
              private authService: AuthService,
              private router: Router) {
    this.ngRedux.provideStore(store);
    config(ngRedux, router, authService);
  }
}
