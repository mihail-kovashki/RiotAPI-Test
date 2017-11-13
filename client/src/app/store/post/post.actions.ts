import {Injectable} from '@angular/core';
import {ProfileService} from '../../profile/profile.service';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../app.state';
import {PostService} from '../../posts/post.service';
import {ListPostsService} from '../../profile/list-posts/list-posts.service';

export const POST_CREATED = 'post/CREATED';
export const ALL_POSTS = 'post/ALL_POSTS';
export const GET_DELETE_POST = 'post/GET_POST';
export const DELETE_POST = 'post/DELETE_POST';

@Injectable()
export class PostActions {
  constructor(private postService: PostService,
              private listPostsService: ListPostsService,
              private ngRedux: NgRedux<IAppState>) {
  }

  addPost(post) {
    this.postService
      .addPost(post)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: POST_CREATED,
          result
        });
      });
  }

  getAllPosts(userId) {
    this.listPostsService
      .getAllPosts(userId)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: ALL_POSTS,
          result
        });
      });
  }

  deletePost(postId) {
    this.listPostsService
      .deletePost(postId)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: DELETE_POST,
          result
        });
      });
  }
}
