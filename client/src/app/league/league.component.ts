import {Component, OnInit} from '@angular/core';
import {LeagueActions} from "../store/league/league.actions";
import {IAppState} from "../store/app.state";
import {NgRedux} from "ng2-redux";
import {AuthService} from "../core/auth.service";
import {PlayerCardModel} from "../shared/players/player-card.model";

@Component({
  selector: 'league',
  templateUrl: './league.component.html',
  styles: [`a.disabled {
    pointer-events: none;
    cursor: not-allowed;
  }`]
})
export class LeagueComponent implements OnInit {
  //all players
  allPlayers: PlayerCardModel[];

  isAuthenticated = false;

  constructor(private leagueActions: LeagueActions,
              private ngRedux: NgRedux<IAppState>,
              private authService: AuthService) {
  }

  ngOnInit() {

    this.ngRedux
      .select(state => state.league)
      .subscribe((league) => {
        this.allPlayers = league.allPlayers;
      });

    this.ngRedux
      .select(state => state.users)
      .subscribe((users) => {
        this.isAuthenticated = users.userAuthenticated;
      });

    this.leagueActions.getChallengerLeague();

  }
}
