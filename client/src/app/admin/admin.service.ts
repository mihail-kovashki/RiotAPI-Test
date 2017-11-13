import {Injectable} from '@angular/core';
import {HttpService} from "../core/http.service";

@Injectable()
export class AdminService {
  constructor(private httpService: HttpService) {
  }

  getAdmins() {
    return this.httpService.get('user/getAdmins', true);
  }

  makeAdmin (username) {
    return this.httpService.post('api/user/makeAdmin', {userForAdmin: username}, true);
  }
}
