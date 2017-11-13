import {Injectable} from "@angular/core";
import {AdminService} from "../../admin/admin.service";
import {NgRedux} from "ng2-redux";
import {IAppState} from "../app.state";

export const GET_ADMINS = 'admins/GET';
export const MAKE_ADMIN = 'admins/MAKE';
export const UNSUCCESSFUL_ACTION = 'action/UNSUCCESSFUL';

@Injectable()
export class AdminActions {
  constructor(private adminService: AdminService,
              private ngRedux: NgRedux<IAppState>) {
  }


  getAdmins() {
    this.adminService
      .getAdmins()
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: GET_ADMINS,
          result
        });
      })
  }

  makeAdmin(username: string) {
    this.adminService
      .makeAdmin(username)
      .subscribe((result) => {
        this.ngRedux.dispatch({
          type: MAKE_ADMIN,
          result
        });
      })
  }
}
