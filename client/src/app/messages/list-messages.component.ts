import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MessageModel} from "./message.model";
import {NgRedux} from "ng2-redux";
import {IAppState} from "../store/app.state";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageActions} from "../store/message/message.actions";
import {AuthService} from "../core/auth.service";
import { ReversePipe } from '../shared/reverse-array.pipe';
import {ProfileModel} from "../profile/profile.model";

@Component({
  selector: 'list-messages',
  templateUrl: './list-messages.component.html'
})

export class ListMessagesComponent implements OnInit, OnChanges{
  @Input() thread: object;
  @Input() currentUserProfile: ProfileModel;
  @Input() secondUserProfile: ProfileModel;
  currentUser: string = '';

  constructor(
    private messageActions: MessageActions,
    private router: Router,
    private ngRedux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.getUser().username;
  }

  ngOnChanges() {
  }

}
