export class UserModel {
  constructor(public _id: string = '',
              public username: string = '',
              public firstName: string = '',
              public lastName: string = '',
              public description: string = '',
              public profilePicture: string = '',
              public age: number = null) {

  }
}
