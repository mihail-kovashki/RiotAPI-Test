export interface IUsersState {
  userRegistered: boolean;
  userAuthenticated: boolean;
  token: boolean;
  isAdmin: boolean;
  user: {
    id: string,
    username: string,
    roles: string[],
  };
  allUsers: Array<object>;
  userThreads: Array<object>;
}

export const initialState: IUsersState = {
  userRegistered: false,
  userAuthenticated: false,
  token: null,
  user: {
    id: null,
    username: null,
    roles: []
  },
  allUsers: [],
  userThreads: [],
  isAdmin: false
};
