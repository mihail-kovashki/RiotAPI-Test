import {Injectable} from '@angular/core';
import {HttpService} from '../core/http.service';

@Injectable()
export class PlayerService {
  constructor(private httpService: HttpService) {
  }

  getPlayer (playerId) {
    return this.httpService.get(`api/player/${playerId}`, true);
  }

  getPlayerLeague (playerId) {
    return this.httpService.get(`api/player/league/${playerId}`, true);
  }

}
