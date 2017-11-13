import {ProfileModel} from "../../profile/profile.model";
export interface IMessageState {
  messageThread: object;
  threadUsers: object;
}

export const initialState: IMessageState = {
  messageThread: {status: 'ok'},
  threadUsers: {}
};
