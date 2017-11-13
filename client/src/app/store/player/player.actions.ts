import {Injectable} from '@angular/core';
import {PlayerService} from '../../player/player.service';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../app.state';

export const PLAYER_LOADED = 'player/LOADED';
export const PLAYER_LEAGUE_LOADED = 'player/LEAGUE_LOADED';

@Injectable()
export class PlayerActions {
  constructor(private playerService: PlayerService,
              private ngRedux: NgRedux<IAppState>) {
  }

  getPlayer(playerId) {
    this.playerService
      .getPlayer(playerId)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: PLAYER_LOADED,
          result
        });
      });
  }

  getPlayerLeague(playerId) {
    this.playerService
    .getPlayerLeague(playerId)
    .subscribe(result => {
      this.ngRedux.dispatch({
        type: PLAYER_LEAGUE_LOADED,
        result
      });
    });
  }

}
