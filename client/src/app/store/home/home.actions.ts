import {Injectable} from "@angular/core";
import {HomeService} from "../../home/home.service";
import {NgRedux} from "ng2-redux";
import {IAppState} from "../app.state";

export const CHAMPIONS_ALL = 'champions/ALL';

@Injectable()
export class HomeActions {
  constructor(private homeService: HomeService,
              private ngRedux: NgRedux<IAppState>) {
  }

  getAllChampions () {
    this.homeService
      .getAllChampions()
      .subscribe(result => {
        console.log('here')
        this.ngRedux.dispatch({
          type: CHAMPIONS_ALL,
          result
        });
      })
  }
}
