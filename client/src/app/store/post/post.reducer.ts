import {initialState} from './post.state';
import {POST_CREATED, ALL_POSTS, GET_DELETE_POST, DELETE_POST} from './post.actions';

function getAllPosts (state, action) {
  const result = action.result;
  return Object.assign({}, state, {
    posts: result
  });
}

function deletePost(state, action) {
  const result = action.result;
  let posts = state.posts;
  posts = posts.filter(p => p._id !== result.postId);
  if (result.success) {
    return Object.assign({}, state, {
      posts: posts
    });
  }
}

export function postReducer(state = initialState, action) {
  switch (action.type ) {
    case POST_CREATED:
      return state;
    case ALL_POSTS:
      return getAllPosts(state, action);
    case DELETE_POST:
      return deletePost(state, action);
    default:
      return state;
  }
}
