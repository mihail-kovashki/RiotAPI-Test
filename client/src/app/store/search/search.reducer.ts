import {initialState, ISearchState} from "./search.state";
import {SEARCH_PLAYERS} from "./search.actions";
import {UserModel} from "../home/user.model";

function searchPlayers(state: ISearchState, action: any) {
  const result = action.result;
  if (result.status) {
    if(result.status.status_code === 404) {
      return Object.assign({}, state, {
        notFound: true,
      })
    }
  }
  return Object.assign({}, state, {
    notFound: false,
    id: result.id,
    name: result.name
  })
}

export function searchReducer(state = initialState, action) {
  if (action.type === SEARCH_PLAYERS) {
    return searchPlayers(state, action);
  } 
  return state
}
