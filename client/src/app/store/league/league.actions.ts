import {Injectable} from "@angular/core";
import {LeagueService} from "../../league/league.service";
import {NgRedux} from "ng2-redux";
import {IAppState} from "../app.state";

export const LEAGUE_CHALLENGER = 'league/CHALLENGER';

@Injectable()
export class LeagueActions {
  constructor(private homeService: LeagueService,
              private ngRedux: NgRedux<IAppState>) {
  }

  getChallengerLeague () {
    this.homeService
      .getChallengerLeague()
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: LEAGUE_CHALLENGER,
          result
        });
      })
  }
}
