import {Component} from '@angular/core';
import {NgRedux} from "ng2-redux";
import {IAppState} from "../../store/app.state";
import {ProfileActions} from "../../store/profile/profile.actions";
import {AuthService} from '../../core/auth.service';
import {ProfileModel} from "./../profile.model";

@Component({
  selector: 'add-image',
  templateUrl: './add-image.component.html'
})
export class AddImage {
  profile: ProfileModel = new ProfileModel();
  private file: File;

  constructor(private ngRedux: NgRedux<IAppState>,
              private profileActions: ProfileActions,
              private authService: AuthService
            ) { }
  
  
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      this.file = fileList[0];
      this.profile.image = true
    } else {
      this.profile.image = false
    }
  }
  
  addImage() {
    const id = this.authService.getUser().id;
    const formData: FormData = new FormData();
    formData.append('image', this.file);
    this.profileActions.addImage(formData, id)
    let subscription = this.ngRedux
      .select(state => state.profile)
      .subscribe(profile => {
        if (profile.profilePicAdded) {
          subscription.unsubscribe();
        }
      })
  }
}
