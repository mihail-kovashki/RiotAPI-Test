import { combineReducers } from 'redux';
import {IAppState} from './app.state';
import {usersReducer} from './users/users.reducer';
import {coreReducer} from './core/core.reducer';
import {profileReducer} from './profile/profile.reducer';
import {messageReducer} from './message/message.reducer';
import {homeReducer} from './home/home.reducer';
import {postReducer} from './post/post.reducer';
import {adminReducer} from './admin/admin.reducer';
import {searchReducer} from './search/search.reducer';
import {leagueReducer} from './league/league.reducer';
import {playerReducer} from './player/player.reducer';

export const reducer = combineReducers<IAppState>({
  users: usersReducer,
  core: coreReducer,
  profile: profileReducer,
  message: messageReducer,
  home: homeReducer,
  post: postReducer,
  admin: adminReducer,
  search: searchReducer,
  league: leagueReducer,
  player: playerReducer
});
