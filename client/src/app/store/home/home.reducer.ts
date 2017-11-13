import {initialState, IHomeState} from "./home.state";
import {CHAMPIONS_ALL} from "./home.actions";

function allChampions (state:IHomeState, action: any) {
  const result = action.result;
  console.log(result)
  let allChampions = Object.keys(result.data).map(key => {
    return result.data[key];
  });
  return Object.assign({}, state, {
    allChampions: allChampions,
  })
}

export function homeReducer(state = initialState, action) {
  if (action.type  === CHAMPIONS_ALL) {
    return allChampions(state, action);
  }
  return state
}
