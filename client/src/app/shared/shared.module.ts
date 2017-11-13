import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileCardComponent} from "./profile/profile-card.component";
import {ChampionCardComponent} from "./champions/champion-card.component";
import {PlayerCardComponent} from "./players/player-card.component";


@NgModule({
  declarations: [ProfileCardComponent, ChampionCardComponent, PlayerCardComponent],
  imports: [CommonModule],
  exports: [ProfileCardComponent, ChampionCardComponent, PlayerCardComponent]
})
export class SharedModule {

}
