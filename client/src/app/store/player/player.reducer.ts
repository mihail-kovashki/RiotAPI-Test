import {PLAYER_LOADED, PLAYER_LEAGUE_LOADED} from './player.actions';
import {initialState, IPlayerState} from './player.state';
import {POST_CREATED} from '../post/post.actions';

function playerLoaded(state: IPlayerState, action: any) {
  const result = action.result;
  return Object.assign({}, state, {
    profileIconId: result.profileIconId,
    name: result.name,
    summonerLevel: result.summonerLevel 
  });
}

function playerLeagueLoaded(state: IPlayerState, action: any) {
  const result = action.result[0];
  if (result) {
    return Object.assign({}, state, {
      playerOrTeamId: result.playerOrTeamId,
      playerOrTeamName: result.playerOrTeamName,
      wins: result.wins,
      losses: result.losses,
      leaguePoints: result.leaguePoints,
      tier: result.tier
    });
  }
  return state
}

export function playerReducer(state = initialState, action) {
  switch (action.type ) {
    case PLAYER_LOADED:
      return playerLoaded(state, action);
    case PLAYER_LEAGUE_LOADED:
      return playerLeagueLoaded(state, action);
    default:
      return state;
  }
}
