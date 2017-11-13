import {Injectable} from "@angular/core";
import {NgRedux} from "ng2-redux";
import {IAppState} from "../app.state";
import {MessageService} from "../../messages/message.service";

export const THREAD_LOADED = 'messages/THREAD_LOADED';
export const SEND_MESSAGE = 'messages/SEND';
export const GET_THREAD_USERS = 'messages/THREAD_USERS';
export const USER_NOT_FOUND = 'messages/USER_NOT_FOUND';

@Injectable()
export class MessageActions {
  constructor(private messageService: MessageService,
              private ngRedux: NgRedux<IAppState>) {
  }

  getThread(username) {
    this.messageService
      .getThread(username)
      .subscribe(
        result => {
          this.ngRedux.dispatch({
            type: THREAD_LOADED,
            result
          });
        },
        err => {
          this.ngRedux.dispatch({
            type: USER_NOT_FOUND,
            err
          });
        })
  }

  sendMessage (threadId, content) {
    this.messageService
      .sendMessage(threadId, content)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: SEND_MESSAGE,
          result
        });
      });
  }

  getThreadUsers(firstUserId, secondUserId) {
    this.messageService
      .getThreadUsers(firstUserId, secondUserId)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: GET_THREAD_USERS,
          result
        });
      });
  }
}
