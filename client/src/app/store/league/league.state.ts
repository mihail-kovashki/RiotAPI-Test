import {PlayerCardModel} from "../../shared/players/player-card.model";

export interface ILeagueState {
  allPlayers: PlayerCardModel[];
}

export const initialState: ILeagueState = {
  allPlayers: []
};
