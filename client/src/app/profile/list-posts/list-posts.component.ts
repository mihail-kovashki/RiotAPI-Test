import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../../store/app.state';
import {PostActions} from '../../store/post/post.actions';
import {AuthService} from "../../core/auth.service";


@Component({
  selector: 'list-posts',
  templateUrl: './list-posts.component.html'
})
export class ListPostsComponent implements OnInit {
  posts: Array<object> = [ ];
  canDelete: boolean = false;
  currentUserId: string = '';
  profileOwnerId: string = '';

  constructor(private activatedRoute: ActivatedRoute,
              private ngRedux: NgRedux<IAppState>,
              private postActions: PostActions,
              private router: Router,
              private authService: AuthService) {

  }

  convertDate (date) {
    const dateToConvert = new Date(date);
    let dateToDisplay = dateToConvert.toString();
    dateToDisplay = dateToDisplay.slice(0, dateToDisplay.indexOf('GMT'));
    return dateToDisplay;
  }

  ngOnInit() {
    if (!this.authService.isUserAuthenticated()) {
  
    } else {
      this.currentUserId = this.authService.getUser().id;
      if (this.authService.isUserAdmin()) {
        this.canDelete = true;
      }
      this.ngRedux
        .select(state => state.post)
        .subscribe(result => {
          this.posts = result['posts'];
        });

      this.activatedRoute.params.subscribe((params: Params) => {
        const userId = params['id'];
        this.postActions.getAllPosts(userId);
      });

    this.activatedRoute.params.subscribe((params: Params) => {
      const userId = params['id'];
      this.profileOwnerId = userId;
      this.postActions.getAllPosts(userId);
    });
    }
  }

  deletePost(post) {
    const postId = post._id;
    const confirmDelete = confirm('Are you sure you want to delete this post? Press OK to confirm, or press Cancel to go back.');
    if (confirmDelete === true) {
      this.postActions.deletePost(postId);
    }
  }
}
