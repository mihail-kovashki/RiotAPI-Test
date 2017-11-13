import {Injectable} from '@angular/core';
import {HttpService} from "../core/http.service";

@Injectable()
export class MessageService {
  constructor(private httpService: HttpService) {
  }

  getThread (otherUserUsername) {
    return this.httpService.get(`api/thread/${otherUserUsername}`, true);
  }

  sendMessage (threadId, content) {
    return this.httpService.post(`api/message/add/${threadId}`, content, true)
  }

  getThreadUsers (firstUserId, secondUserId) {
    return this.httpService.get(`api/user/${firstUserId}/${secondUserId}`, true);
  }

}
