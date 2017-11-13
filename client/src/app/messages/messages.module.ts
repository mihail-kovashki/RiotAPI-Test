import {NgModule} from '@angular/core';
import {SendMessageComponent} from './send-message.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UsersActions} from "../store/users/users.actions";
import {UsersService} from "../users/users.service";
import {RouterModule} from "@angular/router";
import {MessageActions} from "../store/message/message.actions";
import {MessageService} from "./message.service";
import {ListMessagesComponent} from "./list-messages.component";
import {ReversePipe} from "../shared/reverse-array.pipe";

@NgModule({
  declarations: [SendMessageComponent, ListMessagesComponent, ReversePipe],
  imports: [FormsModule, CommonModule, RouterModule],
  providers: [UsersActions, UsersService, MessageActions, MessageService]
})

export class MessagesModule { }
