import {Component, Input, OnInit} from '@angular/core';
import {ChampionCardModel} from "./champion-card.model";
import {Router} from "@angular/router";
import {AuthService} from "../../core/auth.service";

@Component({
  selector: 'champion-card',
  templateUrl: './champion-card.component.html'
})
export class ChampionCardComponent{
  @Input() champion: ChampionCardModel;
  @Input() index: number;
  defaultChampionPic = 'https://cdn3.iconfinder.com/data/icons/security-3-1/512/mask_person-512.png';
}
