import {Injectable} from '@angular/core';
import {HttpService} from "../core/http.service";

@Injectable()
export class UsersService {
  constructor(private httpService: HttpService) {
  }

  register(user) {
    return this.httpService.post('user/register', user);
  }

  login(user) {
    return this.httpService.post('user/login', user);
  }

  allUsers() {
    return this.httpService.get('user/all', true);
  }

  getMessageThreads() {
    return this.httpService.get('user/threads', true);
  }
}
