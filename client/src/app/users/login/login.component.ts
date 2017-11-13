import {Component} from '@angular/core';
import {UsersActions} from '../../store/users/users.actions';
import {NgRedux} from 'ng2-redux';
import {Router} from '@angular/router';
import {IAppState} from '../../store/app.state';
import {LoginUserModel} from './login-user.model';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  user: LoginUserModel = new LoginUserModel();

  constructor(private userActions: UsersActions,
              private authService: AuthService,
              private router: Router,
              private ngRedux: NgRedux<IAppState>) {
  }

  login() {
    this.userActions.login(this.user);
    let subscription = this.ngRedux
      .select(state => state.users)
      .subscribe(users => {
        if (users.userAuthenticated) {
          this.authService.authenticateUser(users.token);
          this.authService.saveUser(users.user);
          subscription.unsubscribe();
          this.router.navigateByUrl('/');
        }
      }, err => {
        console.log(err);
      });
  }
}
