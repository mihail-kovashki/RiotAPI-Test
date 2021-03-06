import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { ISpinnerState, SpinnerService } from './spinner.service';

const ACTIVE_CLASS = 'is-active';

declare var componentHandler: any;

@Component({
  selector: 'story-spinner',
  template: `
    <div
      class="spinner mdl-spinner mdl-js-spinner mdl-spinner--single-color"
      [class.is-active]="visible"></div>
  `,
  styles: [`.spinner {position: absolute;left: 49%;top: 10%}`]
})

export class SpinnerComponent implements OnDestroy, OnInit {
  visible = false;

  private _spinnerStateChanged: Subscription;

  constructor(private _spinnerService: SpinnerService) { }

  ngOnInit() {
    componentHandler.upgradeDom();
    this._spinnerStateChanged = this._spinnerService.spinnerState
      .subscribe((state: ISpinnerState) => this.visible = state.show);
  }

  ngOnDestroy() {
    this._spinnerStateChanged.unsubscribe();
  }
}
