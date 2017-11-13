import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../store/home/user.model";
import {Router} from "@angular/router";
import {AuthService} from "../../core/auth.service";

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html'
})
export class ProfileCardComponent implements OnInit{
  @Input() profile: UserModel;
  @Input() index: number;
  defaultProfilePic = 'https://cdn3.iconfinder.com/data/icons/security-3-1/512/mask_person-512.png';
  currentUser: string = '';
  loggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loggedIn = this.authService.isUserAuthenticated();
    this.currentUser = this.authService.getUser().username;
  }
}
