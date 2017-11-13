import {Component, OnInit} from '@angular/core';
import {PostModel} from './post.model';
import {Router} from '@angular/router';
import {PostActions} from '../store/post/post.actions';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html'
})

export class AddPostComponent implements OnInit {
  post: PostModel = new PostModel();
  currentUser: string = null;

  constructor(private postActions: PostActions,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.currentUser = this.authService.getUser();
  }

  addPost(id) {
    this.postActions.addPost(this.post);
    this.router.navigateByUrl(`user/profile/${this.currentUser['id']}`);
  }
}
