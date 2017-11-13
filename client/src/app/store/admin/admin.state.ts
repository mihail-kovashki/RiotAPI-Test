import {UserModel} from "../home/user.model";

export interface IAdminState {
  admins: UserModel[];
}

export const initialState: IAdminState = {
  admins: []
};
