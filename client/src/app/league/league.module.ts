import {NgModule} from '@angular/core';
import {LeagueComponent} from "./league.component";
import {PagerService} from "../shared/paging/pager.service";
import {CommonModule} from "@angular/common";
import {LeagueActions} from "../store/league/league.actions";
import {LeagueService} from "./league.service";
import {RouterModule} from "@angular/router";
import {ChampionCardComponent} from "../shared/champions/champion-card.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [LeagueComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  providers: [PagerService, LeagueActions, LeagueService],
  exports: [LeagueComponent]
})

export class LeagueModule { }
