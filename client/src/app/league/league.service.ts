import {Injectable} from '@angular/core';
import {HttpService} from "../core/http.service";

@Injectable()
export class LeagueService {
  constructor(private httpService: HttpService) {
  }

  getChallengerLeague() {
    return this.httpService.get('api/league/challenger');
  }

}
