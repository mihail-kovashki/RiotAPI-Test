export class PlayerModel {
  constructor(public profileIconId: string = '',
              public name: string = '',
              public summonerLevel: string = '',
              public playerOrTeamId: string = '',
              public playerOrTeamName: string = '',
              public wins: string = '',
              public losses: string = '',
              public leaguePoints: string = ''
            ) {
  }
}
