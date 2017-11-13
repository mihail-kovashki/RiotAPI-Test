import {Injectable} from '@angular/core';
import {HttpService} from '../core/http.service';

@Injectable()
export class PostService {
  constructor(private httpService: HttpService) {
  }

  addPost(post) {
    return this.httpService.post('api/post/add', post, true);
  }
}
