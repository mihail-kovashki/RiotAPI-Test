import {Injectable} from '@angular/core';
import {HttpService} from "../../core/http.service";

@Injectable()
export class AddImageService {
  constructor(private httpService: HttpService) {
  }

  addImage(data, userId) {
    return this.httpService.postFormData(`api/user/images/${userId}`, data, true);
  }
}
