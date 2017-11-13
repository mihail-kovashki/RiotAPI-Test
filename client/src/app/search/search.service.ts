import {Injectable} from '@angular/core';
import {HttpService} from "../core/http.service";

@Injectable()
export class SearchService {
  constructor(private httpService: HttpService) {
  }

  getSearchedPlayers(summonerName) {
    return this.httpService.get(`api/player/findByName/${summonerName}`, true);
  }

}
