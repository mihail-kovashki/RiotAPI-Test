import {Component, OnInit} from '@angular/core';
import {NgRedux} from "ng2-redux";
import {IAppState} from "../store/app.state";
import {UsersActions} from "../store/users/users.actions";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  authenticated: boolean = false;
  username: string = null;
  id: string = null;
  isAdmin: boolean = false;
  searchString: string = '';

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private usersActions: UsersActions,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.ngRedux
      .select(state => state.users)
      .subscribe(users => {
        this.authenticated = users.userAuthenticated;
        this.username = users.user.username || '';
        this.id = users.user.id;
        this.isAdmin = users.isAdmin;
      });
  }

  logout() {
    this.usersActions.logout();
    this.authService.deauthenticateUser();
    this.authService.removeUser();

    this.router.navigateByUrl('');
  }

  search() {
    this.router.navigateByUrl(`/search/${this.searchString}`)
  }
}
