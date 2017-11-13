import {initialState, ILeagueState} from "./league.state";
import {LEAGUE_CHALLENGER} from "./league.actions";

function leagueChallenger (state: ILeagueState, action: any) {
  const result = action.result;
  let allPlayers = result.entries.sort((a, b) => {
    if (a.leaguePoints < b.leaguePoints) return 1;
    else if (a.leaguePoints > b.leaguePoints) return -1;
    else return 0;
  });;
  return Object.assign({}, state, {
    allPlayers: allPlayers,
  })
}

export function leagueReducer(state = initialState, action) {
  if (action.type  === LEAGUE_CHALLENGER) {
    return leagueChallenger(state, action);
  }
  return state
}
