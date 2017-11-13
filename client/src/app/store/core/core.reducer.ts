import { initialState } from './core.state';
import {ROUTE_CHANGE} from "./core.actions";

function handleMessage(state, action) {
  const result = action.result;
  if (result) {
    let message = result.message;
    const errors = result.errors;
    if (errors) {
      const keys = Object.keys(errors);
      if (keys.length > 0) {
        const firstKey = Object.keys(errors)[0];
        message = errors[firstKey];
      }
    }
    if (message) {
      if(message.code === 11000)
        message = 'Invalid Credentials';

      return Object.assign({}, state, {
        message: message
      });
    }
  }
  return state;
}

function routeChange(state, action) {
  return Object.assign({}, state, {
    message: null
  });
}

export function coreReducer(state = initialState, action) {
  if (action.type === ROUTE_CHANGE) {
    return routeChange(state, action);
  } else {
    return handleMessage(state, action);
  }
}
