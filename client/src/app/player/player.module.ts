import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PlayerComponent} from './player.component';
import {PlayerService} from './player.service';
import {PlayerActions} from '../store/player/player.actions';

@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [PlayerComponent],
  providers: [PlayerService, PlayerActions]
})
export class PlayerModule {

}
