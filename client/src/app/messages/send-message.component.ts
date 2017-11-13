import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageModel} from "./message.model";
import {NgRedux} from "ng2-redux";
import {IAppState} from "../store/app.state";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageActions} from "../store/message/message.actions";
import {AuthService} from "../core/auth.service";
import {ProfileModel} from "../profile/profile.model";

@Component({
  selector: 'send-message',
  templateUrl: './send-message.component.html'
})

export class SendMessageComponent implements OnInit, OnDestroy {
  message: MessageModel = new MessageModel();
  recipient: string = '';
  currentThread = {};
  currentUserProfile: ProfileModel = new ProfileModel();
  secondUserProfile: ProfileModel = new ProfileModel();
  checker;

  constructor(
    private messageActions: MessageActions,
    private router: Router,
    private ngRedux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  private checkMessages(username): void {
    this.checker = setInterval(() => {
      this.messageActions.getThread(username);
    }, 1000);
  }

  ngOnInit() {
    if (!this.authService.isUserAuthenticated()) {
      this.router.navigateByUrl('users/login')
    } else {
      this.route.params
        .subscribe(params => {
          const username = params['username'];
          this.checkMessages(username);
          this.recipient = username;

          this.ngRedux
            .select(state => state.message.messageThread)
            .subscribe(thread => {
              this.checkResponse(thread);
              this.currentThread = thread;
              if (thread.hasOwnProperty('userIds')) {
                this.getThreadUsers(thread);
                this.ngRedux
                  .select(state => state.message.threadUsers)
                  .subscribe(users => {
                    this.assignUserProfiles(users);
                  });
              }
            });
        });
    }

    
  }

  ngOnDestroy() {
    clearInterval(this.checker);
  }

  sendMessage(recipientUsername) {
    const threadId = this.currentThread['_id'];
    const content = this.message;
    this.messageActions.sendMessage(threadId, content);
    this.message = new MessageModel();
  }

  private getThreadUsers(thread) {
    const firstUserId = thread['userIds'][0];
    const secondUserId = thread['userIds'][1];
    this.messageActions.getThreadUsers(firstUserId, secondUserId);
  }

  private assignUserProfiles(users) {
    if (users.hasOwnProperty('firstUser') && users.hasOwnProperty('secondUser')) {
      if (users['firstUser']._id === this.authService.getUser().id) {
        this.currentUserProfile = users['firstUser'];
        this.secondUserProfile = users['secondUser'];
      } else {
        this.secondUserProfile = users['firstUser'];
        this.currentUserProfile = users['secondUser'];
      }
    }
  }

  private checkResponse(thread) {
    if (thread['status'] === 'error'){
      this.router.navigateByUrl('404')
    }
  }

}
