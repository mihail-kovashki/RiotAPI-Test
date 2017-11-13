import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import {Observable} from 'rxjs/Rx';
import {SpinnerService} from "./spinner/spinner.service";

const baseUrl = 'https://euw1.api.riotgames.com/lol/';
const apiKey = '&api_key=RGAPI-b28f64e3-76d6-4acb-b36b-41e994bd9889';
const getMethod = 'get';
const postMethod = 'post';

@Injectable()
export class RiotAPIService {
  constructor(private http: Http,
              private _spinnerService: SpinnerService,
              private authService: AuthService) {
  }

  get (url) {
    this._spinnerService.show();
    return this.http
      .get(`${baseUrl}${url}${apiKey}`)
      .map((res) => res.json())
      .finally(() => this._spinnerService.hide());
  }
}
