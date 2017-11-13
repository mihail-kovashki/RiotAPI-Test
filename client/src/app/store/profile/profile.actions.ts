import {Injectable} from '@angular/core';
import {ProfileService} from '../../profile/profile.service';
import {AddImageService} from '../../profile/add-image/add-image.service';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../app.state';

export const PROFILE_LOADED = 'profile/LOADED';
export const PROFILE_PIC_ADD = 'profile/PICTURE_ADD';
export const IMAGE_ADD = 'profile/IMAGE_ADD';

@Injectable()
export class ProfileActions {
  constructor(private profileService: ProfileService,
              private addImageService: AddImageService,
              private ngRedux: NgRedux<IAppState>) {
  }

  getProfile(userId) {
    this.profileService
      .getProfile(userId)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: PROFILE_LOADED,
          result
        });
      });
  }

  addProfilePic(data, userId) {
    this.profileService
      .addProfilePic(data, userId)
      .subscribe(() => {
        this.ngRedux.dispatch({
          type: PROFILE_PIC_ADD
        });
      });
  }

  addImage(data, userId) {
    this.addImageService
      .addImage(data, userId)
      .subscribe(() => {
        this.ngRedux.dispatch({
          type: IMAGE_ADD
        });
      });
  }
}
