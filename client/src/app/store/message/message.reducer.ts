import {GET_THREAD_USERS, SEND_MESSAGE, THREAD_LOADED, USER_NOT_FOUND} from "./message.actions";
import {initialState, IMessageState} from "./message.state";

function threadLoaded(state: IMessageState, action: any) {
  const result = action.result;
  if (result.status === 404) {
    return Object.assign({}, state, {
      messageThread: {status: 'error'}
    })
  }
  return Object.assign({}, state, {
    messageThread: result
  })
}

function sendMessage(state, action) {
  const result = action.result;
  return Object.assign({}, state, {
    messageThread: result
  })
}

function getThreadUsers(action, state) {
  if (action.err) {
    return Object.assign({}, state, {
      messageThread: {status: 'error'}
    });
  }
  const result = action.result;
  return Object.assign({}, state, {
    threadUsers: result
  });
}

export function messageReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return sendMessage(state, action);
    case THREAD_LOADED:
      return threadLoaded(state, action);
    case GET_THREAD_USERS:
      return getThreadUsers(action, state);
    case USER_NOT_FOUND:
      return getThreadUsers(action, state);
    default:
      return state
  }
}
