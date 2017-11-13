import {ChampionCardModel} from "../../shared/champions/champion-card.model";

export interface IHomeState {
  allChampions: ChampionCardModel[];
}

export const initialState: IHomeState = {
  allChampions: []
};
