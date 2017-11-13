import {Injectable} from '@angular/core';
import {HttpService} from "../../core/http.service";

@Injectable()
export class EditDescriptionService {
  constructor(private httpService: HttpService) {
  }

  editDesc (desc) {
    return this.httpService.post(`api/user/editDescription`, desc, true);
  }

}
