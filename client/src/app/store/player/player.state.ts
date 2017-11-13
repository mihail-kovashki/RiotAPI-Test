export interface IPlayerState {
  profileIconId: string 
  name: string 
  summonerLevel: string
  playerOrTeamId: string 
  playerOrTeamName: string 
  wins: string 
  losses: string 
  leaguePoints: string 
  tier: string
}

export const initialState: IPlayerState = {
  profileIconId: null,
  name: '',
  summonerLevel: '',
  playerOrTeamId: '',
  playerOrTeamName: '', 
  wins: '', 
  losses: '', 
  leaguePoints: '', 
  tier: '',
};
