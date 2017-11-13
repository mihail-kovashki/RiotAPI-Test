import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';

import {NavbarComponent} from './navbar.component';
import {FooterComponent} from './footer.component';
import {HttpService} from './http.service';
import {RiotAPIService} from './riot-api.service';
import {AuthService} from './auth.service';
import {MessageHandlerComponent} from './message-handler.component';
import {PrivateRoute} from './private-route';
import {SpinnerService} from "./spinner/spinner.service";
import {AdminRoute} from "./admin-route";


@NgModule({
  declarations: [NavbarComponent, MessageHandlerComponent, FooterComponent],
  imports: [RouterModule, CommonModule, FormsModule],
  exports: [NavbarComponent, MessageHandlerComponent, FooterComponent],
  providers: [HttpService, AuthService, PrivateRoute, SpinnerService, AdminRoute, RiotAPIService]
})
export class CoreModule {

}
