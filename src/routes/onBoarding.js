const express = require('express');
const {register, login} = require('../controllers/onBoarding')
const routerOnBoarding = express.Router()

routerOnBoarding.post('/login', login)
routerOnBoarding.post('/register', register)

module.exports = {routerOnBoarding}