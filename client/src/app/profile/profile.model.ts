export class ProfileModel {
  constructor(public userProfilePicture: string = 'https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png',
              public userFirstName: string = '',
              public userLastName: string = '',
              public userGender: string = '',
              public userUsername: string = '',
              public userAge: string = '',
              public profilePicFile?: boolean,
              public userFavouriteChampions: string = '',
              public image?: boolean,
              public userImages: Array<string> = []
            ) {
  }
}
