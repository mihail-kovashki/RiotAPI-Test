const User = require('../models/User')
const encryption = require('../utilities/encryption')
const jwt = require('jsonwebtoken')

module.exports = {
  getAllUsers: (req, res) => {
    User
      .find()
      .then(users => {
        if (!users) {
          return res.status(404).send({message: 'No users found'})
        }
        const responseUsers = users.map(user => (({_id, username}) => ({_id, username}))(user))
        res.status(200).send(responseUsers)
      })
  },
  register: {
    post: (req, res) => {
      let userData = req.body

      if (userData.password && userData.password !== userData.confirmPassword) {
        return res.status(400).send({message: 'Passwords do not match'})
      }

      let salt = encryption.generateSalt()
      userData.salt = salt

      if (userData.password) {
        userData.password = encryption.generateHashedPassword(salt, userData.password)
      }

      User
        .create({
          username: userData.username,
          password: userData.password,
          salt: userData.salt,
          firstName: userData.firstName,
          lastName: userData.lastName,
          age: userData.age,
          gender: userData.gender,
          favouriteChampions: userData.favouriteChampions
        })
        .then(user => {
          req.logIn(user, (err) => {
            if (err) {
              return res.status(200).send({message: 'Wrong credentials!'})
            }

            const payload = {
              exp: Math.floor(Date.now() / 1000) + (60 * 60),
              sub: req.user._id
            }

            // create a token string
            const token = jwt.sign(payload, 's0m3 r4nd0m str1ng')

            let responseData = {
              token: token,
              user: {
                id: user._id,
                username: user.username,
                roles: user.roles
              }
            }

            res.status(200).send(responseData)
          })
        })
        .catch(error => {
          console.log(error)
          let responseData = {
            message: 'Something went wrong!'
          }
          if (error.code === 11000) {
            responseData.message = 'This username is already taken!'
          }
          res.status(500).send(responseData)
        })
    }
  },
  login: {
    post: (req, res) => {
      let userData = req.body

      User.findOne({username: userData.username}).then(user => {
        if (!user || !user.authenticate(userData.password)) {
          return res.status(401).send({message: 'Wrong credentials!'})
        }

        req.logIn(user, (err, user) => {
          if (err) {
            return res.status(401).send({message: err})
          }

          const payload = {
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            sub: req.user._id
          }

          // create a token string
          const token = jwt.sign(payload, 's0m3 r4nd0m str1ng')

          let userObj = req.user

          let responseData = {
            token: token,
            user: {
              id: userObj._id,
              username: userObj.username,
              roles: userObj.roles
            }
          }

          res.status(200).send(responseData)
        })
      })
    }
  },
  profile: {
    get: (req, res) => {
      let userId = req.params.userId

      User.findById(userId).then(user => {
        if (!user) { return res.status(404).send({message: 'User no longer exists'}) }

        let userObj = {
          _id: user._id,
          username: user.username,
          age: user.age,
          firstName: user.firstName,
          lastName: user.lastName,
          gender: user.gender,
          favouriteChampions: user.favouriteChampions,
          profilePicture: user.profilePicture,
          images: user.images
        }

        res.status(200).send(userObj)
      })
    },
    getMultiple: (req, res) => {
      let firstUserId = req.params.firstUserId
      let secondUserId = req.params.secondUserId

      User.findById(firstUserId)
        .then(firstUser => {
          if (!firstUser) {
            return res.status(404).send({message: 'User no longer exists'})
          }
          let firstUserObj = {
            _id: firstUser._id,
            username: firstUser.username,
            age: firstUser.age,
            firstName: firstUser.firstName,
            lastName: firstUser.lastName,
            gender: firstUser.gender,
            userProfilePicture: firstUser.profilePicture,
            images: firstUser.images
          }
          User.findById(secondUserId)
            .then(secondUser => {
              if (!secondUser) {
                return res.status(404).send({message: 'User no longer exists'})
              }
              let secondUserObj = {
                _id: secondUser._id,
                username: secondUser.username,
                age: secondUser.age,
                firstName: secondUser.firstName,
                lastName: secondUser.lastName,
                gender: secondUser.gender,
                userProfilePicture: secondUser.profilePicture,
                images: secondUser.images
              }
              let users = {
                firstUser: firstUserObj,
                secondUser: secondUserObj
              }
              res.status(200).send(users)
            })
        })
    }
  },
  logout: (req, res) => {
    req.logout()
    res.status(200).end()
  },
  get: (req, res) => {
    let userId = req.params.userId
    User.findById(userId).then(user => {
      if (!user) { return res.status(404).send({message: 'User no longer exists'}) }

      let userObj = {
        username: user.username,
        age: user.age,
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        profilePicture: user.profilePicture,
        images: user.images
      }

      res.status(200).send(userObj)
    })
  },
  findUserByUsername: {
    get: (req, res) => {
      let username = req.params.username

      User.find({username: username}).then(user => {
        if (!user) {
          return res.status(404).send({message: 'User no longer exists'})
        }

        res.status(200).send(user)
      })
    }
  },
  blockUser: (req, res) => {
    let currentUserId = req.body.currentUserId
    let userForBlockId = req.body.userForBlockId

    User.findById(currentUserId).then(user => {
      if (!user.blockedUsersId.map((id) => id.toString()).includes(userForBlockId)) {
        user.blockedUsersId.push(userForBlockId)
        user.save()
        res.status(200).send()
      } else {
        res.status(404).send()
      }
    })
  },
  makeAdmin: (req, res) => {
    if (req.user.roles.indexOf('Admin') >= 0) {
      let userForAdmin = req.body.userForAdmin
      User.findOne({username: userForAdmin}, 'id username profilePicture favouriteChampions firstName lastName age roles').then(user => {
        if (!user) {
          return res.status(404).send({message: 'No such user exists'})
        } else {
          if(user.roles.indexOf('Admin') === -1) {
            user.roles.push('Admin')
            user.save()
          }

          res.send(user);
        }
      })
    } else {
      res.status(401).send()
    }
  },
  getAdmins: (req, res) => {
    if (req.user.roles.indexOf('Admin') >= 0) {
      User.find({roles: 'Admin'}, 'id username profilePicture favouriteChampions firstName lastName age').then(users => {
        if (!users) {
          return res.status(404).send({message: 'No admins found'})
        }
        res.status(200).send(users)
      })
    } else {
      res.status(401).send()
    }
  },
  addProfilePicture: (req, res) => {
    let profilePic = req.file.path.substring(req.file.path.indexOf('assets'))
    User.findById(req.user._id).then(user => {
      if (!user) {
        res.sendStatus(404)
        return
      }
      if (checkIfUserCanEdit(req.user, user._id)) {
        user.profilePicture = profilePic
        user.save()
          .then(() => {
            res.status(200).send({message: `New profile picture added`})
          })
      } else {
        res.sendStatus(401)
      }
    })
  },
  addImage: (req, res) => {
    console.log('in the contoller')
    let image = req.file.path.substring(req.file.path.indexOf('assets'))
    User.findById(req.user._id).then(user => {
      if (!user) {
        res.sendStatus(404)
        return
      }
      if (checkIfUserCanEdit(req.user, user._id)) {
        user.images.push(image)
        user.save()
          .then(() => {
            res.status(200).send({message: `New image added`})
          })
      } else {
        res.sendStatus(401)
      }
    })
  },
  follow: (req, res) => {
    let userId = req.user._id
    let userToFollow = req.params.id

    User
      .findByIdAndUpdate(userId, {$addToSet: {follows: userToFollow}}, {new: true})
      .then((user) => {
        res.status(200).send(user)
      })
  },
  unfollow: (req, res) => {
    let userId = req.user._id
    let userToFollow = req.params.id

    User
      .findByIdAndUpdate(userId, {$pull: {follows: userToFollow}}, {new: true})
      .then((user) => {
        res.status(200).send(user)
      })
  },
  getByName: (req, res) => {
    let username = req.params.username
    User
      .find({username: {$regex: '^' + username}})
      .then((users) => {
        for (let user of users) {
          delete user.password
          delete user.salt
        }
        res.status(200).send(users)
      })
  },
  editProfileFavouriteChampions: {
    post: (req, res) => {
      const userId = req.user._id
      const favouriteChampions = req.body.favouriteChampions

      User
        .findByIdAndUpdate(userId, {favouriteChampions: favouriteChampions})
        .then((favouriteChampions) => res.send(favouriteChampions))
    }
  },
  total: {
    get: (req, res) => {
      User.count().then(result => {
        res.send({totalUsers: result})
      })
    }
  },
  page: {
    get: (req, res) => {
      const pageSize = 10
      let currentPage = Number(req.query.page)
      if (!currentPage) {
        currentPage = 1
      }
      if (currentPage === 0) {
        currentPage = 1
      }

      let skip = (currentPage - 1) * pageSize
      User
        .find({}, 'id username profilePicture favouriteChampions firstName lastName age')
        .collation({locale: 'en', strength: 2})
        .sort({firstName: 1})
        .skip(skip)
        .limit(10)
        .then((result) => {
          res.send(result)
        })
    }
  }
}

function checkIfUserCanEdit (currUser, authorId) {
  if (currUser._id.toString() === authorId.toString()) {
    return true
  }

  return currUser.roles.indexOf('Admin') >= 0
}
