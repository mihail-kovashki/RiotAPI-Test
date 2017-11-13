import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store/app.state';
import {ProfileActions} from '../store/profile/profile.actions';
import {AuthService} from '../core/auth.service';
import {ProfileModel} from './profile.model';

@Component({
  selector: 'profile-pic-add',
  templateUrl: './profile-pic-add.component.html'
})
export class ProfilePicAddComponent {
  profile: ProfileModel = new ProfileModel();
  private file: File;

  constructor(private router: Router,
              private ngRedux: NgRedux<IAppState>,
              private profileActions: ProfileActions,
              private authService: AuthService
            ) { }


  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      this.file = fileList[0];
      this.profile.profilePicFile = true
    } else {
      this.profile.profilePicFile = false
    }
  }

  profilePicAdd() {
    const id = this.authService.getUser().id;
    const formData: FormData = new FormData();
    formData.append('image', this.file);
    this.profileActions.addProfilePic(formData, id)
    let subscription = this.ngRedux
      .select(state => state.profile)
      .subscribe(profile => {
        if (profile.profilePicAdded) {
          subscription.unsubscribe();
          this.router.navigateByUrl(`/user/profile/${id}`);
        }
      })
  }
}
