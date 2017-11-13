export class PlayerCardModel {
  constructor(public playerOrTeamId: string = '',
              public playerOrTeamName: string = '',
              public wins: string = '',
              public losses: string = '',
              public leaguePoints: string = '',) {
  }
}
