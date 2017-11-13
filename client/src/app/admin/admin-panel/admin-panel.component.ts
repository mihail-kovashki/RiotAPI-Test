import {Component, OnInit} from '@angular/core';
import {NgRedux} from "ng2-redux";
import {AdminActions} from "../../store/admin/admin.actions";
import {IAppState} from "../../store/app.state";
import {UserModel} from "../../store/home/user.model";
import {AdminModel} from "./admin.model";

@Component({
  selector: 'home',
  templateUrl: './admin-panel.component.html',
  styles: []
})
export class AdminPanelComponent implements OnInit {

  administrator: AdminModel = new AdminModel();
  admins: UserModel[];

  constructor(private adminActions: AdminActions,
              private ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit() {
    this.adminActions.getAdmins();

    this.ngRedux
      .select(state => state.admin)
      .subscribe((admin) => {
        this.admins = admin.admins;
      })
  }

  makeAdmin () {
    this.adminActions.makeAdmin(this.administrator.name)
  }
}
