import {Injectable} from "@angular/core";
import {SearchService} from "../../search/search.service";
import {NgRedux} from "ng2-redux";
import {IAppState} from "../app.state";

export const SEARCH_PLAYERS = 'search/PLAYERS';


@Injectable()
export class SearchActions {
  constructor(private searchService: SearchService,
              private ngRedux: NgRedux<IAppState>) {
  }

  getSearchedPlayers(summonerName) {
    this.searchService
      .getSearchedPlayers(summonerName)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: SEARCH_PLAYERS,
          result
        });
      })
  }

}
