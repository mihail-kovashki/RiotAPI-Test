import {PROFILE_LOADED, PROFILE_PIC_ADD, IMAGE_ADD} from './profile.actions';
import {initialState, IProfileState} from './profile.state';
import {POST_CREATED} from '../post/post.actions';

function profileLoaded(state: IProfileState, action: any) {
  const result = action.result;
  return Object.assign({}, state, {
    userProfilePicture: result.profilePicture,
    userFirstName: result.firstName,
    userLastName: result.lastName,
    userGender: result.gender,
    userUsername: result.username,
    userAge: result.age,
    userFavouriteChampions: result.favouriteChampions,
    userImages: result.images
  });
}

function noteCreated (state, action) {
  return state;
}

function profilePicAdded(state, action) {
  return Object.assign({}, state, {
    profilePicAdded: true
  });
}

function imageAdd(state, action) {
  const result = action.result;
  return Object.assign({}, state, {
    images: result.images
  });
}

export function profileReducer(state = initialState, action) {
  switch (action.type ) {
    case PROFILE_LOADED:
      return profileLoaded(state, action);
    case PROFILE_PIC_ADD:
      return profilePicAdded(state, action);
    case POST_CREATED:
      return noteCreated(state, action);
    case IMAGE_ADD:
      return imageAdd(state, action);
    default:
      return state;
  }
}
