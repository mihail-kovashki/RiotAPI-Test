import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgRedux} from "ng2-redux";
import {PlayerModel} from "./player.model";
import {PlayerCardModel} from "../shared/players/player-card.model";
import {IAppState} from "../store/app.state";
import {PlayerActions} from "../store/player/player.actions";
import {AuthService} from "../core/auth.service";


@Component({
  selector: 'player',
  templateUrl: './player.component.html'
})
export class PlayerComponent implements OnInit {
  player: PlayerModel = new PlayerModel();
  defaultPlayerPic = 'https://cdn3.iconfinder.com/data/icons/security-3-1/512/mask_person-512.png';

  constructor(private activatedRoute: ActivatedRoute,
              private ngRedux: NgRedux<IAppState>,
              private playerActions: PlayerActions,
              private authService: AuthService,
              private router: Router) {

  }

  ngOnInit() {
    if (!this.authService.isUserAuthenticated()) {
      this.router.navigateByUrl('users/login');
    } else {
      this.ngRedux
        .select(state => state.player)
        .subscribe(player => {
          this.player = player;
        });

      // subscribe to router event
      this.activatedRoute.params.subscribe((params: Params) => {
        const playerId = params['id'];
        this.playerActions.getPlayer(playerId);
        this.playerActions.getPlayerLeague(playerId);
      });
      
    }
  }
}
