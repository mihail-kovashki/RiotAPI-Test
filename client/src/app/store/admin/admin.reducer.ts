import {initialState} from './admin.state';
import {GET_ADMINS, MAKE_ADMIN} from "./admin.actions";
import {UserModel} from "../home/user.model";

function getAdmins(state, action) {
  const result = action.result;
  return Object.assign({}, state, {
    admins: result
  })
}

function makeAdmin(state, action) {
  const result = action.result;
  let contains = false;

  state.admins.forEach(a => {
    if(a._id.indexOf(result._id) > -1) {
      contains = true;
    }
  });

  if(!contains) {
    let adminsArray = [];
    adminsArray.push(result);
    state.admins.forEach(a => adminsArray.push(a));

    return Object.assign({}, state, {
      admins: adminsArray
    })
  }
  return state;
}

export function adminReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ADMINS:
      return getAdmins(state, action);
    case MAKE_ADMIN:
      return makeAdmin(state, action);
    default:
      return state;
  }
}
