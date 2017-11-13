const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const passport = require('passport')
const session = require('express-session')
const swig = require('swig')
const React = require('react')
const ReactDOM = require('react-dom/server')
const Router = require('react-router')
const cors = require('cors')


module.exports = {
  attachMiddleWares: (app) => {
    app.set('port', process.env.PORT || 3000)
    app.use(logger('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(express.static(path.normalize(path.join(__dirname, '../../../public'))))
    app.use(session({secret: 'S3cr3t', saveUninitialized: false, resave: false}))
    app.use(passport.initialize())
    app.use(cors())
    app.use(passport.session())
  }
}
