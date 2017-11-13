import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ProfileComponent} from './profile.component';
import {ProfilePicAddComponent} from './profile-pic-add.component';
import {ProfileService} from './profile.service';
import {ProfileActions} from '../store/profile/profile.actions';
import {EditDescriptionComponent} from './edit-description/edit-description.component';
import {EditDescriptionService} from './edit-description/edit-description.service';
import {AddImageService} from './add-image/add-image.service';
import {AddImage} from './add-image/add-image.component';
import {ListImagesComponent} from './list-images/list-images.component';
import {ListPostsComponent} from './list-posts/list-posts.component';
import {ListPostsService} from './list-posts/list-posts.service';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfilePicAddComponent,
    EditDescriptionComponent,
    AddImage,
    ListImagesComponent,
    ListPostsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [ProfileComponent],
  providers: [ProfileService, ProfileActions, EditDescriptionService, AddImageService, ListPostsService]
})
export class ProfileModule {

}
