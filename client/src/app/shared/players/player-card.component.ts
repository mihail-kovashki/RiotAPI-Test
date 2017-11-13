import {Component, Input, OnInit} from '@angular/core';
import {PlayerCardModel} from "./player-card.model";
import {Router} from "@angular/router";
import {AuthService} from "../../core/auth.service";

@Component({
  selector: 'player-card',
  templateUrl: './player-card.component.html'
})
export class PlayerCardComponent{
  @Input() player: PlayerCardModel;
  @Input() index: number;
  defaultChampionPic = 'https://cdn3.iconfinder.com/data/icons/security-3-1/512/mask_person-512.png';
  loggedIn: boolean = false;

  constructor(private authService: AuthService) { }
  
  ngOnInit() {
    this.loggedIn = this.authService.isUserAuthenticated();
  }
  
}
