import {Component, Input} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../../store/app.state';
import {ProfileActions} from '../../store/profile/profile.actions';
import {AuthService} from '../../core/auth.service';
import {ProfileModel} from '../profile.model';

@Component({
  selector: 'list-images',
  templateUrl: './list-images.component.html'
})
export class ListImagesComponent {
  profile: ProfileModel = new ProfileModel();
  private file: File;
  @Input() isOwnProfile;

  constructor(private ngRedux: NgRedux<IAppState>,
              private profileActions: ProfileActions,
              private authService: AuthService
            ) { }

  ngOnInit() {
    this.ngRedux
      .select(state => state.profile)
      .subscribe(profile => {
        this.profile = profile;
      });
  }
}
