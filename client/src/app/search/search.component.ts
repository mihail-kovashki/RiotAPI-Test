import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PagerService} from "../shared/paging/pager.service";
import {SearchActions} from "../store/search/search.actions";
import {IAppState} from "../store/app.state";
import {NgRedux} from "ng2-redux";
import {AuthService} from "../core/auth.service";
import {UserModel} from "../store/home/user.model";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styles: [`a.disabled {
    pointer-events: none;
    cursor: not-allowed;
  }`]
})
export class SearchComponent implements OnInit {
  private player: {};
  loggedIn: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private pagerService: PagerService,
              private searchActions: SearchActions,
              private authService: AuthService,
              private ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const username = params['searchString'];
      this.searchActions.getSearchedPlayers(username);
    });

    this.loggedIn = this.authService.isUserAuthenticated();
    
    this.ngRedux
      .select(state => state.search)
      .subscribe((search) => {
        this.player = search;
      });

  }

}
