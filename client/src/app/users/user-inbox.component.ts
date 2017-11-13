import {Component, OnDestroy, OnInit} from "@angular/core";
import {UsersActions} from "../store/users/users.actions";
import {NgRedux} from "ng2-redux";
import {IAppState} from "../store/app.state";
import {Router} from "@angular/router";
import {AuthService} from "../core/auth.service";

@Component({
  selector: 'user-inbox',
  templateUrl: './user-inbox.component.html'
})

export class UserInboxComponent implements OnInit{
  inboxThreads: Array<object> = [];
  currentUser: string = '';

  constructor(
    private userActions: UsersActions,
    private authService: AuthService,
    private router: Router,
    private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.userActions.userThreads();
    this.currentUser = this.authService.getUser().username;
    this.ngRedux
      .select(state => state.users.userThreads)
      .subscribe(threads => {
        this.inboxThreads = threads;
      })
  }
}
