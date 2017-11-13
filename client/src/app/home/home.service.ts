import {Injectable} from '@angular/core';
import {HttpService} from "../core/http.service";

@Injectable()
export class HomeService {
  constructor(private httpService: HttpService) {
  }

  getAllChampions() {
    return this.httpService.get('api/champions/all');
  }

}
