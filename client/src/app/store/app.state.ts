import {IUsersState} from './users/users.state';
import {ICoreState} from './core/core.state';
import {IProfileState} from './profile/profile.state';
import {IMessageState} from './message/message.state';
import {IHomeState} from './home/home.state';
import {IPostState} from './post/post.state';
import {IAdminState} from './admin/admin.state';
import {ISearchState} from './search/search.state';
import {ILeagueState} from './league/league.state';
import {IPlayerState} from './player/player.state';

export interface IAppState {
  users: IUsersState;
  core: ICoreState;
  profile: IProfileState;
  message: IMessageState;
  home: IHomeState;
  admin: IAdminState;
  post: IPostState;
  search: ISearchState,
  league: ILeagueState,
  player: IPlayerState
}
