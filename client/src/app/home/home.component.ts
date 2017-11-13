import {Component, OnInit} from '@angular/core';
import {HomeActions} from "../store/home/home.actions";
import {IAppState} from "../store/app.state";
import {NgRedux} from "ng2-redux";
import {AuthService} from "../core/auth.service";
import {ChampionCardModel} from "../shared/champions/champion-card.model";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [`a.disabled {
    pointer-events: none;
    cursor: not-allowed;
  }`]
})
export class HomeComponent implements OnInit {
  //all champions
  allChampions: ChampionCardModel[];

  isAuthenticated = false;

  constructor(private homeActions: HomeActions,
              private ngRedux: NgRedux<IAppState>,
              private authService: AuthService) {
  }

  ngOnInit() {

    this.ngRedux
      .select(state => state.home)
      .subscribe((home) => {
        this.allChampions = home.allChampions;
      });

    this.ngRedux
      .select(state => state.users)
      .subscribe((users) => {
        this.isAuthenticated = users.userAuthenticated;
      });

    this.homeActions.getAllChampions();

  }
}
